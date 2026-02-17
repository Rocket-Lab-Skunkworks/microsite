# Microsite

A Next.js microsite built with the App Router, component-driven sections, and a lightweight styling setup. This project is deployed on **Netlify**.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- PostCSS

## Local Development

Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `pnpm dev` — Start the development server
- `pnpm build` — Build for production
- `pnpm start` — Start the production server
- `pnpm lint` — Run ESLint

## Project Structure

- `src/app` — App Router pages and layout
- `src/app/components` — Reusable UI components
- `src/app/constants` — Site configuration and static content
- `public` — Static assets

## Deployment (Netlify)

This project is deployed on Netlify. Typical settings:

- **Build command:** `pnpm build`
- **Publish directory:** `/.next`

If you are using Next.js on Netlify, ensure the Next.js runtime is enabled per Netlify’s docs.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
