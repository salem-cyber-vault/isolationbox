"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ProgressGuidance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress Guidance</CardTitle>
        <CardDescription>Personalized recommendations for your learning journey</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center text-muted-foreground">
          AI-powered guidance to help you achieve your cybersecurity goals.
        </div>
      </CardContent>
    </Card>
  )
}