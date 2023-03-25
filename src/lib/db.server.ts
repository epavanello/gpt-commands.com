import { PRIVATE_SUPABASE_SERVICE_ROLE, PRIVATE_SUPABASE_URL } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';
import type { Database } from './supabase-types';

export const supabaseClientAdmin = createClient<Database>(
	PRIVATE_SUPABASE_URL,
	PRIVATE_SUPABASE_SERVICE_ROLE
);
