"use client"

import { Badge } from "@/components/ui/badge"

export function SafetyOverlay() {
  return (
    <Badge variant="outline" className="border-yellow-500 text-yellow-700">
      ⚠️ Educational Use Only
    </Badge>
  )
}

export function ReconResults() {
  return (
    <div className="text-center text-muted-foreground">
      OSINT reconnaissance results will appear here
    </div>
  )
}