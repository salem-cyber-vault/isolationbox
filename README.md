# Salem Cyber Vault

Advanced cybersecurity monitoring vault with Halloween theme built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Deployment to Vercel

This project is configured for automatic deployment to Vercel with the custom domain `www.salemcybervault.com`.

### Prerequisites

1. Access to the Vercel project: https://vercel.com/isolation-boxs-projects/isolationbox
2. GitHub repository: https://github.com/salem-cyber-vault/isolationbox

### Vercel Configuration

The repository includes a `vercel.json` configuration file that:
- Builds the project from the `cybersecurity-dashboard-2` subdirectory
- Uses pnpm as the package manager
- Configures the Next.js framework detection

### Automatic Deployment Setup

1. **GitHub Integration**: 
   - Connect the Vercel project to the GitHub repository
   - Enable automatic deployments from the `main` branch
   - Configure deployment triggers on push

2. **Domain Configuration**:
   - Set up `www.salemcybervault.com` as a custom domain in Vercel
   - Configure DNS to point to Vercel's nameservers

3. **Environment Variables** (if needed):
   - Set any required environment variables in the Vercel dashboard

### Manual Deployment

If you need to deploy manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel --prod
```

## 🛠️ Development

### Local Development

```bash
cd cybersecurity-dashboard-2
pnpm install
pnpm run dev
```

### Build

```bash
cd cybersecurity-dashboard-2
pnpm run build
pnpm run start
```

### Linting

```bash
cd cybersecurity-dashboard-2
pnpm run lint
```

## 📁 Project Structure

```
isolationbox/
├── cybersecurity-dashboard-2/          # Next.js application
│   ├── app/                           # App Router pages
│   ├── components/                    # React components
│   ├── lib/                          # Utilities
│   ├── public/                       # Static assets
│   └── styles/                       # CSS styles
├── vercel.json                       # Vercel deployment configuration
└── README.md                         # This file
```

## 🎨 Features

- **Dark Theme**: Halloween-inspired cybersecurity vault design
- **Responsive Design**: Works on desktop and mobile devices
- **TypeScript**: Full type safety
- **Tailwind CSS**: Modern styling approach
- **Component Library**: Radix UI components

## 📦 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Package Manager**: pnpm
- **Deployment**: Vercel

## 🔧 Configuration Files

- `vercel.json`: Vercel deployment configuration
- `next.config.mjs`: Next.js configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `components.json`: UI components configuration

## 🚀 Deployment Status

The project is automatically deployed to:
- **Production**: https://www.salemcybervault.com
- **Vercel Dashboard**: https://vercel.com/isolation-boxs-projects/isolationbox

## 📞 Support

For deployment issues or questions, check the Vercel dashboard or GitHub repository issues.