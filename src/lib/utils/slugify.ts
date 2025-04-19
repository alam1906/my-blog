// src/lib/utils/slugify.ts
export function slugify(text: string) {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9 -]/g, '') // Hapus karakter aneh
		.replace(/\s+/g, '-') // Ganti spasi dengan dash
		.replace(/-+/g, '-'); // Hilangkan dash ganda
}
