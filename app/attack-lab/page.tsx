import type { Metadata } from "next"
import { NetworkSimulator } from "@/components/simulation/network-simulator"
import { AttackScenarios } from "@/components/simulation/attack-scenarios"
import { SimulationControls } from "@/components/simulation/simulation-controls"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Attack Simulation Lab - Salem Cyber Vault",
  description: "Interactive network attack simulation and learning environment",
}

export default function AttackLabPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Attack Simulation Lab</h1>
          <p className="text-muted-foreground">
            Interactive network security testing environment with real-time attack simulations
          </p>
        </div>
      </div>

      <Tabs defaultValue="network" className="space-y-4">
        <TabsList>
          <TabsTrigger value="network">Network Diagram</TabsTrigger>
          <TabsTrigger value="scenarios">Attack Scenarios</TabsTrigger>
          <TabsTrigger value="analysis">Traffic Analysis</TabsTrigger>
          <TabsTrigger value="forensics">Digital Forensics</TabsTrigger>
        </TabsList>

        <TabsContent value="network" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-4">
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Interactive Network Topology</CardTitle>
                <CardDescription>
                  Drag and drop network elements to create your security testing environment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NetworkSimulator />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Simulation Controls</CardTitle>
                <CardDescription>Configure and launch attacks</CardDescription>
              </CardHeader>
              <CardContent>
                <SimulationControls />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="scenarios" className="space-y-4">
          <AttackScenarios />
        </TabsContent>

        <TabsContent value="analysis" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Network Traffic Analysis</CardTitle>
              <CardDescription>
                Analyze network packets and identify malicious activity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">Live Traffic Monitor</h4>
                    <div className="space-y-2 text-sm font-mono">
                      <div className="flex justify-between">
                        <span className="text-green-500">192.168.1.10:80</span>
                        <span>→ HTTP GET /index.html</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-red-500">10.0.0.15:4444</span>
                        <span>→ Suspicious payload detected</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-500">192.168.1.5:443</span>
                        <span>→ SSL/TLS handshake</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-yellow-500">172.16.0.20:22</span>
                        <span>→ Failed SSH login attempt</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">Threat Indicators</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Port scanning detected</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm">Unusual traffic patterns</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm">Malware communication</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forensics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Digital Forensics Lab</CardTitle>
              <CardDescription>
                Investigate security incidents and analyze digital evidence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">Evidence Collection</h4>
                  <div className="space-y-2">
                    <div className="border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        <span className="font-medium">Memory Dump</span>
                      </div>
                      <p className="text-sm text-muted-foreground">RAM analysis - 8GB captured</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span className="font-medium">Disk Image</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Full disk forensic copy - 500GB</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 bg-purple-500 rounded"></div>
                        <span className="font-medium">Network Logs</span>
                      </div>
                      <p className="text-sm text-muted-foreground">24h traffic capture - 2.1GB</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Analysis Results</h4>
                  <div className="space-y-2 text-sm">
                    <div className="border rounded-lg p-3">
                      <div className="font-medium text-red-500 mb-1">🔍 Malware Detected</div>
                      <p>Trojan.Generic.KD.12345 found in C:\temp\</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <div className="font-medium text-yellow-500 mb-1">📁 Suspicious Files</div>
                      <p>Hidden partition with encrypted data discovered</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <div className="font-medium text-blue-500 mb-1">🌐 Network Activity</div>
                      <p>Connections to known C&C servers identified</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}