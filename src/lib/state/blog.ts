import { writable } from 'svelte/store';

export const visibleCount = writable(9);
export const selectedCategory = writable('All');
