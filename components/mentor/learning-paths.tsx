"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface LearningPath {
  id: string
  title: string
  description: string
  duration: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  modules: string[]
  progress: number
  enrolled: boolean
}

const LEARNING_PATHS: LearningPath[] = [
  {
    id: '1',
    title: 'Cybersecurity Fundamentals',
    description: 'Build a solid foundation in cybersecurity principles, risk management, and basic security controls.',
    duration: '4-6 weeks',
    difficulty: 'beginner',
    modules: [
      'Introduction to Cybersecurity',
      'Risk Assessment & Management',
      'Network Security Basics',
      'Incident Response Fundamentals',
      'Security Policies & Procedures'
    ],
    progress: 65,
    enrolled: true
  },
  {
    id: '2',
    title: 'Ethical Hacking & Penetration Testing',
    description: 'Learn offensive security techniques to identify and exploit vulnerabilities ethically.',
    duration: '8-10 weeks',
    difficulty: 'intermediate',
    modules: [
      'Reconnaissance & Information Gathering',
      'Vulnerability Assessment',
      'Web Application Security Testing',
      'Network Penetration Testing',
      'Post-Exploitation Techniques',
      'Reporting & Documentation'
    ],
    progress: 30,
    enrolled: true
  },
  {
    id: '3',
    title: 'Digital Forensics & Incident Response',
    description: 'Master the skills needed to investigate security incidents and analyze digital evidence.',
    duration: '6-8 weeks',
    difficulty: 'advanced',
    modules: [
      'Digital Forensics Fundamentals',
      'File System Analysis',
      'Network Forensics',
      'Memory Analysis',
      'Mobile Device Forensics',
      'Legal & Ethical Considerations'
    ],
    progress: 0,
    enrolled: false
  },
  {
    id: '4',
    title: 'Cloud Security Architecture',
    description: 'Design and implement security controls for cloud environments and hybrid infrastructures.',
    duration: '6-8 weeks',
    difficulty: 'advanced',
    modules: [
      'Cloud Security Fundamentals',
      'Identity & Access Management',
      'Data Protection in the Cloud',
      'Container Security',
      'Serverless Security',
      'Compliance & Governance'
    ],
    progress: 0,
    enrolled: false
  },
  {
    id: '5',
    title: 'Security Operations & Monitoring',
    description: 'Build expertise in security monitoring, threat hunting, and SOC operations.',
    duration: '5-7 weeks',
    difficulty: 'intermediate',
    modules: [
      'SIEM Implementation',
      'Log Analysis & Correlation',
      'Threat Hunting Techniques',
      'Security Automation',
      'Metrics & Reporting'
    ],
    progress: 0,
    enrolled: false
  }
]

export function LearningPaths() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500'
      case 'intermediate': return 'bg-yellow-500'
      case 'advanced': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '🌱'
      case 'intermediate': return '🔥'
      case 'advanced': return '⚡'
      default: return '📚'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Personalized Learning Paths</h2>
        <Badge variant="secondary">
          {LEARNING_PATHS.filter(p => p.enrolled).length} Active Paths
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {LEARNING_PATHS.map((path) => (
          <Card key={path.id} className={`${path.enrolled ? 'border-blue-500' : ''}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <span>{getDifficultyIcon(path.difficulty)}</span>
                  {path.title}
                </CardTitle>
                <Badge className={getDifficultyColor(path.difficulty)}>
                  {path.difficulty}
                </Badge>
              </div>
              <CardDescription>{path.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Duration</span>
                  <span>{path.duration}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Modules</span>
                  <span>{path.modules.length} modules</span>
                </div>

                {path.enrolled && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span>{path.progress}%</span>
                    </div>
                    <Progress value={path.progress} />
                  </div>
                )}

                <div className="space-y-2">
                  <div className="text-sm font-medium">Modules:</div>
                  <div className="space-y-1">
                    {path.modules.slice(0, 3).map((module, index) => (
                      <div key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-4 h-4 text-xs">•</span>
                        <span>{module}</span>
                      </div>
                    ))}
                    {path.modules.length > 3 && (
                      <div className="text-sm text-muted-foreground">
                        +{path.modules.length - 3} more modules
                      </div>
                    )}
                  </div>
                </div>

                <Button 
                  className="w-full"
                  variant={path.enrolled ? "outline" : "default"}
                >
                  {path.enrolled ? path.progress > 0 ? 'Continue Learning' : 'Start Path' : 'Enroll Now'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recommended Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle>🎯 Recommended Next Steps</CardTitle>
          <CardDescription>Based on your current progress and interests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-500">📈</span>
                <div className="font-medium">Complete Current Fundamentals</div>
              </div>
              <p className="text-sm text-muted-foreground">
                You're 65% through the Cybersecurity Fundamentals path. Complete the remaining modules 
                to build a strong foundation before advancing.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500">🔍</span>
                <div className="font-medium">Practice Penetration Testing</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Use our Attack Simulation Lab to practice the techniques you're learning 
                in the Ethical Hacking path.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-purple-500">🏆</span>
                <div className="font-medium">Consider Certification</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Based on your progress, you might be ready for the CompTIA Security+ 
                certification. Would you like a study plan?
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}