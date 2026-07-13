# LogicMintHQ — AI-Powered Digital Agency

Award-winning-quality marketing site built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production

```bash
npm run build
npm start
```

## Structure

```
src/
  app/            # App Router: layout, page, global styles
  components/     # One component per site section + shared UI
public/           # Static assets (logo, favicon)
```

## Before going live

- Replace the WhatsApp number in `src/components/Contact.tsx`
- Point the contact form at your backend / form service
- Set real social links in `src/components/Footer.tsx`
