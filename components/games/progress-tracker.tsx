"use client"

import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface ProgressTrackerProps {
  gameType: 'quiz' | 'phishing' | 'challenges'
}

const PROGRESS_DATA = {
  quiz: {
    totalQuestions: 150,
    answered: 89,
    correct: 73,
    accuracy: 82,
    level: 8,
    xp: 1450,
    nextLevelXp: 1800
  },
  phishing: {
    totalExamples: 75,
    analyzed: 45,
    correctIdentifications: 39,
    accuracy: 87,
    level: 6,
    xp: 890,
    nextLevelXp: 1200
  },
  challenges: {
    totalChallenges: 50,
    completed: 12,
    points: 2450,
    accuracy: 75,
    level: 5,
    xp: 650,
    nextLevelXp: 900
  }
}

/**
 * Renders a progress dashboard for the specified game type.
 *
 * Displays level, XP progress, overall progress percentage, accuracy (with color coding),
 * and additional game-type-specific statistics and recent achievements for:
 * - "quiz" (questions answered / total),
 * - "phishing" (examples analyzed / total and correct identifications),
 * - "challenges" (completed / total and total points).
 *
 * Progress is computed from the relevant fields in the underlying data:
 * - quiz: answered / totalQuestions
 * - phishing: analyzed / totalExamples
 * - challenges: completed / totalChallenges
 * XP progress is computed as xp / nextLevelXp. If an expected field is missing, progress defaults to 0.
 *
 * @param gameType - One of "quiz", "phishing", or "challenges" selecting which dataset and UI to render.
 * @returns A React element containing the formatted progress tracker UI.
 */
export function ProgressTracker({ gameType }: ProgressTrackerProps) {
    const data = PROGRESS_DATA[gameType]
  
  let progressPercentage = 0
  if (gameType === 'quiz' && 'answered' in data) {
    progressPercentage = (data.answered / data.totalQuestions) * 100
  } else if (gameType === 'phishing' && 'analyzed' in data) {
    progressPercentage = (data.analyzed / data.totalExamples) * 100
  } else if ('completed' in data) {
    progressPercentage = (data.completed / data.totalChallenges) * 100
  }
 
  const xpProgress = (data.xp / data.nextLevelXp) * 100

  const getGameTypeTitle = (type: string) => {
    switch (type) {
      case 'quiz': return 'Quiz Progress'
      case 'phishing': return 'Phishing Detection'
      case 'challenges': return 'Security Challenges'
      default: return 'Progress'
    }
  }

  const getAccuracyColor = (accuracy: number) => {
    if (accuracy >= 80) return 'text-green-500'
    if (accuracy >= 60) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <div className="space-y-4">
      {/* Level and XP */}
      <div className="text-center">
        <div className="text-2xl font-bold">Level {data.level}</div>
        <div className="text-sm text-muted-foreground">
          {data.xp} / {data.nextLevelXp} XP
        </div>
        <Progress value={xpProgress} className="mt-2" />
      </div>

      {/* Statistics */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Progress</span>
          <span className="font-medium">{progressPercentage.toFixed(0)}%</span>
        </div>
        <Progress value={progressPercentage} />
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Accuracy</span>
          <span className={`font-medium ${getAccuracyColor(data.accuracy)}`}>
            {data.accuracy}%
          </span>
        </div>
        
        {gameType === 'quiz' && 'answered' in data && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Questions Answered</span>
            <span className="font-medium">{data.answered} / {data.totalQuestions}</span>
          </div>
        )}
        
        {gameType === 'phishing' && 'correctIdentifications' in data && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Correct Identifications</span>
            <span className="font-medium">{data.correctIdentifications} / {data.analyzed}</span>
          </div>
        )}
        
        {gameType === 'challenges' && 'completed' in data && (
          <>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Challenges Completed</span>
              <span className="font-medium">{data.completed} / {data.totalChallenges}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Points</span>
              <span className="font-medium">{data.points.toLocaleString()}</span>
            </div>
          </>
        )}
      </div>

      {/* Achievements */}
      <div className="space-y-2">
        <div className="text-sm font-medium">Recent Achievements</div>
        <div className="space-y-1">
          {gameType === 'quiz' && (
            <>
              <Badge variant="secondary" className="w-full justify-start">
                🧠 Quiz Master - Answered 50 questions correctly
              </Badge>
              <Badge variant="secondary" className="w-full justify-start">
                🎯 Sharp Shooter - 90% accuracy streak
              </Badge>
            </>
          )}
          {gameType === 'phishing' && (
            <>
              <Badge variant="secondary" className="w-full justify-start">
                🎣 Phish Finder - Detected 25 phishing attempts
              </Badge>
              <Badge variant="secondary" className="w-full justify-start">
                🛡️ Digital Guardian - Perfect week
              </Badge>
            </>
          )}
          {gameType === 'challenges' && (
            <>
              <Badge variant="secondary" className="w-full justify-start">
                💻 Code Breaker - Completed cryptography challenge
              </Badge>
              <Badge variant="secondary" className="w-full justify-start">
                🔍 Detective - Found all hidden vulnerabilities
              </Badge>
            </>
          )}
        </div>
      </div>
    </div>
  )
}