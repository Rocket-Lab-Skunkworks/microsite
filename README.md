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

This project is deployed on Netlify.

### Step-by-step

1. Push the repository to GitHub/GitLab/Bitbucket.
2. In Netlify, click **Add new site** → **Import an existing project**.
3. Connect your Git provider and select this repository.
4. Configure the build settings:
   - **Build command:** `pnpm build`
   - **Publish directory:** `/.next`
5. Click **Deploy site**.
6. After the first deploy, verify:
   - The site loads correctly on the Netlify URL.
   - Any environment variables required by the app are set.

### Notes

- Ensure the Next.js runtime is enabled in Netlify (per their Next.js guide).
- If using a custom domain, configure it in **Domain management** and update DNS.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
