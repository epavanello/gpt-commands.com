export function getErrorMessage(e: unknown) {
	if (typeof e === 'string') {
		return e;
	} else if (e instanceof Error) {
		return e.message;
	}
	return 'unknown';
}

export function isSameDay(date1: Date, date2: Date) {
	return (
		date1.getDate() === date2.getDate() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getFullYear() === date2.getFullYear()
	);
}
