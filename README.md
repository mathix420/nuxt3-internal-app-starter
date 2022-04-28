# Nuxt 3 Internal App Starter

Create a blazingly fast, zero-trust-authed business internal app in seconds. 🚀

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Deployment checklist

- [ ] [Fill missing fields](https://nitro.unjs.io/deploy/providers/cloudflare.html) in `wrangler.toml`
- [ ] Setup [Cloudflare Access](https://dash.teams.cloudflare.com//access/apps/add) rules on your domain
- [ ] [Install](https://developers.cloudflare.com/workers/cli-wrangler/install-update/#install) and [login](https://developers.cloudflare.com/workers/cli-wrangler/authentication/#using-commands) on wrangler cli
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

## Github Action

Generate a [Cloudflare API token](https://dash.cloudflare.com/profile/api-tokens) with following permissions:
```
All accounts - Workers R2 Storage:Edit, Workers Tail:Read, Workers KV Storage:Edit, Workers Scripts:Edit, Account Settings:Read
All zones - Workers Routes:Edit
All users - User Details:Read
```
Add it to your GitHub repo secrets below the name `CF_API_TOKEN`.
