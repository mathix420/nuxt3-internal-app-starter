# Nuxt 3 Internal App Starter

Create a blazingly fast, zero-trust-authed business internal app in seconds. 🚀

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Deployment checklist

- [ ] Fill missing fields in `wrangler.toml`
- [ ] Setup Cloudflare Access rules on your domain
- [ ] [Install and setup wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update/#install)
- [ ] Run `wrangler publish`

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.

## Linting

Lint files.
```bash
npm run lint
```

Fix files.
```bash
npm run lintfix
```