# RDGCC Homepage Recreation

A modern, responsive recreation of the RDGCC homepage built using Astro and Sanity CMS. The application is fully content-driven, with all editable content managed through Sanity Studio and rendered dynamically in Astro, allowing published CMS updates to appear on the live website without requiring code changes.

---

## Live Links

### Live Website

https://rdgcc-astro-sanity.vercel.app

### Sanity Studio

https://rdgcc-assessment.sanity.studio/

### GitHub Repository

https://github.com/akash200424/rdgcc-astro-sanity

---

# Tech Stack

- Astro
- Sanity CMS
- Tailwind CSS
- Vercel
- JavaScript
- TypeScript (Sanity configuration)

---

# Features

# Features

- Fully content-driven homepage powered by Sanity CMS
- Dynamic content fetching from Sanity
- Responsive design for Desktop, Tablet and Mobile
- Reusable Astro components
- SEO metadata support
- Optimized Sanity image delivery
- Animated statistics counter
- Testimonial carousel
- FAQ accordion
- Mobile navigation
- Accessible semantic HTML

---

# Folder Structure

```
src/
│
├── components/
│   ├── home/
│   └── layout/
│
├── lib/
│   ├── sanity.ts
│   └── queries.ts
│
├── pages/
│   └── index.astro
│
├── styles/
│   └── global.css
│
sanity/
│
├── schemaTypes/
│
└── sanity.config.ts
```

---

# CMS Structure

The following content is managed through Sanity Studio:

- Header
- Hero
- Statistics
- Solutions
- Process
- Success Stories
- Trusted Brands
- Testimonials
- Who We Work With
- FAQ
- Footer
- SEO Fields

All text, images, CTA buttons, and section content are editable through the CMS.

---

# Installation

Clone the repository

```bash
git clone https://github.com/akash200424/rdgcc-astro-sanity.git
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PUBLIC_SANITY_PROJECT_ID=YOUR_PROJECT_ID
PUBLIC_SANITY_DATASET=production
```

Start the development server

```bash
npm run dev
```

---

# Build

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

# Deployment

## Frontend

The Astro application is deployed on **Vercel**.

## CMS

The Sanity Studio is deployed using **Sanity Hosting**.

---

# Performance Optimizations

- Responsive layouts
- Component-based architecture
- Optimized Sanity image URLs
- Lazy loading for non-critical images
- Async image decoding
- Semantic HTML
- Accessible navigation
- Lightweight Astro components
- Clean Tailwind utility classes

---

# Lighthouse

- Performance: 99
- Accessibility: 93
- Best Practices: 77
- SEO: 91

---

# Assumptions

- The homepage was recreated based on the provided assessment requirements.
- All textual content, images, CTA buttons, and section data are managed through Sanity Studio.
- Content updates published in Sanity are reflected dynamically on the deployed website.
- Styling was implemented to closely match the original RDGCC homepage.

---

# Future Improvements

- Dark mode support
- Image placeholders (LQIP/BlurHash)
- Unit and integration testing
- Enhanced SEO metadata per page
- Additional accessibility improvements

---

# Author

**Akash J**

GitHub:
https://github.com/akash200424

---
