// write a post request for sveltekit that verify with supabase if license key is valid inside the table "licenses" with the column "license_key"

import type { RequestHandler } from './$types';
import { error as svelteError, json } from '@sveltejs/kit';
import { supabaseClientAdmin } from '$lib/db.server';
import { getErrorMessage } from '$lib/utilities';
import { handleErrorAndGetData } from '$lib/db';

const headers = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type'
};
// ebable cors for this route
export const OPTIONS = () => {
	return new Response('', {
		status: 200,
		headers
	});
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { licenseKey } = await request.json();
		const row = handleErrorAndGetData(
			await supabaseClientAdmin.from('licenses').select('*').eq('license_key', licenseKey)
		);
		if (!row) {
			await new Promise((resolve) => setTimeout(resolve, 5000));
			return json({ valid: false });
		}
		return json({ valid: true }, { headers });
	} catch (error) {
		// aggiungi un attesa di 5 secondi per evitare bruteforce

		await new Promise((resolve) => setTimeout(resolve, 5000));
		throw svelteError(500, { message: getErrorMessage(error) }, { headers });
	}
};
