import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

export const collections = {
  blogs: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" })
  }),
  pages: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
    schema: z.object({
      title: z.string(),
      author: z.string()
    })
  }),
  articles: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
    schema: z.object({
      title: z.string(),
      author: z.string(),
      description: z.string().optional(),
      date: z.date().optional()
    })
  })
};
