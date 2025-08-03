"use client"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const alerts = [
  {
    id: 1,
    title: "Critical Vulnerability Detected",
    description: "CVE-2023-1234 found on web server",
    time: "2 minutes ago",
    severity: "critical",
  },
  {
    id: 2,
    title: "Unusual Login Activity",
    description: "Multiple failed login attempts from 192.168.1.45",
    time: "15 minutes ago",
    severity: "high",
  },
  {
    id: 3,
    title: "Malware Detected",
    description: "Trojan detected and quarantined on endpoint DEV-45",
    time: "1 hour ago",
    severity: "high",
  },
  {
    id: 4,
    title: "System Update Available",
    description: "Security patch available for 3 systems",
    time: "3 hours ago",
    severity: "medium",
  },
]

export function AlertsButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Show alerts</span>
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-orange-500 text-[10px] font-medium text-white flex items-center justify-center">
            4
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Recent Alerts</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="max-h-[300px] overflow-auto">
          {alerts.map((alert) => (
            <DropdownMenuItem key={alert.id} className="cursor-pointer py-3">
              <div className="flex items-start gap-2">
                <div
                  className={`h-2 w-2 mt-1.5 rounded-full ${
                    alert.severity === "critical"
                      ? "bg-red-500"
                      : alert.severity === "high"
                        ? "bg-orange-500"
                        : alert.severity === "medium"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                  }`}
                />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">{alert.title}</p>
                  <p className="text-xs text-muted-foreground">{alert.description}</p>
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer justify-center font-medium">View all alerts</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
