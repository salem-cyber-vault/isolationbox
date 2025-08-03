"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRight, ExternalLink, Loader2 } from "lucide-react"
import { fetchEvents, filterEventsByType, type SecurityEvent } from "@/lib/api"

export function RecentEvents() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [events, setEvents] = useState<SecurityEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadEvents() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchEvents()
        setEvents(data)
      } catch (err) {
        setError("Failed to load security events")
        console.error("Error fetching events:", err)
      } finally {
        setLoading(false)
      }
    }

    loadEvents()
  }, [])

  const filteredEvents = filterEventsByType(events, selectedType)

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[300px]">
        <div className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span className="text-sm text-muted-foreground">Loading recent events...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[300px]">
        <div className="text-center">
          <p className="text-sm text-red-500 mb-2">{error}</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.location.reload()}
          >
            Retry
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedType === null ? "secondary" : "outline"}
          size="sm"
          onClick={() => setSelectedType(null)}
        >
          All
        </Button>
        <Button
          variant={selectedType === "alert" ? "secondary" : "outline"}
          size="sm"
          className={selectedType === "alert" ? "bg-red-500/10 text-red-500 hover:bg-red-500/20" : ""}
          onClick={() => setSelectedType("alert")}
        >
          Alerts
        </Button>
        <Button
          variant={selectedType === "warning" ? "secondary" : "outline"}
          size="sm"
          className={selectedType === "warning" ? "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20" : ""}
          onClick={() => setSelectedType("warning")}
        >
          Warnings
        </Button>
        <Button
          variant={selectedType === "info" ? "secondary" : "outline"}
          size="sm"
          className={selectedType === "info" ? "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20" : ""}
          onClick={() => setSelectedType("info")}
        >
          Info
        </Button>
        <Button
          variant={selectedType === "success" ? "secondary" : "outline"}
          size="sm"
          className={selectedType === "success" ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" : ""}
          onClick={() => setSelectedType("success")}
        >
          Success
        </Button>
      </div>

      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-4">
          {filteredEvents.map((event) => (
            <Dialog key={event.id}>
              <DialogTrigger asChild>
                <div className="flex items-start gap-4 rounded-lg border p-3 hover:bg-accent/50 transition-colors cursor-pointer">
                  <div className={`mt-0.5 ${event.iconColor}`}>
                    <event.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{event.title}</p>
                      <Badge variant="outline" className="text-xs">
                        {event.time}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <event.icon className={`h-5 w-5 ${event.iconColor}`} />
                    {event.title}
                  </DialogTitle>
                  <DialogDescription>{event.description}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-sm">Severity</h4>
                      <Badge
                        variant="outline"
                        className={
                          event.details.severity === "Critical" || event.details.severity === "High"
                            ? "border-red-500 text-red-500"
                            : event.details.severity === "Warning"
                              ? "border-orange-500 text-orange-500"
                              : event.details.severity === "Success"
                                ? "border-green-500 text-green-500"
                                : "border-blue-500 text-blue-500"
                        }
                      >
                        {event.details.severity}
                      </Badge>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Time</h4>
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(event.details)
                      .filter(
                        ([key]) =>
                          key !== "severity" && key !== "learnMore" && key !== "mitreAttack" && key !== "nistGuide",
                      )
                      .map(([key, value]) => (
                        <div key={key}>
                          <h4 className="font-medium text-sm capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</h4>
                          <p className="text-sm text-muted-foreground">
                            {Array.isArray(value) ? value.join(", ") : value}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="space-y-2 border-t pt-4">
                  <h4 className="font-medium text-sm">Learn More (Beginner-Friendly Resources)</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={event.details.learnMore} target="_blank" rel="noopener noreferrer">
                        CVE Details <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={event.details.mitreAttack} target="_blank" rel="noopener noreferrer">
                        MITRE ATT&CK <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={event.details.nistGuide} target="_blank" rel="noopener noreferrer">
                        NIST Guide <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm">
                      Interactive Attack Simulator
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </ScrollArea>

      <div className="flex justify-center">
        <Button variant="ghost" size="sm" className="gap-1">
          View all events <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
