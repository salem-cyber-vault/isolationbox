# Vercel Deployment Guide for Salem Cyber Vault

## Quick Setup Instructions

### 1. Connect Repository to Vercel Project

1. Go to https://vercel.com/isolation-boxs-projects/isolationbox
2. Navigate to Project Settings → Git
3. Connect to GitHub repository: `salem-cyber-vault/isolationbox`
4. Set the production branch to `main` (or current branch)

### 2. Configure Build Settings

Vercel should automatically detect the `vercel.json` configuration, but verify these settings in the dashboard:

- **Framework Preset**: Next.js
- **Build Command**: `cd cybersecurity-dashboard-2 && pnpm run build`
- **Output Directory**: `cybersecurity-dashboard-2/.next`
- **Install Command**: `cd cybersecurity-dashboard-2 && pnpm install`
- **Development Command**: `cd cybersecurity-dashboard-2 && pnpm run dev`

### 3. Domain Configuration

1. In Vercel dashboard, go to Project Settings → Domains
2. Add custom domain: `www.salemcybervault.com`
3. Configure DNS records as shown in Vercel:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Or A record: `@` → Vercel IP addresses provided

### 4. Environment Variables (if needed)

If the project requires environment variables:
1. Go to Project Settings → Environment Variables
2. Add any required variables for production

### 5. Deploy

Once configured:
- Push to the main branch triggers automatic deployment
- Manual deploy: Click "Deploy" button in Vercel dashboard
- Redeploy: Go to Deployments tab and click "Redeploy" on any deployment

## Project Structure for Vercel

```
isolationbox/
├── vercel.json                     # Vercel configuration
├── .vercelignore                  # Files to ignore during deployment
├── README.md                      # Main documentation
└── cybersecurity-dashboard-2/     # Next.js application
    ├── app/                       # App Router pages
    ├── components/                # React components
    ├── public/                    # Static assets
    ├── package.json               # Dependencies
    └── next.config.mjs           # Next.js config
```

## Verification Checklist

- [ ] Repository connected to Vercel project
- [ ] Build settings configured correctly
- [ ] Custom domain `www.salemcybervault.com` added
- [ ] DNS records configured
- [ ] Successful deployment completed
- [ ] Website accessible at custom domain
- [ ] Automatic deployments working on push to main

## Troubleshooting

### Build Failures
- Check that the build command runs successfully locally
- Verify pnpm is available (included in vercel.json config)
- Ensure all dependencies are properly listed in package.json

### Domain Issues
- Verify DNS records are properly configured
- Check domain ownership verification
- Allow 24-48 hours for DNS propagation

### Deployment Issues
- Check Vercel deployment logs for specific errors
- Verify the project builds successfully in the cybersecurity-dashboard-2 directory
- Ensure no missing environment variables

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Project Repository: https://github.com/salem-cyber-vault/isolationbox