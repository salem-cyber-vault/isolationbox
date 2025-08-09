import type { Metadata } from "next"
import { ThreatMap } from "@/components/threat-map"
import { AlertsOverview } from "@/components/alerts-overview"
import { SecurityScore } from "@/components/security-score"
import { RecentEvents } from "@/components/recent-events"
import { SystemStatus } from "@/components/system-status"
import { ThreatIntelligence } from "@/components/threat-intelligence"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export const metadata: Metadata = {
  title: "Dashboard - CyberEye Security",
  description: "Advanced cybersecurity monitoring dashboard",
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Salem Cyber Vault Dashboard</h1>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="intelligence">Intelligence</TabsTrigger>
          <TabsTrigger value="systems">Systems</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <SecurityScore />
            <Dialog>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Threats</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-blue-500"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-500">24</div>
                    <p className="text-xs text-muted-foreground">+12 from yesterday</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Active Threats Breakdown</DialogTitle>
                  <DialogDescription>Current threats detected across your network</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Malware Detected</h4>
                      <p className="text-2xl font-bold text-red-500">8</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Suspicious Activity</h4>
                      <p className="text-2xl font-bold text-blue-500">12</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Failed Logins</h4>
                      <p className="text-2xl font-bold text-yellow-500">4</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Network Anomalies</h4>
                      <p className="text-2xl font-bold text-blue-500">0</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monitored Systems</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-blue-500"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">132</div>
                <p className="text-xs text-muted-foreground">+3 new devices</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Blocked Attacks</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-green-500"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-500">2,345</div>
                <p className="text-xs text-muted-foreground">+573 since last week</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Global Threat Map</CardTitle>
                <CardDescription>Live attack visualization across the globe</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ThreatMap />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Events</CardTitle>
                <CardDescription>Last 24 hours of security events</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentEvents />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>System Status</CardTitle>
                <CardDescription>Health of monitored systems</CardDescription>
              </CardHeader>
              <CardContent>
                <SystemStatus />
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Threat Intelligence</CardTitle>
                <CardDescription>Latest intelligence from our partners</CardDescription>
              </CardHeader>
              <CardContent>
                <ThreatIntelligence />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <AlertsOverview />
        </TabsContent>

        <TabsContent value="intelligence">
          <Card>
            <CardHeader>
              <CardTitle>Threat Intelligence</CardTitle>
              <CardDescription>Comprehensive threat intelligence from multiple sources</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ThreatIntelligence expanded={true} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="systems">
          <Card>
            <CardHeader>
              <CardTitle>System Monitoring</CardTitle>
              <CardDescription>Status and health of all monitored systems</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <SystemStatus expanded={true} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
