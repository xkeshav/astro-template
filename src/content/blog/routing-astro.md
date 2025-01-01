---
title: "How routing works in Astro ?"
description: "The full guide on routing in astro framework . The easy and simple guide to understand and implement routing "
publishDate: "12 December 2024"
---

## Adding a New Route in Astro.js

Astro uses a **file-based routing system**, where the file structure in the `src/pages` directory determines the routes.

## **Steps to Add a New Route**

1. **Create a New File in the `src/pages` Directory**

   - Go to the `src/pages` directory in your project.
   - Create a new file for your route. For example:
     - `about.astro` → `/about` route
     - `blog.astro` → `/blog` route
     - `contact.html` → `/contact` route (static HTML)

2. **Add Content to the New F ile**

   Add the desired HTML or Astro component syntax inside your new file. For example, in `about.astro`:

   ```astro
   ---
   // Frontmatter (optional)
   const pageTitle = "About Us";
   ---

   <html>
     <head>
       <title>{pageTitle}</title>
     </head>
     <body>
       <h1>{pageTitle}</h1>
       <p>Welcome to the About page of our Astro site!</p>
     </body>
   </html>
   ```

3. **Start the Development Server**

   Run the Astro development server to see your changes:

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000/about` (or the corresponding route) in your browser.

4. **Optional: Add Dynamic Routes**

   If you need dynamic routes (e.g., `/blog/:slug`), create a file with square brackets in its name, such as `[slug].astro`. Example:

   - File: `src/pages/blog/[slug].astro`

     ```astro
     ---
     const { slug } = Astro.params;
     ---

     <h1>Blog Post: {slug}</h1>
     ```

   - Visit `/blog/example` to see the route in action.

5. **Optional: Add Links to Your Route**

   Update your site's navigation to link to the new route. For example, in your `src/layouts/Header.astro`:

   ```astro
   <nav>
     <a href="/">Home</a>
     <a href="/about">About</a>
     <a href="/blog">Blog</a>
   </nav>
   ```

---

### **Example File Structure for Routes**

```
src/
├── pages/
│   ├── index.astro       → /
│   ├── about.astro       → /about
│   ├── blog.astro        → /blog
│   ├── blog/
│   │   ├── [slug].astro  → /blog/:slug
```
