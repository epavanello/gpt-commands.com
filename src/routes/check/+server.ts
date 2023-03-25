// write a post request for sveltekit that verify with supabase if license key is valid inside the table "licenses" with the column "license_key"

import type { RequestHandler } from './$types';
import { error as svelteError, json } from '@sveltejs/kit';
import { supabaseClientAdmin } from '$lib/db.server';
import { getErrorMessage } from '$lib/utilities';
import { handleErrorAndGetData } from '$lib/db';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { license_key } = await request.json();
		const row = handleErrorAndGetData(
			await supabaseClientAdmin.from('licenses').select('*').eq('license_key', license_key)
		);
		if (!row) {
			throw new Error('License key not found');
		}

		return json({ done: true });
	} catch (error) {
		// aggiungi un attesa di 5 secondi per evitare bruteforce

		await new Promise((resolve) => setTimeout(resolve, 5000));
		throw svelteError(500, { message: getErrorMessage(error) });
	}
};
