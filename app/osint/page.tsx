import type { Metadata } from "next"
import { OSINTTools } from "@/components/osint/osint-tools"
import { DorkingInterface } from "@/components/osint/dorking-interface"
import { SafetyOverlay, ReconResults } from "@/components/osint/safety-overlay"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "OSINT & Reconnaissance - Salem Cyber Vault",
  description: "Open Source Intelligence gathering and reconnaissance tools for cybersecurity education",
}

export default function OSINTPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">OSINT & Reconnaissance</h1>
          <p className="text-muted-foreground">
            Open Source Intelligence gathering tools and techniques for cybersecurity research
          </p>
        </div>
        <SafetyOverlay />
      </div>

      <Tabs defaultValue="tools" className="space-y-4">
        <TabsList>
          <TabsTrigger value="tools">OSINT Tools</TabsTrigger>
          <TabsTrigger value="dorking">Google Dorking</TabsTrigger>
          <TabsTrigger value="domain">Domain Analysis</TabsTrigger>
          <TabsTrigger value="social">Social Media Intel</TabsTrigger>
        </TabsList>

        <TabsContent value="tools" className="space-y-4">
          <OSINTTools />
        </TabsContent>

        <TabsContent value="dorking" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-4">
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Google Dorking Interface</CardTitle>
                <CardDescription>
                  Learn and practice advanced Google search operators for cybersecurity research
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DorkingInterface />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Common Dorks</CardTitle>
                <CardDescription>Popular search operators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <button className="w-full text-left p-2 rounded-lg border hover:bg-accent transition-colors">
                    <div className="font-mono text-xs">site:example.com</div>
                    <div className="text-xs text-muted-foreground">Search specific site</div>
                  </button>
                  <button className="w-full text-left p-2 rounded-lg border hover:bg-accent transition-colors">
                    <div className="font-mono text-xs">filetype:pdf</div>
                    <div className="text-xs text-muted-foreground">Find specific file types</div>
                  </button>
                  <button className="w-full text-left p-2 rounded-lg border hover:bg-accent transition-colors">
                    <div className="font-mono text-xs">intitle:"admin panel"</div>
                    <div className="text-xs text-muted-foreground">Search in page titles</div>
                  </button>
                  <button className="w-full text-left p-2 rounded-lg border hover:bg-accent transition-colors">
                    <div className="font-mono text-xs">inurl:"/admin"</div>
                    <div className="text-xs text-muted-foreground">Search in URLs</div>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="domain" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Domain Intelligence Analysis</CardTitle>
              <CardDescription>
                Comprehensive domain analysis and intelligence gathering
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Domain Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Domain:</span>
                        <span className="font-mono">example.com</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Registrar:</span>
                        <span>Example Registrar Inc.</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Created:</span>
                        <span>2010-03-15</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Expires:</span>
                        <span>2025-03-15</span>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">DNS Records</h4>
                    <div className="space-y-1 text-sm font-mono">
                      <div>A: 192.0.2.1</div>
                      <div>MX: mail.example.com</div>
                      <div>NS: ns1.example.com</div>
                      <div>TXT: v=spf1 include:_spf.google.com ~all</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Subdomains Discovered</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="font-mono">www.example.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="font-mono">api.example.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="font-mono">admin.example.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="font-mono">dev.example.com</span>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Security Assessment</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">SSL Certificate Valid</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm">SPF Record Present</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">DMARC Policy Missing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Intelligence</CardTitle>
              <CardDescription>
                Gather intelligence from social media platforms (Educational purposes only)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">LinkedIn Research</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Company structure and employee information
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>• Organization charts</div>
                    <div>• Employee roles & contacts</div>
                    <div>• Technology stack insights</div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Twitter/X Monitoring</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Real-time updates and sentiment analysis
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>• Incident disclosures</div>
                    <div>• Public announcements</div>
                    <div>• Security discussions</div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">GitHub Intelligence</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Code repositories and potential exposures
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>• Leaked credentials</div>
                    <div>• Configuration files</div>
                    <div>• Internal tools & scripts</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-600">⚠️</span>
                  <span className="font-medium text-yellow-800 dark:text-yellow-200">Ethical Guidelines</span>
                </div>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  All OSINT activities should be conducted ethically and legally. Respect privacy, 
                  follow platform terms of service, and only use information for defensive security purposes.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}