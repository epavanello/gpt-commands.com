// src/stores/content.js
import { writable } from 'svelte/store';
import { isSameDay } from './utilities';

function storeContainToday() {
	const storedDate = localStorage.lastDay;
	const now = new Date();

	const parsedDate = new Date(storedDate);

	return storedDate && !isNaN(parsedDate.getTime()) && isSameDay(now, parsedDate);
}

function updateStoreWithToday() {
	localStorage.lastDay = new Date().toISOString();
}

// Get the value out of storage on load.
let defaultDailyCounter: number = parseInt(localStorage.counter || '0', 10) || 0;

if (!storeContainToday()) {
	updateStoreWithToday();
	defaultDailyCounter = 0;
}

localStorage.counter;

// Set the stored value or a sane default.
export const counter = writable(defaultDailyCounter);

// Anytime the store changes, update the local storage value.
counter.subscribe((value) => (localStorage.counter = value));
