import type { Metadata } from "next"
import { CyberQuiz } from "@/components/games/cyber-quiz"
import { PhishingGame } from "@/components/games/phishing-game"
import { SecurityChallenges } from "@/components/games/security-challenges"
import { Leaderboard } from "@/components/games/leaderboard"
import { ProgressTracker } from "@/components/games/progress-tracker"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Security Games - Salem Cyber Vault",
  description: "Interactive cybersecurity games and challenges for learning and skill development",
}

export default function GamesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Security Games & Challenges</h1>
          <p className="text-muted-foreground">
            Test your cybersecurity knowledge with interactive games and real-world scenarios
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Current Streak: 7 days</Badge>
          <Badge variant="outline">Level 12</Badge>
        </div>
      </div>

      <Tabs defaultValue="quiz" className="space-y-4">
        <TabsList>
          <TabsTrigger value="quiz">Cyber Quiz</TabsTrigger>
          <TabsTrigger value="phishing">Spot the Phish</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        </TabsList>

        <TabsContent value="quiz" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-4">
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Cybersecurity Knowledge Quiz</CardTitle>
                <CardDescription>
                  Test your understanding of cybersecurity concepts across multiple domains
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CyberQuiz />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
                <CardDescription>Track your learning journey</CardDescription>
              </CardHeader>
              <CardContent>
                <ProgressTracker gameType="quiz" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="phishing" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-4">
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Spot the Phishing Attack</CardTitle>
                <CardDescription>
                  Identify phishing attempts in emails, websites, and messages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PhishingGame />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Phishing Stats</CardTitle>
                <CardDescription>Your detection accuracy</CardDescription>
              </CardHeader>
              <CardContent>
                <ProgressTracker gameType="phishing" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="challenges" className="space-y-4">
          <SecurityChallenges />
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Champions</CardTitle>
                <CardDescription>Top performers this week</CardDescription>
              </CardHeader>
              <CardContent>
                <Leaderboard timeframe="week" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>All-Time Leaders</CardTitle>
                <CardDescription>Hall of fame</CardDescription>
              </CardHeader>
              <CardContent>
                <Leaderboard timeframe="all-time" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}