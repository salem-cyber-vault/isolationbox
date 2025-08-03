"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ExternalLink, Globe, Shield, Zap } from "lucide-react"

interface ThreatIntelligenceProps {
  expanded?: boolean
}

const threats = [
  {
    id: 1,
    name: "BlackCat Ransomware",
    type: "Ransomware",
    severity: "Critical",
    targets: ["Financial Services", "Healthcare"],
    description:
      "New variant of BlackCat ransomware targeting vulnerable Exchange servers with enhanced encryption capabilities.",
    indicators: ["Suspicious PowerShell commands", "Unusual network traffic to port 445", "Registry modifications"],
    updated: "2 hours ago",
  },
  {
    id: 2,
    name: "APT-29 Campaign",
    type: "Advanced Persistent Threat",
    severity: "High",
    targets: ["Government", "Defense"],
    description: "Ongoing spear-phishing campaign targeting government officials with malicious Office documents.",
    indicators: ["Emails with .doc attachments", "Macro execution", "Connections to known C2 servers"],
    updated: "5 hours ago",
  },
  {
    id: 3,
    name: "SQL Injection Vulnerability",
    type: "Web Application Vulnerability",
    severity: "Medium",
    targets: ["E-commerce", "Web Applications"],
    description: "New SQL injection technique bypassing common WAF protections discovered in the wild.",
    indicators: ["Unusual database queries", "Unexpected error messages", "Data exfiltration attempts"],
    updated: "1 day ago",
  },
  {
    id: 4,
    name: "DDoS Botnet",
    type: "Botnet",
    severity: "High",
    targets: ["Financial Services", "Critical Infrastructure"],
    description: "Large botnet observed preparing for coordinated DDoS attacks against financial institutions.",
    indicators: ["Unusual traffic patterns", "Connection attempts from multiple IPs", "DNS amplification"],
    updated: "8 hours ago",
  },
  {
    id: 5,
    name: "Zero-day in Chrome",
    type: "Browser Vulnerability",
    severity: "Critical",
    targets: ["All Industries"],
    description: "Actively exploited zero-day vulnerability in Chrome browser allowing remote code execution.",
    indicators: ["Unexpected browser crashes", "Unusual process spawning", "Unknown browser extensions"],
    updated: "3 hours ago",
  },
  {
    id: 6,
    name: "Supply Chain Attack",
    type: "Supply Chain",
    severity: "High",
    targets: ["Software Development", "IT Services"],
    description: "Compromised software repository distributing malicious packages to developers.",
    indicators: ["Unexpected code in dependencies", "Unusual network connections", "Unauthorized system changes"],
    updated: "12 hours ago",
  },
]

export function ThreatIntelligence({ expanded = false }: ThreatIntelligenceProps) {
  const [activeTab, setActiveTab] = useState("all")

  const filteredThreats =
    activeTab === "all"
      ? threats
      : threats.filter((threat) =>
          activeTab === "critical"
            ? threat.severity === "Critical"
            : activeTab === "high"
              ? threat.severity === "High"
              : threat.severity === "Medium",
        )

  const displayThreats = expanded ? filteredThreats : filteredThreats.slice(0, 3)

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
