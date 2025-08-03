"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ExternalLink, Globe, Shield, Zap, Loader2 } from "lucide-react"
import { fetchThreats, filterThreatsBySeverity, type Threat } from "@/lib/api"

interface ThreatIntelligenceProps {
  expanded?: boolean
}

export function ThreatIntelligence({ expanded = false }: ThreatIntelligenceProps) {
  const [activeTab, setActiveTab] = useState("all")
  const [threats, setThreats] = useState<Threat[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadThreats() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchThreats()
        setThreats(data)
      } catch (err) {
        setError("Failed to load threat intelligence data")
        console.error("Error fetching threats:", err)
      } finally {
        setLoading(false)
      }
    }

    loadThreats()
  }, [])

  const filteredThreats = filterThreatsBySeverity(threats, activeTab)
  const displayThreats = expanded ? filteredThreats : filteredThreats.slice(0, 3)

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[300px]">
        <div className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span className="text-sm text-muted-foreground">Loading threat intelligence...</span>
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
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="critical">Critical</TabsTrigger>
          <TabsTrigger value="high">High</TabsTrigger>
          <TabsTrigger value="medium">Medium</TabsTrigger>
        </TabsList>
      </Tabs>

      <ScrollArea className={expanded ? "h-[500px]" : "h-[300px]"}>
        <div className="space-y-4">
          {displayThreats.map((threat) => (
            <Card key={threat.id} className="p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    {threat.type === "Ransomware" ? (
                      <Zap className="h-4 w-4 text-red-500" />
                    ) : threat.type.includes("Vulnerability") ? (
                      <Shield className="h-4 w-4 text-orange-500" />
                    ) : (
                      <Globe className="h-4 w-4 text-purple-500" />
                    )}
                    <h3 className="font-medium">{threat.name}</h3>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      threat.severity === "Critical"
                        ? "border-red-500 text-red-500"
                        : threat.severity === "High"
                          ? "border-orange-500 text-orange-500"
                          : "border-yellow-500 text-yellow-500"
                    }
                  >
                    {threat.severity}
                  </Badge>
                </div>

                <div className="text-xs text-muted-foreground">
                  <span className="font-medium">{threat.type}</span> • Updated {threat.updated}
                </div>

                <p className="text-sm">{threat.description}</p>

                <div className="flex flex-wrap gap-1 mt-1">
                  {threat.targets.map((target, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {target}
                    </Badge>
                  ))}
                </div>

                {expanded && (
                  <div className="mt-2">
                    <h4 className="text-xs font-medium mb-1">Indicators of Compromise:</h4>
                    <ul className="text-xs text-muted-foreground list-disc pl-4 space-y-1">
                      {threat.indicators.map((indicator, i) => (
                        <li key={i}>{indicator}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex justify-end mt-1">
                  <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs">
                    View details <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>

      {!expanded && filteredThreats.length > 3 && (
        <div className="flex justify-center">
          <Button variant="ghost" size="sm" className="gap-1">
            View all threats <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
