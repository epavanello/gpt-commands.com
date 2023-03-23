import type { Database } from './supabase-types';

export function handleError<TError extends { message: string }>({
	error
}:
	| {
			error: null;
	  }
	| {
			error: TError;
	  }) {
	if (error) {
		throw new Error(error.message, {
			cause: error
		});
	}
}
export function handleErrorAndGetData<TData, TError extends { message: string }>({
	data,
	error
}:
	| {
			data: TData;
			error: null;
	  }
	| {
			data: null;
			error: TError;
	  }) {
	if (error) {
		throw new Error(error.message, {
			cause: error
		});
	} else if (data) {
		return data;
	} else {
		throw new Error('Missig db data');
	}
}

export function isPaidUser(userInfo: Database['public']['Tables']['user_info']['Row'] | null) {
	if (!userInfo || !userInfo.current_period_end) {
		return false;
	}
	const periodEnd = new Date(userInfo.current_period_end);
	return !isNaN(periodEnd.getTime()) && new Date() < periodEnd;
}
