"use client"

import { useState } from "react"
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
import { AlertTriangle, ArrowRight, CheckCircle, Clock, Info, ShieldAlert, XCircle, ExternalLink } from "lucide-react"

const events = [
  {
    id: 1,
    type: "alert",
    title: "Critical vulnerability detected",
    description: "CVE-2023-1234 found on web server",
    time: "2 minutes ago",
    icon: AlertTriangle,
    iconColor: "text-red-500",
    details: {
      severity: "Critical",
      affectedSystems: ["Web Server 01", "Web Server 02"],
      cve: "CVE-2023-1234",
      solution: "Apply security patch immediately",
      impact: "Remote code execution possible",
      learnMore: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-1234",
      mitreAttack: "https://attack.mitre.org/techniques/T1190/",
      nistGuide: "https://nvd.nist.gov/vuln/detail/CVE-2023-1234",
    },
  },
  {
    id: 2,
    type: "info",
    title: "System scan completed",
    description: "Weekly security scan finished",
    time: "15 minutes ago",
    icon: Info,
    iconColor: "text-blue-500",
    details: {
      severity: "Info",
      affectedSystems: ["All Systems"],
      scanType: "Full System Scan",
      findings: "23 vulnerabilities found, 18 patched",
      duration: "2 hours 34 minutes",
      learnMore: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-1234",
      mitreAttack: "https://attack.mitre.org/techniques/T1190/",
      nistGuide: "https://nvd.nist.gov/vuln/detail/CVE-2023-1234",
    },
  },
  {
    id: 3,
    type: "warning",
    title: "Unusual login activity",
    description: "Multiple failed login attempts from 192.168.1.45",
    time: "32 minutes ago",
    icon: ShieldAlert,
    iconColor: "text-orange-500",
    details: {
      severity: "Warning",
      sourceIP: "192.168.1.45",
      attempts: "15 failed attempts",
      targetAccount: "admin@salencybervault.com",
      action: "IP temporarily blocked",
      learnMore: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-1234",
      mitreAttack: "https://attack.mitre.org/techniques/T1190/",
      nistGuide: "https://nvd.nist.gov/vuln/detail/CVE-2023-1234",
    },
  },
  {
    id: 4,
    type: "success",
    title: "Firewall rules updated",
    description: "New rules applied successfully",
    time: "1 hour ago",
    icon: CheckCircle,
    iconColor: "text-green-500",
    details: {
      severity: "Success",
      rulesAdded: 5,
      rulesModified: 3,
      rulesRemoved: 1,
      appliedTo: "All network segments",
      learnMore: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-1234",
      mitreAttack: "https://attack.mitre.org/techniques/T1190/",
      nistGuide: "https://nvd.nist.gov/vuln/detail/CVE-2023-1234",
    },
  },
  {
    id: 5,
    type: "alert",
    title: "Malware detected",
    description: "Trojan detected and quarantined on endpoint DEV-45",
    time: "1.5 hours ago",
    icon: XCircle,
    iconColor: "text-red-500",
    details: {
      severity: "High",
      malwareType: "Trojan.Win32.Generic",
      endpoint: "DEV-45 (John's Laptop)",
      action: "File quarantined and system cleaned",
      scanRecommended: "Full system scan recommended",
      learnMore: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-1234",
      mitreAttack: "https://attack.mitre.org/techniques/T1190/",
      nistGuide: "https://nvd.nist.gov/vuln/detail/CVE-2023-1234",
    },
  },
  {
    id: 6,
    type: "info",
    title: "System update available",
    description: "Security patch available for 3 systems",
    time: "2 hours ago",
    icon: Info,
    iconColor: "text-blue-500",
    details: {
      severity: "Info",
      updateType: "Security Patch",
      affectedSystems: ["DB Server", "Mail Server", "File Server"],
      patchSize: "245 MB",
      estimatedDowntime: "15 minutes per server",
      learnMore: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-1234",
      mitreAttack: "https://attack.mitre.org/techniques/T1190/",
      nistGuide: "https://nvd.nist.gov/vuln/detail/CVE-2023-1234",
    },
  },
  {
    id: 7,
    type: "warning",
    title: "API rate limit reached",
    description: "External API calls exceeded threshold",
    time: "3 hours ago",
    icon: Clock,
    iconColor: "text-yellow-500",
    details: {
      severity: "Warning",
      apiEndpoint: "threat-intel.api.com",
      currentUsage: "1,250 calls/hour",
      limit: "1,000 calls/hour",
      recommendation: "Upgrade API plan or reduce call frequency",
      learnMore: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-1234",
      mitreAttack: "https://attack.mitre.org/techniques/T1190/",
      nistGuide: "https://nvd.nist.gov/vuln/detail/CVE-2023-1234",
    },
  },
]

export function RecentEvents() {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const filteredEvents = selectedType ? events.filter((event) => event.type === selectedType) : events

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
