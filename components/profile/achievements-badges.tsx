"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  earned: boolean
  progress?: number
  maxProgress?: number
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    title: 'First Steps',
    description: 'Complete your first cybersecurity quiz',
    icon: '👶',
    rarity: 'common',
    earned: true
  },
  {
    id: '2',
    title: 'Quiz Master',
    description: 'Answer 100 quiz questions correctly',
    icon: '🧠',
    rarity: 'rare',
    earned: true
  },
  {
    id: '3',
    title: 'Phish Detector',
    description: 'Identify 50 phishing attempts correctly',
    icon: '🎣',
    rarity: 'epic',
    earned: false,
    progress: 32,
    maxProgress: 50
  },
  {
    id: '4',
    title: 'Security Guru',
    description: 'Reach level 20 in all skill areas',
    icon: '🏆',
    rarity: 'legendary',
    earned: false,
    progress: 3,
    maxProgress: 5
  }
]

export function AchievementsBadges() {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-500'
      case 'rare': return 'bg-blue-500'
      case 'epic': return 'bg-purple-500'
      case 'legendary': return 'bg-yellow-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {ACHIEVEMENTS.map((achievement) => (
        <Card key={achievement.id} className={`${achievement.earned ? 'border-green-500' : 'opacity-75'}`}>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="text-3xl">{achievement.icon}</div>
              <div className="flex-1">
                <CardTitle className="text-lg">{achievement.title}</CardTitle>
                <CardDescription>{achievement.description}</CardDescription>
              </div>
              <Badge className={getRarityColor(achievement.rarity)}>
                {achievement.rarity}
              </Badge>
            </div>
          </CardHeader>
          {!achievement.earned && achievement.progress && achievement.maxProgress && (
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{achievement.progress}/{achievement.maxProgress}</span>
                </div>
                <Progress value={(achievement.progress / achievement.maxProgress) * 100} />
              </div>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  )
}

export function LearningProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Learning Progress Overview</CardTitle>
        <CardDescription>Your advancement across different cybersecurity domains</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center text-muted-foreground">
          Detailed learning progress visualization
        </div>
      </CardContent>
    </Card>
  )
}

export function ActivityFeed() {
  const activities = [
    { id: '1', action: 'Completed Quiz: Network Security Basics', time: '2 hours ago' },
    { id: '2', action: 'Earned Badge: Phish Detector', time: '1 day ago' },
    { id: '3', action: 'Started Learning Path: Ethical Hacking', time: '2 days ago' },
    { id: '4', action: 'Completed Challenge: Password Analysis', time: '3 days ago' }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest learning activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activities.map((activity) => (
            <div key={activity.id} className="flex justify-between items-center p-2 border rounded">
              <span className="text-sm">{activity.action}</span>
              <span className="text-xs text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}