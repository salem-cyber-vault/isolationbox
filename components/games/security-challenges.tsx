"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface Challenge {
  id: string
  title: string
  description: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  points: number
  completed: boolean
  locked: boolean
}

const CHALLENGES: Challenge[] = [
  {
    id: '1',
    title: 'Password Detective',
    description: 'Analyze password strength and identify vulnerabilities',
    category: 'Authentication',
    difficulty: 'easy',
    points: 100,
    completed: true,
    locked: false
  },
  {
    id: '2', 
    title: 'Network Sleuth',
    description: 'Identify suspicious network traffic patterns',
    category: 'Network Security',
    difficulty: 'medium',
    points: 200,
    completed: false,
    locked: false
  },
  {
    id: '3',
    title: 'Malware Hunter',
    description: 'Detect and analyze malicious code samples',
    category: 'Malware Analysis',
    difficulty: 'hard',
    points: 300,
    completed: false,
    locked: true
  }
]

export function SecurityChallenges() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500'
      case 'medium': return 'bg-yellow-500'
      case 'hard': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CHALLENGES.map(challenge => (
          <Card key={challenge.id} className={`${challenge.locked ? 'opacity-60' : ''}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{challenge.title}</CardTitle>
                <Badge className={getDifficultyColor(challenge.difficulty)}>
                  {challenge.difficulty}
                </Badge>
              </div>
              <CardDescription>{challenge.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Category</span>
                  <span>{challenge.category}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Points</span>
                  <span className="font-bold">{challenge.points}</span>
                </div>
                <Button 
                  className="w-full"
                  disabled={challenge.locked}
                  variant={challenge.completed ? "outline" : "default"}
                >
                  {challenge.locked ? '🔒 Locked' : challenge.completed ? '✓ Completed' : 'Start Challenge'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}