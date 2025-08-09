"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function UserStats() {
  const stats = [
    { label: 'Total Score', value: '2,847', change: '+234' },
    { label: 'Completed Challenges', value: '47', change: '+3' },
    { label: 'Learning Streak', value: '7 days', change: 'Current' },
    { label: 'Accuracy Rate', value: '84%', change: '+2%' }
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
          <div className="text-xs text-green-600">{stat.change}</div>
        </div>
      ))}
    </div>
  )
}

export function SkillRadar() {
  const skills = [
    { name: 'Network Security', level: 85 },
    { name: 'Web Security', level: 72 },
    { name: 'Cryptography', level: 68 },
    { name: 'Incident Response', level: 79 },
    { name: 'Penetration Testing', level: 64 }
  ]

  return (
    <div className="space-y-3">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <Progress value={skill.level} className="h-2" />
        </div>
      ))}
    </div>
  )
}