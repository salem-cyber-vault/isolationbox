"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  description: string
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  technologies: string[]
  featured: boolean
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Secure Web Application',
    description: 'Build a secure web application with proper authentication and authorization',
    category: 'Web Security',
    difficulty: 'intermediate',
    technologies: ['React', 'Node.js', 'JWT', 'HTTPS'],
    featured: true
  },
  {
    id: '2',
    title: 'Network Security Monitor',
    description: 'Create a network monitoring tool to detect suspicious activity',
    category: 'Network Security',
    difficulty: 'advanced',
    technologies: ['Python', 'Scapy', 'Wireshark', 'SQL'],
    featured: true
  },
  {
    id: '3',
    title: 'Password Manager',
    description: 'Develop a secure password manager with encryption',
    category: 'Cryptography',
    difficulty: 'beginner',
    technologies: ['Python', 'AES', 'PBKDF2', 'GUI'],
    featured: false
  }
]

export function ProjectGallery() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((project) => (
        <Card key={project.id}>
          <CardHeader>
            <CardTitle className="text-lg">{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline">{project.category}</Badge>
                <Badge variant={project.difficulty === 'beginner' ? 'secondary' : 'default'}>
                  {project.difficulty}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <Button className="w-full">Explore Project</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function FeaturedProjects() {
  const featured = PROJECTS.filter(p => p.featured)
  
  return (
    <div className="space-y-4">
      {featured.map((project) => (
        <div key={project.id} className="border rounded-lg p-4">
          <h4 className="font-medium">{project.title}</h4>
          <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
        </div>
      ))}
    </div>
  )
}

export function ProjectCategories() {
  const categories = ['Web Security', 'Network Security', 'Cryptography', 'Malware Analysis']
  
  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <Button key={category} variant="outline" className="w-full justify-start">
          {category}
        </Button>
      ))}
    </div>
  )
}

export function ProjectTemplates() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Templates</CardTitle>
        <CardDescription>Ready-to-use templates for cybersecurity projects</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center text-muted-foreground">
          Project templates will be displayed here
        </div>
      </CardContent>
    </Card>
  )
}