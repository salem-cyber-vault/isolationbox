"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, Server } from "lucide-react"

interface SystemStatusProps {
  expanded?: boolean
}

const systems = [
  {
    id: 1,
    name: "Web Server",
    status: "Healthy",
    cpu: 32,
    memory: 45,
    disk: 28,
    uptime: "45d 12h 33m",
    updates: 0,
  },
  {
    id: 2,
    name: "Database Server",
    status: "Warning",
    cpu: 78,
    memory: 82,
    disk: 65,
    uptime: "30d 5h 12m",
    updates: 2,
  },
  {
    id: 3,
    name: "Authentication Server",
    status: "Healthy",
    cpu: 25,
    memory: 40,
    disk: 30,
    uptime: "60d 3h 45m",
    updates: 1,
  },
  {
    id: 4,
    name: "API Gateway",
    status: "Critical",
    cpu: 92,
    memory: 88,
    disk: 75,
    uptime: "15d 22h 10m",
    updates: 5,
  },
  {
    id: 5,
    name: "Load Balancer",
    status: "Healthy",
    cpu: 45,
    memory: 50,
    disk: 20,
    uptime: "90d 11h 55m",
    updates: 0,
  },
  {
    id: 6,
    name: "Storage Server",
    status: "Warning",
    cpu: 65,
    memory: 72,
    disk: 88,
    uptime: "25d 8h 20m",
    updates: 3,
  },
  {
    id: 7,
    name: "Backup Server",
    status: "Healthy",
    cpu: 30,
    memory: 45,
    disk: 60,
    uptime: "40d 15h 30m",
    updates: 1,
  },
]

export function SystemStatus({ expanded = false }: SystemStatusProps) {
  const [activeTab, setActiveTab] = useState("all")

  const filteredSystems =
    activeTab === "all" ? systems : systems.filter((system) => system.status.toLowerCase() === activeTab)

  const displaySystems = expanded ? filteredSystems : filteredSystems.slice(0, 4)

  return (
    <div className="space-y-4">
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="healthy">Healthy</TabsTrigger>
          <TabsTrigger value="warning">Warning</TabsTrigger>
          <TabsTrigger value="critical">Critical</TabsTrigger>
        </TabsList>
      </Tabs>

      <ScrollArea className={expanded ? "h-[500px]" : "h-[300px]"}>
        <div className="space-y-4">
          {displaySystems.map((system) => (
            <div key={system.id} className="rounded-lg border p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{system.name}</span>
                </div>
                <Badge
                  variant="outline"
                  className={
                    system.status === "Healthy"
                      ? "border-green-500 text-green-500"
                      : system.status === "Warning"
                        ? "border-orange-500 text-orange-500"
                        : "border-red-500 text-red-500"
                  }
                >
                  {system.status}
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">CPU</span>
                    <span
                      className={
                        system.cpu > 80 ? "text-red-500" : system.cpu > 60 ? "text-orange-500" : "text-muted-foreground"
                      }
                    >
                      {system.cpu}%
                    </span>
                  </div>
                  <Progress
                    value={system.cpu}
                    className={system.cpu > 80 ? "bg-red-500" : system.cpu > 60 ? "bg-orange-500" : "bg-green-500"}
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Memory</span>
                    <span
                      className={
                        system.memory > 80
                          ? "text-red-500"
                          : system.memory > 60
                            ? "text-orange-500"
                            : "text-muted-foreground"
                      }
                    >
                      {system.memory}%
                    </span>
                  </div>
                  <Progress
                    value={system.memory}
                    className={
                      system.memory > 80 ? "bg-red-500" : system.memory > 60 ? "bg-orange-500" : "bg-green-500"
                    }
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Disk</span>
                    <span
                      className={
                        system.disk > 80
                          ? "text-red-500"
                          : system.disk > 60
                            ? "text-orange-500"
                            : "text-muted-foreground"
                      }
                    >
                      {system.disk}%
                    </span>
                  </div>
                  <Progress
                    value={system.disk}
                    className={system.disk > 80 ? "bg-red-500" : system.disk > 60 ? "bg-orange-500" : "bg-green-500"}
                  />
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-muted-foreground">Uptime</span>
                  <span>{system.uptime}</span>
                </div>

                {system.updates > 0 && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Updates</span>
                    <Badge variant="outline" className="text-orange-500 border-orange-500">
                      {system.updates} pending
                    </Badge>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {!expanded && filteredSystems.length > 4 && (
        <div className="flex justify-center">
          <Button variant="ghost" size="sm" className="gap-1">
            View all systems <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
