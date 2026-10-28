# Pet Peeve

Pet Peeve is a dog and cat encyclopedia with breed directories, individual breed
profiles, pet-care guides, and a food-safety checker.

## Run locally

```sh
npm ci
npm run dev
```

## Validate

```sh
npm run lint
npm run build
```

## Deployment

The app is connected to Vercel for automatic deployments from `master`.
Vercel detects Vite and uses `npm run build` with `dist` as the output
directory. The rewrite in `vercel.json` sends direct page requests to the
React app so routes work when opened or refreshed.

Live site: <https://pet-peeve.vercel.app/>

Vercel's Hobby plan is free for personal projects. Check Vercel's current plan
terms and usage limits before using the site commercially or at high traffic.
An accountless `vercel deploy --temporary` deployment is temporary and expires
unless it is claimed in a Vercel account.
