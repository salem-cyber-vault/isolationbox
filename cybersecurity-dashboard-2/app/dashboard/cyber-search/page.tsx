import type { Metadata } from "next"
import { CyberSearchInterface } from "@/components/cyber-search-interface"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SearchResults } from "@/components/search-results"
import { VulnerabilityAnalysis } from "@/components/vulnerability-analysis"
import { AssetMonitoring } from "@/components/asset-monitoring"

export const metadata: Metadata = {
  title: "Cyber Search - Salem Cyber Vault",
  description: "Advanced cybersecurity search engine for discovering internet-connected devices and services",
}

export default function CyberSearchPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Cyber Search Engine</h1>
          <p className="text-muted-foreground">
            Discover and analyze internet-connected devices, services, and digital infrastructure worldwide
          </p>
        </div>
      </div>

      <Tabs defaultValue="search" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="search">Search & Discovery</TabsTrigger>
          <TabsTrigger value="results">Results & Analysis</TabsTrigger>
          <TabsTrigger value="monitoring">Asset Monitoring</TabsTrigger>
          <TabsTrigger value="intelligence">Threat Intel</TabsTrigger>
          <TabsTrigger value="api">API & Integration</TabsTrigger>
        </TabsList>

        <TabsContent value="search" className="space-y-4">
          <CyberSearchInterface />
        </TabsContent>

        <TabsContent value="results" className="space-y-4">
          <SearchResults />
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-4">
          <AssetMonitoring />
        </TabsContent>

        <TabsContent value="intelligence" className="space-y-4">
          <VulnerabilityAnalysis />
        </TabsContent>

        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Integration & Automation</CardTitle>
              <CardDescription>Integrate Salem Cyber Search with your security tools and workflows</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">REST API</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Programmatic access to search results and device data
                      </p>
                      <code className="text-xs bg-muted p-2 rounded block">
                        GET /api/v1/search?query=apache&country=US
                      </code>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">SIEM Integration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Connect with Splunk, QRadar, and other SIEM platforms
                      </p>
                      <code className="text-xs bg-muted p-2 rounded block">webhook: /api/v1/alerts/siem</code>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
