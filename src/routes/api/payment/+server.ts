import type { RequestHandler } from './$types';
import { error as svelteError, json } from '@sveltejs/kit';
import {
	PRIVATE_SENDGRID_API_KEY,
	PRIVATE_SENGRID_LICENSE_TEMPLATE_ID,
	PRIVATE_STRIPE_API_KEY,
	PRIVATE_STRIPE_ENDPOINT_SECRET
} from '$env/static/private';
import { supabaseClientAdmin } from '$lib/db.server';
import { Stripe } from 'stripe';
import { getErrorMessage } from '$lib/utilities';
import sendgrid from '@sendgrid/mail';
import { handleErrorAndGetData } from '$lib/db';

sendgrid.setApiKey(PRIVATE_SENDGRID_API_KEY);

export const POST: RequestHandler = async ({ request }) => {
	try {
		const signature = request.headers.get('stripe-signature') ?? '';

		const stripe = new Stripe(PRIVATE_STRIPE_API_KEY, { apiVersion: '2022-11-15' });

		const event = await stripe.webhooks.constructEventAsync(
			await request.text(),
			signature,
			PRIVATE_STRIPE_ENDPOINT_SECRET
		);

		switch (event.type) {
			case 'checkout.session.completed': {
				const session = event.data.object as Stripe.Checkout.Session;
				const email = session.customer_email || session.customer_details?.email;

				if (!email) {
					throw new Error('Missing email');
				}

				const data = handleErrorAndGetData(
					await supabaseClientAdmin
						.from('licenses')
						.insert({
							email
						})
						.select()
				);

				if (data.length == 0) {
					throw new Error('Missing email');
				}

				await sendgrid.send({
					from: 'noreplay@gpt-commands.com',
					templateId: PRIVATE_SENGRID_LICENSE_TEMPLATE_ID,
					personalizations: [
						{
							to: { email: email },
							dynamicTemplateData: { LICENSE: data[0].license_key || '' }
						}
					]
				});

				// Then define and call a function to handle the event checkout.session.completed
				break;
			}
			default: {
				console.debug(`Unhandled Stripe event: ${event.type}`);
			}
		}

		return json({ done: true });
	} catch (error) {
		console.error('Payment error', getErrorMessage(error));
		console.debug(error);
		throw svelteError(500, { message: getErrorMessage(error) });
	}
};
