import type { Metadata } from "next"
import { ProjectGallery, ProjectCategories, FeaturedProjects, ProjectTemplates } from "@/components/projects/project-gallery"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Project Explorer - Salem Cyber Vault",
  description: "Explore cybersecurity projects, templates, and hands-on learning resources",
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Project Explorer</h1>
          <p className="text-muted-foreground">
            Discover, explore, and launch cybersecurity projects and learning templates
          </p>
        </div>
      </div>

      <Tabs defaultValue="gallery" className="space-y-4">
        <TabsList>
          <TabsTrigger value="gallery">Project Gallery</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
          <TabsTrigger value="challenges">Code Challenges</TabsTrigger>
        </TabsList>

        <TabsContent value="gallery" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-4">
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Featured Projects</CardTitle>
                <CardDescription>
                  Explore our curated collection of cybersecurity projects and demonstrations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FeaturedProjects />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
                <CardDescription>Browse by topic</CardDescription>
              </CardHeader>
              <CardContent>
                <ProjectCategories />
              </CardContent>
            </Card>
          </div>
          
          <ProjectGallery />
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <ProjectTemplates />
        </TabsContent>

        <TabsContent value="tutorials" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Tutorials</CardTitle>
              <CardDescription>
                Step-by-step guides for cybersecurity tools and techniques
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">🔒</span>
                    </div>
                    <h4 className="font-medium">Password Security</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Learn password best practices and implement secure authentication
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>⏱️ 15 mins</span>
                    <span>•</span>
                    <span>Beginner</span>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">🛡️</span>
                    </div>
                    <h4 className="font-medium">Network Security</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Configure firewalls and implement network security measures
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>⏱️ 30 mins</span>
                    <span>•</span>
                    <span>Intermediate</span>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">🔍</span>
                    </div>
                    <h4 className="font-medium">Penetration Testing</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Introduction to ethical hacking and vulnerability assessment
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>⏱️ 45 mins</span>
                    <span>•</span>
                    <span>Advanced</span>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">📊</span>
                    </div>
                    <h4 className="font-medium">Incident Response</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Handle security incidents and coordinate response efforts
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>⏱️ 25 mins</span>
                    <span>•</span>
                    <span>Intermediate</span>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">🔐</span>
                    </div>
                    <h4 className="font-medium">Cryptography</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Understand encryption, hashing, and digital signatures
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>⏱️ 35 mins</span>
                    <span>•</span>
                    <span>Advanced</span>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">☁️</span>
                    </div>
                    <h4 className="font-medium">Cloud Security</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Secure cloud environments and implement best practices
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>⏱️ 40 mins</span>
                    <span>•</span>
                    <span>Intermediate</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="challenges" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Code Challenges</CardTitle>
              <CardDescription>
                Practice cybersecurity programming skills with hands-on coding exercises
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Implement Caesar Cipher</h4>
                    <span className="text-sm text-green-600 font-medium">Easy</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Create a function to encrypt and decrypt text using the Caesar cipher algorithm.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Python, JavaScript, Java</span>
                    <span>•</span>
                    <span>147 solved</span>
                    <span>•</span>
                    <span>⭐ 4.8</span>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Password Strength Validator</h4>
                    <span className="text-sm text-yellow-600 font-medium">Medium</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Build a comprehensive password validator that checks for complexity requirements.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>All languages</span>
                    <span>•</span>
                    <span>89 solved</span>
                    <span>•</span>
                    <span>⭐ 4.6</span>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Network Packet Parser</h4>
                    <span className="text-sm text-red-600 font-medium">Hard</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Parse and analyze network packets to extract protocol information and detect anomalies.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Python, C++</span>
                    <span>•</span>
                    <span>23 solved</span>
                    <span>•</span>
                    <span>⭐ 4.9</span>
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