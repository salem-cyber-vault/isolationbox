"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Bell, Eye, Trash2, Edit, Globe, Shield, AlertTriangle, CheckCircle, Clock } from "lucide-react"

const monitoredAssets = [
  {
    id: 1,
    name: "Corporate Web Servers",
    query: 'org:"Example Corp" port:80,443',
    alertsEnabled: true,
    lastScan: "2024-01-15 14:30:00",
    deviceCount: 45,
    newDevices: 2,
    vulnerabilities: 8,
    status: "active",
  },
  {
    id: 2,
    name: "Database Servers",
    query: 'org:"Example Corp" port:3306,5432,27017',
    alertsEnabled: true,
    lastScan: "2024-01-15 13:45:00",
    deviceCount: 12,
    newDevices: 0,
    vulnerabilities: 3,
    status: "active",
  },
  {
    id: 3,
    name: "IoT Devices",
    query: 'org:"Example Corp" device:camera,sensor',
    alertsEnabled: false,
    lastScan: "2024-01-15 12:00:00",
    deviceCount: 234,
    newDevices: 15,
    vulnerabilities: 67,
    status: "paused",
  },
]

const recentAlerts = [
  {
    id: 1,
    asset: "Corporate Web Servers",
    type: "New Device",
    message: "New Apache server detected at 192.168.1.100",
    severity: "info",
    timestamp: "2024-01-15 14:25:00",
  },
  {
    id: 2,
    asset: "Database Servers",
    type: "Vulnerability",
    message: "Critical SQL injection vulnerability detected",
    severity: "critical",
    timestamp: "2024-01-15 13:30:00",
  },
  {
    id: 3,
    asset: "IoT Devices",
    type: "Configuration Change",
    message: "Default credentials detected on 5 cameras",
    severity: "high",
    timestamp: "2024-01-15 12:15:00",
  },
]

export function AssetMonitoring() {
  const [showAddDialog, setShowAddDialog] = useState(false)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "paused":
        return <Clock className="h-4 w-4 text-yellow-500" />
      default:
        return <AlertTriangle className="h-4 w-4 text-red-500" />
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "border-red-500 text-red-500"
      case "high":
        return "border-orange-500 text-orange-500"
      case "info":
        return "border-blue-500 text-blue-500"
      default:
        return "border-gray-500 text-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      {/* Monitoring Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monitored Assets</CardTitle>
            <Eye className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">291</div>
            <p className="text-xs text-muted-foreground">Across 3 monitoring groups</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Devices</CardTitle>
            <Globe className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500">17</div>
            <p className="text-xs text-muted-foreground">Discovered in last 24h</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <Bell className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">12</div>
            <p className="text-xs text-muted-foreground">Requiring attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vulnerabilities</CardTitle>
            <Shield className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-500">78</div>
            <p className="text-xs text-muted-foreground">Across all assets</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="assets" className="space-y-4">
        <TabsList>
          <TabsTrigger value="assets">Monitored Assets</TabsTrigger>
          <TabsTrigger value="alerts">Recent Alerts</TabsTrigger>
          <TabsTrigger value="settings">Alert Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="assets" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Asset Monitoring</CardTitle>
                  <CardDescription>Track changes to your digital infrastructure in real-time</CardDescription>
                </div>
                <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Monitor
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create New Asset Monitor</DialogTitle>
                      <DialogDescription>Set up monitoring for a specific set of devices or services</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="monitor-name">Monitor Name</Label>
                        <Input id="monitor-name" placeholder="e.g., Production Web Servers" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="search-query">Search Query</Label>
                        <Input id="search-query" placeholder='e.g., org:"Your Company" port:80,443' />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="enable-alerts" />
                        <Label htmlFor="enable-alerts">Enable real-time alerts</Label>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => setShowAddDialog(false)}>
                          Cancel
                        </Button>
                        <Button onClick={() => setShowAddDialog(false)}>Create Monitor</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Monitor</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Devices</TableHead>
                      <TableHead>Changes</TableHead>
                      <TableHead>Last Scan</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {monitoredAssets.map((asset) => (
                      <TableRow key={asset.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{asset.name}</div>
                            <code className="text-xs text-muted-foreground bg-muted px-1 rounded">{asset.query}</code>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(asset.status)}
                            <span className="capitalize">{asset.status}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{asset.deviceCount} devices</div>
                            {asset.newDevices > 0 && (
                              <Badge variant="outline" className="text-xs border-blue-500 text-blue-500">
                                +{asset.newDevices} new
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          {asset.vulnerabilities > 0 && (
                            <Badge variant="outline" className="border-red-500 text-red-500">
                              {asset.vulnerabilities} vulns
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">{asset.lastScan}</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Alerts</CardTitle>
              <CardDescription>Latest notifications from your monitored assets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start gap-4 p-4 border rounded-lg">
                    <AlertTriangle
                      className={`h-5 w-5 mt-0.5 ${
                        alert.severity === "critical"
                          ? "text-red-500"
                          : alert.severity === "high"
                            ? "text-orange-500"
                            : "text-blue-500"
                      }`}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{alert.asset}</span>
                        <Badge variant="outline" className={getSeverityColor(alert.severity)}>
                          {alert.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.timestamp}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Alert Configuration</CardTitle>
              <CardDescription>Configure how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">New Device Alerts</Label>
                    <p className="text-sm text-muted-foreground">Get notified when new devices are discovered</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Vulnerability Alerts</Label>
                    <p className="text-sm text-muted-foreground">Alert on new vulnerabilities in monitored assets</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Configuration Changes</Label>
                    <p className="text-sm text-muted-foreground">Monitor for changes in device configurations</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
