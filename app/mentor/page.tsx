import type { Metadata } from "next"
import { MentorChat } from "@/components/mentor/mentor-chat"
import { LearningPaths } from "@/components/mentor/learning-paths"
import { ContextualHelp, ProgressGuidance } from "@/components/mentor/contextual-help"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "AI Mentor - Salem Cyber Vault",
  description: "Get personalized guidance and support from your AI cybersecurity mentor",
}

export default function MentorPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Cybersecurity Mentor</h1>
          <p className="text-muted-foreground">
            Your personal AI guide for cybersecurity learning and career development
          </p>
        </div>
      </div>

      <Tabs defaultValue="chat" className="space-y-4">
        <TabsList>
          <TabsTrigger value="chat">Chat with Mentor</TabsTrigger>
          <TabsTrigger value="paths">Learning Paths</TabsTrigger>
          <TabsTrigger value="progress">Progress Review</TabsTrigger>
          <TabsTrigger value="help">Contextual Help</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-4">
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Mentor Chat</CardTitle>
                <CardDescription>
                  Ask questions, get guidance, and receive personalized cybersecurity advice
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MentorChat />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Quick Help</CardTitle>
                <CardDescription>Common questions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <button className="w-full text-left p-2 rounded-lg border hover:bg-accent transition-colors">
                    <div className="font-medium text-sm">Career Guidance</div>
                    <div className="text-xs text-muted-foreground">How to start in cybersecurity?</div>
                  </button>
                  <button className="w-full text-left p-2 rounded-lg border hover:bg-accent transition-colors">
                    <div className="font-medium text-sm">Skill Development</div>
                    <div className="text-xs text-muted-foreground">What skills should I focus on?</div>
                  </button>
                  <button className="w-full text-left p-2 rounded-lg border hover:bg-accent transition-colors">
                    <div className="font-medium text-sm">Certifications</div>
                    <div className="text-xs text-muted-foreground">Which certs are most valuable?</div>
                  </button>
                  <button className="w-full text-left p-2 rounded-lg border hover:bg-accent transition-colors">
                    <div className="font-medium text-sm">Learning Resources</div>
                    <div className="text-xs text-muted-foreground">Best learning materials?</div>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="paths" className="space-y-4">
          <LearningPaths />
        </TabsContent>

        <TabsContent value="progress" className="space-y-4">
          <ProgressGuidance />
        </TabsContent>

        <TabsContent value="help" className="space-y-4">
          <ContextualHelp />
        </TabsContent>
      </Tabs>
    </div>
  )
}