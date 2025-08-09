"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface AttackScenario {
  id: string
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
  steps: AttackStep[]
  completed: boolean
}

interface AttackStep {
  id: string
  title: string
  description: string
  action: string
  expected: string
  completed: boolean
}

const ATTACK_SCENARIOS: AttackScenario[] = [
  {
    id: 'phishing-email',
    title: 'Phishing Email Campaign',
    description: 'Simulate a phishing attack to understand how attackers gain initial access',
    difficulty: 'easy',
    category: 'Social Engineering',
    completed: false,
    steps: [
      {
        id: 'recon',
        title: 'Reconnaissance',
        description: 'Gather information about the target organization and employees',
        action: 'Research company structure and identify key personnel',
        expected: 'List of potential targets with email addresses',
        completed: false
      },
      {
        id: 'craft-email',
        title: 'Craft Phishing Email',
        description: 'Create a convincing phishing email that appears legitimate',
        action: 'Design email template mimicking trusted source',
        expected: 'Professional-looking phishing email',
        completed: false
      },
      {
        id: 'setup-landing',
        title: 'Setup Landing Page',
        description: 'Create a fake login page to capture credentials',
        action: 'Clone legitimate login page and host on similar domain',
        expected: 'Functional credential harvesting page',
        completed: false
      },
      {
        id: 'analyze-results',
        title: 'Analyze Results',
        description: 'Review the effectiveness of the phishing campaign',
        action: 'Track email opens, clicks, and credential submissions',
        expected: 'Campaign metrics and success rate',
        completed: false
      }
    ]
  },
  {
    id: 'sql-injection',
    title: 'SQL Injection Attack',
    description: 'Exploit a vulnerable web application using SQL injection techniques',
    difficulty: 'medium',
    category: 'Web Application',
    completed: false,
    steps: [
      {
        id: 'identify-target',
        title: 'Identify Vulnerable Input',
        description: 'Find user input fields that may be vulnerable to SQL injection',
        action: 'Test various input fields for SQL injection vulnerabilities',
        expected: 'Identified vulnerable parameter',
        completed: false
      },
      {
        id: 'test-injection',
        title: 'Test Basic Injection',
        description: 'Confirm SQL injection vulnerability with basic payloads',
        action: 'Use simple SQL injection payloads to test vulnerability',
        expected: 'Confirmed SQL injection vulnerability',
        completed: false
      },
      {
        id: 'enumerate-db',
        title: 'Database Enumeration',
        description: 'Extract database structure and sensitive information',
        action: 'Use UNION queries to extract database schema',
        expected: 'Database tables and column information',
        completed: false
      },
      {
        id: 'extract-data',
        title: 'Data Extraction',
        description: 'Extract sensitive data from the database',
        action: 'Query sensitive tables to extract user data',
        expected: 'Extracted sensitive information',
        completed: false
      }
    ]
  },
  {
    id: 'lateral-movement',
    title: 'Lateral Movement',
    description: 'Move through a network after initial compromise',
    difficulty: 'hard',
    category: 'Post-Exploitation',
    completed: false,
    steps: [
      {
        id: 'establish-foothold',
        title: 'Establish Foothold',
        description: 'Gain persistent access to the initial compromised system',
        action: 'Install backdoor and establish command and control',
        expected: 'Persistent access to compromised system',
        completed: false
      },
      {
        id: 'privilege-escalation',
        title: 'Privilege Escalation',
        description: 'Escalate privileges on the compromised system',
        action: 'Exploit local vulnerabilities or misconfigurations',
        expected: 'Administrative privileges obtained',
        completed: false
      },
      {
        id: 'network-discovery',
        title: 'Network Discovery',
        description: 'Discover additional systems and services on the network',
        action: 'Perform network scanning and service enumeration',
        expected: 'Network topology and available services mapped',
        completed: false
      },
      {
        id: 'credential-harvesting',
        title: 'Credential Harvesting',
        description: 'Extract credentials from the compromised system',
        action: 'Dump password hashes and extract cached credentials',
        expected: 'Additional user credentials obtained',
        completed: false
      },
      {
        id: 'lateral-spread',
        title: 'Lateral Spread',
        description: 'Use harvested credentials to access additional systems',
        action: 'Authenticate to other systems using stolen credentials',
        expected: 'Access to multiple network systems',
        completed: false
      }
    ]
  }
]

export function AttackScenarios() {
  const [selectedScenario, setSelectedScenario] = useState<AttackScenario | null>(null)
  const [scenarios, setScenarios] = useState(ATTACK_SCENARIOS)

  const startScenario = (scenarioId: string) => {
    const scenario = scenarios.find(s => s.id === scenarioId)
    if (scenario) {
      setSelectedScenario({ ...scenario })
    }
  }

  const completeStep = (stepId: string) => {
    if (!selectedScenario) return
    
    const updatedScenario = {
      ...selectedScenario,
      steps: selectedScenario.steps.map(step =>
        step.id === stepId ? { ...step, completed: true } : step
      )
    }
    
    setSelectedScenario(updatedScenario)
    
    // Update scenarios list
    setScenarios(prev => prev.map(s => 
      s.id === selectedScenario.id ? updatedScenario : s
    ))
  }

  const getProgress = (scenario: AttackScenario) => {
    const completedSteps = scenario.steps.filter(step => step.completed).length
    return (completedSteps / scenario.steps.length) * 100
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500'
      case 'medium': return 'bg-yellow-500'
      case 'hard': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  if (selectedScenario) {
    return (
      <div className="space-y-6">
        {/* Scenario Header */}
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            onClick={() => setSelectedScenario(null)}
          >
            ← Back to Scenarios
          </Button>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{selectedScenario.title}</h2>
            <p className="text-muted-foreground">{selectedScenario.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={getDifficultyColor(selectedScenario.difficulty)}>
              {selectedScenario.difficulty}
            </Badge>
            <Badge variant="outline">{selectedScenario.category}</Badge>
          </div>
        </div>

        {/* Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Progress</CardTitle>
            <CardDescription>
              {selectedScenario.steps.filter(s => s.completed).length} of {selectedScenario.steps.length} steps completed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={getProgress(selectedScenario)} className="mb-2" />
            <div className="text-sm text-muted-foreground">
              {getProgress(selectedScenario).toFixed(0)}% Complete
            </div>
          </CardContent>
        </Card>

        {/* Attack Steps */}
        <div className="space-y-4">
          {selectedScenario.steps.map((step, index) => (
            <Card key={step.id} className={step.completed ? 'border-green-500' : ''}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step.completed ? '✓' : index + 1}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </div>
                  {!step.completed && (
                    <Button onClick={() => completeStep(step.id)} size="sm">
                      Complete Step
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Action Required</h4>
                    <p className="text-sm text-muted-foreground">{step.action}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Expected Outcome</h4>
                    <p className="text-sm text-muted-foreground">{step.expected}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Resources */}
        <Card>
          <CardHeader>
            <CardTitle>Learning Resources</CardTitle>
            <CardDescription>Additional materials for this attack scenario</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Documentation</h4>
                <div className="space-y-1 text-sm">
                  <div>📖 OWASP Testing Guide</div>
                  <div>📖 NIST Cybersecurity Framework</div>
                  <div>📖 MITRE ATT&CK Framework</div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Tools & Techniques</h4>
                <div className="space-y-1 text-sm">
                  <div>🛠️ Metasploit Framework</div>
                  <div>🛠️ Burp Suite Professional</div>
                  <div>🛠️ Nmap Network Scanner</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Attack Scenarios</h2>
        <Badge variant="secondary">
          {scenarios.filter(s => s.completed).length} of {scenarios.length} completed
        </Badge>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Scenarios</TabsTrigger>
          <TabsTrigger value="social">Social Engineering</TabsTrigger>
          <TabsTrigger value="web">Web Application</TabsTrigger>
          <TabsTrigger value="network">Network</TabsTrigger>
          <TabsTrigger value="post-exploit">Post-Exploitation</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {scenarios.map(scenario => (
              <Card key={scenario.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{scenario.title}</CardTitle>
                    <Badge className={getDifficultyColor(scenario.difficulty)}>
                      {scenario.difficulty}
                    </Badge>
                  </div>
                  <CardDescription>{scenario.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Category</span>
                      <span>{scenario.category}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span>{scenario.steps.filter(s => s.completed).length}/{scenario.steps.length}</span>
                      </div>
                      <Progress value={getProgress(scenario)} className="h-2" />
                    </div>
                    <Button 
                      onClick={() => startScenario(scenario.id)}
                      className="w-full"
                      variant={scenario.completed ? "outline" : "default"}
                    >
                      {scenario.completed ? 'Review' : 'Start Scenario'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="social" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {scenarios.filter(s => s.category === 'Social Engineering').map(scenario => (
              <Card key={scenario.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                {/* Same card content as above */}
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Add other category tabs as needed */}
      </Tabs>
    </div>
  )
}