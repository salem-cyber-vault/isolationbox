# 🛡️ Salem Cyber Vault Dashboard

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel Edge](https://img.shields.io/badge/Vercel-Edge_Functions-000000?style=for-the-badge&logo=vercel)](https://vercel.com/docs/functions/edge-functions)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

A cutting-edge cybersecurity monitoring dashboard powered by **serverless edge functions** for ultra-fast global performance.

## ✨ Features

### 🚀 **Serverless Edge Functions API**
- **⚡ Ultra-fast**: <100ms response times globally
- **🌐 Global distribution**: Runs on 40+ edge locations worldwide
- **🔄 Zero cold starts**: Always-warm edge runtime
- **📈 Auto-scaling**: Seamless traffic spike handling

### 🎯 **Core Capabilities**
- **Real-time Threat Intelligence** - Live threat data with severity filtering
- **Vulnerability Management** - CVE tracking with patch status
- **Security Event Monitoring** - 24/7 event streaming and analysis
- **Alert Management** - CRUD operations with advanced filtering
- **Threat Analytics** - Trend analysis and predictive insights
- **System Health Monitoring** - Real-time status and metrics

### 🎨 **Modern UI/UX**
- **Dark mode optimized** - Professional blue theme
- **Responsive design** - Mobile-first approach
- **Loading states** - Smooth transitions and feedback
- **Error handling** - Graceful degradation with retry options
- **Interactive components** - Hover effects and animations

## 🏗️ Architecture

```
Salem Cyber Vault Dashboard
├── 📱 Frontend (Next.js 15 + TypeScript)
│   ├── 🎨 Modern UI Components (shadcn/ui + Tailwind)
│   ├── 🔄 State Management (React Hooks)
│   └── 📊 Data Visualization (Recharts)
├── ⚡ Serverless Edge Functions (Vercel Edge Runtime)
│   ├── 🔥 GET /api/v1/threats
│   ├── 🛡️ GET /api/v1/vulnerabilities
│   ├── 📊 GET /api/v1/threat-trends
│   ├── 🚨 GET/POST /api/v1/alerts
│   ├── 📋 GET /api/v1/events
│   └── ❤️ GET /api/v1/status
└── 🔧 Deployment (Vercel)
    ├── 🌐 Global CDN
    ├── 🚀 Edge Functions
    └── 📈 Auto-scaling
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/salem-cyber-vault/isolationbox.git
   cd isolationbox/cybersecurity-dashboard-2
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm run start
```

## 📊 API Endpoints

### Core Endpoints

| Endpoint | Method | Description | Features |
|----------|--------|-------------|----------|
| `/api/v1/threats` | GET | Threat intelligence | Severity/type filtering |
| `/api/v1/vulnerabilities` | GET | CVE data | Category/patch filtering |
| `/api/v1/events` | GET | Security events | Type/severity filtering |
| `/api/v1/alerts` | GET/POST | Alert management | CRUD + search |
| `/api/v1/threat-trends` | GET | Analytics | Period/trend filtering |
| `/api/v1/status` | GET | Health check | Metrics + services |

### Example Usage

```javascript
// Fetch critical threats
const response = await fetch('/api/v1/threats?severity=Critical')
const { data } = await response.json()

// Create new alert
const alert = await fetch('/api/v1/alerts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Security Incident',
    source: 'Network Monitor',
    severity: 'High'
  })
})
```

## 🎨 UI Components

### Dashboard Tabs
- **Overview** - Security metrics and threat map
- **Alerts** - Alert management with filtering
- **Intelligence** - Threat intelligence feeds
- **Systems** - System health monitoring

### Key Features
- **Global Threat Map** - Real-time attack visualization
- **Security Score** - Dynamic security rating
- **Recent Events** - Live event stream
- **System Status** - Server health monitoring

## 🔧 Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Modern UI components
- **Lucide React** - Beautiful icons
- **Recharts** - Data visualization

### Backend
- **Vercel Edge Functions** - Serverless API
- **Edge Runtime** - Ultra-fast execution
- **TypeScript** - End-to-end type safety

### DevOps
- **Vercel** - Deployment platform
- **Git** - Version control
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📈 Performance

- **⚡ Response Times**: <100ms globally
- **🌐 Global Coverage**: 40+ edge locations
- **📊 Lighthouse Score**: 95+ performance
- **🔄 Zero Downtime**: Automatic scaling
- **💾 Bundle Size**: Optimized for speed

## 🛡️ Security Features

- **🔒 Input Validation** - All API inputs sanitized
- **🛡️ CORS Protection** - Domain-restricted access
- **🔐 Error Handling** - No data leakage
- **📊 Rate Limiting** - Planned implementation
- **🔍 Audit Logging** - Request tracking

## 📖 Documentation

- **[API Documentation](./API_DOCUMENTATION.md)** - Comprehensive API guide
- **[Component Library](./components/)** - UI component documentation
- **[Deployment Guide](../Vercel_Deployment_Instructions.md)** - Deployment instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🙏 Acknowledgments

- **Vercel** - For excellent Edge Functions platform
- **shadcn/ui** - For beautiful UI components
- **Tailwind CSS** - For utility-first styling
- **Lucide** - For amazing icons

---

**Built with ❤️ by the Salem Cyber Vault Team**

*Securing the digital frontier, one edge function at a time.*