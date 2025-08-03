# Salem Cyber Vault

Advanced cybersecurity monitoring vault with sophisticated API features and threat intelligence. This streamlined dashboard focuses on the most advanced cybersecurity capabilities with a beautiful blue theme and subtle floating eyes background.

## ✨ Features

### 🔍 Advanced Cyber Search Engine
- Real-time device discovery with Shodan integration
- Russian cybersecurity sources (Yandex, CuteStat, 2ip.ru)
- Educational security searches and threat analysis
- REST API access and SIEM integration

### 📊 Interactive Dashboard
- Real-time threat intelligence feed
- Global threat map visualization
- System health monitoring
- Security score tracking
- Asset monitoring and vulnerability analysis

### 🎨 Design
- Beautiful blue color palette theme
- Subtle floating eyes background animation
- Responsive design with dark/light mode support
- Classy and professional cybersecurity aesthetic

## 🚀 Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📡 API Features

### REST API Endpoints
- `GET /api/v1/search?query=apache&country=US` - Device search
- `POST /api/v1/alerts/siem` - SIEM webhook integration

### Integrations
- Shodan API for device discovery
- Yandex and Russian cybersecurity sources
- SIEM platforms (Splunk, QRadar)
- Real-time threat intelligence feeds

## 🌐 Deployment

Optimized for Vercel deployment at `salemcybervault.com`:

```bash
# Deploy to Vercel
vercel --prod
```

The project includes:
- ✅ CNAME file for custom domain
- ✅ Optimized .gitignore
- ✅ Production-ready configuration

## 🔧 Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS with custom blue theme
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React

## 📁 Project Structure

```
salem-cyber-vault/
├── app/                    # Next.js app router
│   ├── dashboard/         # Main dashboard pages
│   └── globals.css        # Global styles with blue theme
├── components/            # React components
│   ├── cyber-search-interface.tsx
│   ├── threat-intelligence.tsx
│   ├── floating-eyes.tsx
│   └── ui/               # Reusable UI components
├── public/               # Static assets
│   └── CNAME            # Domain configuration
└── vercel.json          # Vercel deployment config
```

## 🎯 Advanced Features

- **Cyber Search Engine**: Sophisticated device discovery with multiple API integrations
- **Threat Intelligence**: Real-time threat feeds with severity classification
- **Asset Monitoring**: Comprehensive system health tracking
- **Vulnerability Analysis**: Advanced security assessment tools
- **API Integration**: REST APIs and webhook support for SIEM platforms

---

Built with ❤️ for advanced cybersecurity monitoring and threat intelligence.