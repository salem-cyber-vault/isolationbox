"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface DorkingResult {
  id: string
  title: string
  url: string
  snippet: string
  type: 'file' | 'page' | 'vulnerability' | 'exposure'
}

const SAMPLE_RESULTS: DorkingResult[] = [
  {
    id: '1',
    title: 'Example Company - Employee Directory',
    url: 'https://example.com/directory.pdf',
    snippet: 'Employee contact information and organizational structure...',
    type: 'file'
  },
  {
    id: '2',
    title: 'Admin Panel - Configuration',
    url: 'https://example.com/admin/config.php',
    snippet: 'Administrative interface for system configuration...',
    type: 'exposure'
  }
]

export function DorkingInterface() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<DorkingResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = () => {
    setIsSearching(true)
    // Simulate search delay
    setTimeout(() => {
      setResults(SAMPLE_RESULTS)
      setIsSearching(false)
    }, 1500)
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'file': return 'bg-blue-500'
      case 'vulnerability': return 'bg-red-500'
      case 'exposure': return 'bg-orange-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter Google dork query (e.g., site:example.com filetype:pdf)"
          className="flex-1"
        />
        <Button onClick={handleSearch} disabled={isSearching}>
          {isSearching ? 'Searching...' : 'Search'}
        </Button>
      </div>

      {results.length > 0 && (
        <div className="space-y-3">
          {results.map((result) => (
            <div key={result.id} className="border rounded-lg p-3 hover:bg-accent">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-blue-600">{result.title}</h4>
                <Badge className={getTypeColor(result.type)}>
                  {result.type}
                </Badge>
              </div>
              <div className="text-sm text-green-600 mb-1">{result.url}</div>
              <p className="text-sm text-muted-foreground">{result.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}