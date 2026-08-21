Vercel deployment instructions

1) Create a Vercel account (https://vercel.com/) and note your account.

2) Create a Vercel token:
   - Go to Vercel Dashboard -> Settings -> Tokens -> Create
   - Copy the token

3) Add the token to this GitHub repository as a secret named `VERCEL_TOKEN`:
   - Go to https://github.com/Manoj067/dss-brindavana-site/settings/secrets/actions
   - New repository secret -> Name: VERCEL_TOKEN, Value: <token>

4) (Optional) If you want to control the target project/org, create `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` secrets and modify the GitHub Actions workflow to pass them to the vercel CLI as `--org <id> --project <id>`.

5) Trigger deployment:
   - Push to the `main` branch (the workflow runs on push)

Notes
- The workflow uses `npx vercel --prod --confirm --token $VERCEL_TOKEN` which will create or update the project under your Vercel account associated with the token.
- If the first deploy attempts to prompt for choices, providing `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` avoids interactive prompts.
- Alternatively you can connect the GitHub repository to Vercel via the Vercel GitHub App (recommended for automatic previews and branch deployments). Connect the repo in the Vercel dashboard, then Vercel will handle deployments without needing a token in GitHub Secrets.

If you'd like, provide the Vercel token here (paste it as a secret in GitHub or grant deployment permission) and I can trigger the first deployment for you, or I can guide you through the steps while you perform them.