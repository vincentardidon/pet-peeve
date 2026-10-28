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

The site is deployed for free with GitHub Pages. Every push to `master` runs
the workflow in `.github/workflows/deploy.yml`. The workflow builds the app and
publishes it at <https://vincentardidon.github.io/pet-peeve/>.

For the first deployment, enable GitHub Pages in the repository settings and
select **GitHub Actions** as the build and deployment source.
