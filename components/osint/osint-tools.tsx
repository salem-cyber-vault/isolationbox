"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface OSINTTool {
  id: string
  name: string
  description: string
  category: string
  url?: string
  features: string[]
}

const OSINT_TOOLS: OSINTTool[] = [
  {
    id: '1',
    name: 'Shodan',
    description: 'Search engine for Internet-connected devices',
    category: 'Network Intelligence',
    features: ['Device discovery', 'Vulnerability scanning', 'Geographic mapping', 'Historical data']
  },
  {
    id: '2',
    name: 'TheHarvester',
    description: 'Information gathering tool for email addresses, subdomains, and more',
    category: 'Information Gathering',
    features: ['Email enumeration', 'Subdomain discovery', 'Social media scraping', 'DNS records']
  },
  {
    id: '3',
    name: 'Maltego',
    description: 'Link analysis and data visualization platform',
    category: 'Data Analysis',
    features: ['Relationship mapping', 'Entity discovery', 'Social network analysis', 'Threat intelligence']
  },
  {
    id: '4',
    name: 'WHOIS Lookup',
    description: 'Domain registration information retrieval',
    category: 'Domain Intelligence',
    features: ['Registrar info', 'Contact details', 'Registration dates', 'DNS records']
  }
]

export function OSINTTools() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {OSINT_TOOLS.map((tool) => (
          <Card key={tool.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{tool.name}</CardTitle>
                <Badge variant="outline">{tool.category}</Badge>
              </div>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="text-sm space-y-1">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full">
                  Launch Tool
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}