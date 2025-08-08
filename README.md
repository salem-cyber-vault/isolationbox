# Salem Cyber Vault - Comprehensive Cyber Playground

An immersive, educational cybersecurity platform that combines interactive learning, threat monitoring, and hands-on security tools in a unified Next.js application.

## 🌟 Features Overview

### 🗺️ Visual Threat Intelligence
- **Global Threat Map**: Real-time visualization of cyber threats with clickable events and detailed popovers
- **Attack Simulation Lab**: Interactive network diagrams with drag-and-drop functionality and animated attack scenarios
- **Threat Analytics**: Comprehensive dashboards with live data feeds and historical analysis

### 🔍 OSINT & Reconnaissance Tools
- **Advanced Cyber Search**: Enhanced dorking module with card previews, screenshots, and safe exploration
- **Domain Intelligence**: Interactive domain analysis with visual data presentation
- **Information Gathering**: Educational OSINT tools with safety overlays and learning guides

### 🎮 Interactive Learning Games
- **Cybersecurity Quiz**: Comprehensive quiz system with scoring, leaderboards, and progress tracking
- **Spot-the-Phish**: Real-world phishing detection game with image challenges and explanations
- **Security Scenarios**: Hands-on challenges covering various cybersecurity domains

### 🚀 Project Explorer
- **Template Gallery**: Clickable, launchable cybersecurity project templates
- **Code Examples**: Interactive tutorials and demonstrations
- **Hands-on Labs**: Guided practical exercises with step-by-step instructions

### 🤖 AI Mentor System
- **Guided Learning**: AI-powered mentor bot for contextual help and guidance
- **Interactive Q&A**: Smart assistance across all platform modules
- **Learning Paths**: Personalized educational journeys based on user progress

### 🏆 Gamification & Progress
- **Achievement System**: Comprehensive badge collection with visual progress tracking
- **User Profiles**: Personal dashboards with statistics, completed challenges, and learning metrics
- **Leaderboards**: Community-driven competitive elements for enhanced engagement

### 🎨 Enhanced User Experience
- **Immersive UI**: Modern design with floating animations, modals, tooltips, and popovers
- **Responsive Design**: Optimized for all devices and screen sizes
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## 🏗️ Monorepo Structure

```
salem-cyber-vault/
├── app/                          # Next.js App Router
│   ├── dashboard/               # Main dashboard and overview
│   ├── threat-map/              # Interactive threat visualization
│   ├── attack-lab/              # Simulation and attack scenarios
│   ├── osint/                   # OSINT and reconnaissance tools
│   ├── games/                   # Interactive learning games
│   ├── projects/                # Project explorer and templates
│   ├── mentor/                  # AI mentor bot interface
│   └── profile/                 # User progress and achievements
├── components/                   # Reusable UI components
│   ├── ui/                      # Base UI components (shadcn/ui)
│   ├── dashboard/               # Dashboard-specific components
│   ├── games/                   # Game-related components
│   ├── simulation/              # Attack simulation components
│   └── mentor/                  # Mentor bot components
├── lib/                         # Utility functions and configurations
│   ├── data/                    # Demo data and APIs
│   ├── game-engine/             # Game logic and scoring
│   └── simulation/              # Attack simulation engine
├── public/                      # Static assets
│   ├── images/                  # Educational images and screenshots
│   ├── scenarios/               # Attack scenario assets
│   └── game-assets/             # Game-related media
└── docs/                        # Documentation and guides
```

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checking

## 🔧 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4.x with custom animations
- **UI Components**: Radix UI primitives with shadcn/ui
- **Animations**: Framer Motion for interactive elements
- **Data Visualization**: Recharts for charts and graphs
- **State Management**: React hooks and context
- **Authentication**: Built-in session management

## 🌐 Deployment

This project is optimized for deployment on Vercel with custom domain support.

### Environment Variables

```bash
# Copy example environment file
cp .env.local.example .env.local

# Add your configuration
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_MENTOR_API_KEY=your_mentor_api_key
```

## 📚 Educational Philosophy

Salem Cyber Vault is designed as a comprehensive learning platform that:

- **Combines Theory and Practice**: Every concept is reinforced with hands-on activities
- **Promotes Safe Learning**: All tools include safety measures and educational context
- **Encourages Exploration**: Interactive elements reward curiosity and deeper investigation
- **Builds Community**: Leaderboards and achievements foster collaborative learning
- **Adapts to Users**: AI mentor provides personalized guidance based on progress

## 🤝 Contributing

This project follows a modular architecture that makes it easy to add new features:

1. **New Modules**: Add new routes in the `app/` directory
2. **Components**: Create reusable components in `components/`
3. **Game Logic**: Extend the game engine in `lib/game-engine/`
4. **Educational Content**: Add scenarios and challenges in `lib/data/`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Live Demo](https://salemcybervault.com)
- [Documentation](docs/)
- [Contributing Guide](CONTRIBUTING.md)
- [Security Policy](SECURITY.md)