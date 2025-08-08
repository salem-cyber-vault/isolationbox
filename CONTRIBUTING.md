# Contributing to Salem Cyber Vault

Thank you for your interest in contributing to Salem Cyber Vault! This document provides guidelines for contributing to our comprehensive cybersecurity learning platform.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git
- Basic understanding of React, Next.js, and TypeScript

### Setup
```bash
# Clone the repository
git clone https://github.com/salem-cyber-vault/isolationbox.git
cd isolationbox

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

## 🏗️ Project Structure

```
salem-cyber-vault/
├── app/                          # Next.js App Router
│   ├── dashboard/               # Main dashboard and overview
│   ├── attack-lab/              # Interactive attack simulation
│   ├── games/                   # Security games and challenges
│   ├── osint/                   # OSINT tools and techniques
│   ├── projects/                # Project explorer and templates
│   ├── mentor/                  # AI mentor bot interface
│   └── profile/                 # User progress and achievements
├── components/                   # Reusable UI components
│   ├── ui/                      # Base UI components (shadcn/ui)
│   ├── games/                   # Game-related components
│   ├── simulation/              # Attack simulation components
│   ├── mentor/                  # Mentor bot components
│   ├── profile/                 # Profile and progress components
│   ├── projects/                # Project explorer components
│   └── osint/                   # OSINT tool components
└── lib/                         # Utility functions and configurations
```

## 🎯 Contributing Areas

### 1. Educational Content
- **Games & Challenges**: Add new cybersecurity quiz questions, phishing examples, or interactive challenges
- **Learning Paths**: Create new structured learning modules
- **Attack Scenarios**: Develop realistic attack simulation scenarios

### 2. Interactive Features
- **Simulation Engine**: Enhance the network attack simulation capabilities
- **AI Mentor**: Improve the mentor bot responses and guidance
- **Gamification**: Add new achievement types and progress tracking

### 3. Tools & Utilities
- **OSINT Tools**: Add new open source intelligence gathering tools
- **Project Templates**: Create hands-on cybersecurity project templates
- **Educational Resources**: Add documentation and tutorials

## 📝 Contribution Guidelines

### Code Style
- Use TypeScript for all new code
- Follow the existing component patterns
- Use Tailwind CSS for styling
- Ensure responsive design for all components

### Educational Content Standards
- **Accuracy**: All cybersecurity information must be technically accurate
- **Safety**: Include appropriate warnings and ethical guidelines
- **Accessibility**: Content should be beginner-friendly with clear explanations
- **Real-world Relevance**: Examples should reflect current cybersecurity landscape

### Pull Request Process
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following our guidelines
4. Test your changes thoroughly
5. Commit with descriptive messages
6. Push to your fork and submit a pull request

### Commit Message Format
```
type(scope): description

Examples:
feat(games): add password strength challenge
fix(mentor): improve AI response accuracy
docs(readme): update installation instructions
```

## 🎮 Adding New Games

### Quiz Questions
Add questions to `components/games/cyber-quiz.tsx`:
```typescript
{
  id: 'new-question',
  category: 'Web Security',
  difficulty: 'medium',
  question: 'What is the primary purpose of CSRF tokens?',
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  correct: 0,
  explanation: 'Detailed explanation of the correct answer...'
}
```

### Phishing Examples
Add examples to `components/games/phishing-game.tsx`:
```typescript
{
  id: 'new-example',
  type: 'email',
  isPhishing: true,
  title: 'Example Title',
  content: 'Example content...',
  indicators: ['Red flag 1', 'Red flag 2'],
  explanation: 'Why this is/isn\'t phishing...',
  difficulty: 'medium'
}
```

## 🛡️ Security Guidelines

### Educational Safety
- All examples must be for educational purposes only
- Include clear ethical guidelines and legal disclaimers
- No actual malicious code or real exploits
- Simulate attacks in safe, controlled environments

### Code Security
- Validate all user inputs
- Use secure coding practices
- No hardcoded secrets or credentials
- Follow OWASP security guidelines

## 🧪 Testing

### Manual Testing
- Test all interactive features
- Verify educational content accuracy
- Check responsive design on multiple devices
- Ensure accessibility compliance

### Automated Testing
```bash
# Run linting
npm run lint

# Build the project
npm run build

# Type checking
npm run type-check
```

## 📚 Resources

### Cybersecurity References
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [MITRE ATT&CK Framework](https://attack.mitre.org/)

### Development Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

## 🤝 Community

### Getting Help
- Open an issue for bugs or feature requests
- Join our discussions for questions and ideas
- Check existing issues before creating new ones

### Code of Conduct
- Be respectful and inclusive
- Focus on constructive feedback
- Help create a welcoming learning environment
- Follow responsible disclosure for security issues

## 📄 License

By contributing to Salem Cyber Vault, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for helping make cybersecurity education more accessible and engaging! 🚀