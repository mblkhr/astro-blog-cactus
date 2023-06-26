import { z, defineCollection } from "astro:content";

// Method removes duplicates and performs a toLowerCase() operation on the text.
function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array;
	const lowercaseItems = array.map((str) => str.toLowerCase());
	const distinctItems = new Set(lowercaseItems);
	return Array.from(distinctItems);
}

// This is a schema definition, specifying the correct input formats
const post = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string().max(60).min(10),
		description: z.string().min(10).max(160),
		publishDate: z.string().transform((str) => new Date(str)),
		tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
		ogImage: z.string().optional(),
	}),
});

export const collections = { post };
