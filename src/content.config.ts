import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

export const collections = {
  blogs: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
      title: z.string().max(60),
      slug: z.string().optional(),
      publishDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      tags: z.array(z.string()).default(["rz"]),
      draft: z.boolean().default(false),
      author: z.string().optional(),
      description: z.string().optional()
    })
  }),
  articles: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/article" }),
    schema: z.object({
      title: z.string(),
      author: z.string(),
      description: z.string().optional(),
      date: z.date().optional()
    })
  })
};
