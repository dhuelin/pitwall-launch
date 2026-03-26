# Pitwall — Launch Page

Static marketing site for [Pitwall](https://pitwall.huelin.dev) — a race prediction league app coming to iOS and Android.

**Live:** [pitwall.huelin.dev](https://pitwall.huelin.dev)

## Local Development

```bash
npm install
npm run dev      # http://localhost:4321
```

Requires Node.js >= 22.12.0.

## Build & Preview

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
npm run lint     # lint src/
```

## Deploy

Deployments are **manual only**. Go to GitHub → Actions → **Deploy** → Run workflow.

The `gh-pages` branch is managed automatically by the deploy workflow — do not edit it directly.

## Formspree Setup (email waitlist)

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and note the form ID
3. Add the ID to `src/config.ts` → `formspreeId`
4. **Important:** The free tier allows 50 submissions/month. Submissions beyond this limit are silently dropped — monitor your Formspree dashboard and upgrade before hitting the cap.

## Switching to Beta Mode

When the app beta is ready:

1. Fill in `appStoreUrl` in `src/config.ts`
2. Fill in `playStoreUrl` in `src/config.ts`
3. Set `isBetaLive: true` in `src/config.ts`
4. Commit and push to `main` via a PR
5. Go to GitHub → Actions → **Deploy** → Run workflow
6. Verify both store links work on the live page
7. Email waitlist subscribers from the Formspree dashboard

## Custom Domain

Add a DNS record at your registrar:
- Type: `CNAME`
- Name: `pitwall`
- Value: `dhuelin.github.io`

GitHub Pages provisions HTTPS automatically after the first deploy.
