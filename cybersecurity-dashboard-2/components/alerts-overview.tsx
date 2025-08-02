"use client"

import { useState } from "react"
import { AlertTriangle, Filter, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const alerts = [
  {
    id: "ALERT-1234",
    title: "Critical Vulnerability Detected",
    source: "Web Server",
    severity: "Critical",
    time: "2023-10-31 14:23:45",
    status: "Open",
  },
  {
    id: "ALERT-1235",
    title: "Unusual Login Activity",
    source: "Authentication System",
    severity: "High",
    time: "2023-10-31 13:45:22",
    status: "Investigating",
  },
  {
    id: "ALERT-1236",
    title: "Malware Detected",
    source: "Endpoint DEV-45",
    severity: "High",
    time: "2023-10-31 12:12:01",
    status: "Mitigated",
  },
  {
    id: "ALERT-1237",
    title: "DDoS Attack Attempt",
    source: "Network Gateway",
    severity: "Critical",
    time: "2023-10-31 11:05:33",
    status: "Open",
  },
  {
    id: "ALERT-1238",
    title: "Suspicious File Download",
    source: "Endpoint HR-12",
    severity: "Medium",
    time: "2023-10-31 10:45:12",
    status: "Investigating",
  },
  {
    id: "ALERT-1239",
    title: "Firewall Rule Violation",
    source: "Network Firewall",
    severity: "Medium",
    time: "2023-10-31 09:30:45",
    status: "Resolved",
  },
  {
    id: "ALERT-1240",
    title: "Unauthorized Access Attempt",
    source: "Database Server",
    severity: "High",
    time: "2023-10-31 08:22:18",
    status: "Mitigated",
  },
  {
    id: "ALERT-1241",
    title: "System Update Available",
    source: "Update Server",
    severity: "Low",
    time: "2023-10-31 07:15:33",
    status: "Open",
  },
]

export function AlertsOverview() {
  const [searchTerm, setSearchTerm] = useState("")
  const [severityFilter, setSeverityFilter] = useState("All")
  const [statusFilter, setStatusFilter] = useState("All")

  const filteredAlerts = alerts.filter((alert) => {
    const matchesSearch =
      alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.source.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesSeverity = severityFilter === "All" || alert.severity === severityFilter
    const matchesStatus = statusFilter === "All" || alert.status === statusFilter

    return matchesSearch && matchesSeverity && matchesStatus
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            Security Alerts
          </CardTitle>
          <CardDescription>Monitor and manage security alerts across your systems</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          Mark All as Read
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1">
            <Input
              placeholder="Search alerts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <Select value={severityFilter} onValueChange={setSeverityFilter}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Severities</SelectItem>
                <SelectItem value="Critical">Critical</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Statuses</SelectItem>
                <SelectItem value="Open">Open</SelectItem>
                <SelectItem value="Investigating">Investigating</SelectItem>
                <SelectItem value="Mitigated">Mitigated</SelectItem>
                <SelectItem value="Resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Alert</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAlerts.map((alert) => (
                <TableRow key={alert.id}>
                  <TableCell className="font-medium">{alert.id}</TableCell>
                  <TableCell>{alert.title}</TableCell>
                  <TableCell>{alert.source}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        alert.severity === "Critical"
                          ? "border-red-500 text-red-500"
                          : alert.severity === "High"
                            ? "border-orange-500 text-orange-500"
                            : alert.severity === "Medium"
                              ? "border-yellow-500 text-yellow-500"
                              : "border-blue-500 text-blue-500"
                      }
                    >
                      {alert.severity}
                    </Badge>
                  </TableCell>
                  <TableCell>{alert.time}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        alert.status === "Open"
                          ? "bg-red-500/10 text-red-500"
                          : alert.status === "Investigating"
                            ? "bg-orange-500/10 text-orange-500"
                            : alert.status === "Mitigated"
                              ? "bg-yellow-500/10 text-yellow-500"
                              : "bg-green-500/10 text-green-500"
                      }
                    >
                      {alert.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Assign to team</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Change status</DropdownMenuItem>
                        <DropdownMenuItem>Add note</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
