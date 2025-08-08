import type { Metadata } from "next"
import { UserStats, SkillRadar } from "@/components/profile/user-stats"
import { AchievementsBadges, LearningProgress, ActivityFeed } from "@/components/profile/achievements-badges"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Profile & Progress - Salem Cyber Vault",
  description: "Track your cybersecurity learning progress, achievements, and skill development",
}

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/avatars/cyber-defender.png" alt="User Avatar" />
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-2xl font-bold">Cyber Defender</h1>
              <p className="text-muted-foreground">Security Enthusiast • Level 12</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary">🔥 7 Day Streak</Badge>
                <Badge variant="outline">🏆 Top 10%</Badge>
                <Badge variant="outline">⭐ 2,847 Points</Badge>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Member since</div>
              <div className="font-medium">October 2024</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="progress">Learning Progress</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Your Statistics</CardTitle>
                <CardDescription>
                  Overview of your learning activities and achievements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UserStats />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Skill Assessment</CardTitle>
                <CardDescription>
                  Your cybersecurity skills across different domains
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SkillRadar />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
                <CardDescription>Latest badges and milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                      🏆
                    </div>
                    <div>
                      <div className="font-medium">Quiz Master</div>
                      <div className="text-sm text-muted-foreground">Completed 50 quizzes</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      🛡️
                    </div>
                    <div>
                      <div className="font-medium">Threat Hunter</div>
                      <div className="text-sm text-muted-foreground">Identified 100 threats</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      🔍
                    </div>
                    <div>
                      <div className="font-medium">OSINT Expert</div>
                      <div className="text-sm text-muted-foreground">Advanced reconnaissance</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Learning Streaks</CardTitle>
                <CardDescription>Consistency tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Current Streak</span>
                      <span className="text-2xl font-bold text-blue-500">7</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">3 days to next milestone</div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Longest Streak</span>
                      <span className="text-lg font-bold">21</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Personal best</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Next Goals</CardTitle>
                <CardDescription>Upcoming milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border rounded-lg p-3">
                    <div className="font-medium text-sm mb-1">Level 13</div>
                    <div className="w-full bg-secondary rounded-full h-2 mb-1">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <div className="text-xs text-muted-foreground">153/250 XP</div>
                  </div>
                  
                  <div className="border rounded-lg p-3">
                    <div className="font-medium text-sm mb-1">Phishing Expert</div>
                    <div className="w-full bg-secondary rounded-full h-2 mb-1">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <div className="text-xs text-muted-foreground">40/50 correct identifications</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <AchievementsBadges />
        </TabsContent>

        <TabsContent value="progress" className="space-y-4">
          <LearningProgress />
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <ActivityFeed />
        </TabsContent>
      </Tabs>
    </div>
  )
}