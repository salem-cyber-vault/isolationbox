"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface LeaderboardEntry {
  rank: number
  username: string
  avatar?: string
  score: number
  achievements: number
  streak: number
}

interface LeaderboardProps {
  timeframe: 'week' | 'month' | 'all-time'
}

const LEADERBOARD_DATA: Record<string, LeaderboardEntry[]> = {
  week: [
    { rank: 1, username: 'CyberNinja', score: 2450, achievements: 8, streak: 12 },
    { rank: 2, username: 'SecGuard', score: 2380, achievements: 7, streak: 9 },
    { rank: 3, username: 'HackerHunter', score: 2290, achievements: 6, streak: 15 },
    { rank: 4, username: 'PhishFinder', score: 2150, achievements: 5, streak: 7 },
    { rank: 5, username: 'CodeBreaker', score: 2050, achievements: 4, streak: 5 }
  ],
  'all-time': [
    { rank: 1, username: 'EliteDefender', score: 15420, achievements: 42, streak: 89 },
    { rank: 2, username: 'CyberMaster', score: 14890, achievements: 39, streak: 67 },
    { rank: 3, username: 'SecurityPro', score: 14230, achievements: 35, streak: 45 },
    { rank: 4, username: 'ThreatHunter', score: 13850, achievements: 33, streak: 23 },
    { rank: 5, username: 'DataGuardian', score: 13420, achievements: 31, streak: 78 }
  ]
}

export function Leaderboard({ timeframe }: LeaderboardProps) {
  const data = LEADERBOARD_DATA[timeframe] || LEADERBOARD_DATA.week

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1: return '🥇'
      case 2: return '🥈'
      case 3: return '🥉'
      default: return `#${rank}`
    }
  }

  return (
    <div className="space-y-4">
      {data.map((entry) => (
        <div key={entry.rank} className="flex items-center gap-4 p-3 border rounded-lg">
          <div className="text-2xl font-bold w-12 text-center">
            {getRankBadge(entry.rank)}
          </div>
          
          <Avatar>
            <AvatarImage src={entry.avatar} />
            <AvatarFallback>{entry.username.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="font-medium">{entry.username}</div>
            <div className="text-sm text-muted-foreground">
              {entry.achievements} achievements • {entry.streak} day streak
            </div>
          </div>
          
          <Badge variant="secondary" className="text-lg font-bold">
            {entry.score.toLocaleString()}
          </Badge>
        </div>
      ))}
    </div>
  )
}