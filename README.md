# Nail Art Gallery

A minimal personal gallery for nail art designs, built with Next.js.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Customize

- **Photos**: drop image files into the `public/` folder, then in
  `app/page.js` replace a card's `swatch` background with an
  `<img src="/your-file.jpg" />` inside the `.card-swatch` div.
- **Text**: business/personal name, service descriptions, promotions, hours,
  and contact info all live as plain data/JSX in `app/page.js` near the top
  of the file — edit freely.
- **Colors**: the palette (ivory / wine / gold) is defined as CSS variables
  at the top of `app/globals.css`.

## Deploy

See the deployment walkthrough provided alongside this project for pushing
to GitHub and connecting to Vercel.
