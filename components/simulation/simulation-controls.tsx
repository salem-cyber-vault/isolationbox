"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface SimulationConfig {
  attackType: string
  intensity: number
  duration: number
  targetSystem: string
  enableLogging: boolean
  realTimeMode: boolean
}

export function SimulationControls() {
  const [config, setConfig] = useState<SimulationConfig>({
    attackType: 'port-scan',
    intensity: 50,
    duration: 60,
    targetSystem: 'web-server',
    enableLogging: true,
    realTimeMode: false
  })

  const [isRunning, setIsRunning] = useState(false)
  const [currentStep, setCurrentStep] = useState('')

  const attackTypes = [
    { value: 'port-scan', label: 'Port Scanning', description: 'Network reconnaissance' },
    { value: 'dos', label: 'DoS Attack', description: 'Denial of Service' },
    { value: 'sql-injection', label: 'SQL Injection', description: 'Database exploitation' },
    { value: 'xss', label: 'Cross-Site Scripting', description: 'Web application attack' },
    { value: 'phishing', label: 'Phishing Campaign', description: 'Social engineering' },
    { value: 'malware', label: 'Malware Deployment', description: 'Payload delivery' }
  ]

  const targetSystems = [
    { value: 'web-server', label: 'Web Server' },
    { value: 'database', label: 'Database Server' },
    { value: 'workstation', label: 'User Workstation' },
    { value: 'firewall', label: 'Firewall' },
    { value: 'router', label: 'Network Router' }
  ]

  const startSimulation = () => {
    setIsRunning(true)
    setCurrentStep('Initializing attack simulation...')

    const steps = [
      'Preparing attack vectors...',
      'Establishing target connection...',
      'Launching attack payload...',
      'Monitoring system response...',
      'Analyzing attack effectiveness...',
      'Generating simulation report...'
    ]

    steps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(step)
        if (index === steps.length - 1) {
          setTimeout(() => {
            setIsRunning(false)
            setCurrentStep('')
          }, 2000)
        }
      }, (index + 1) * 2000)
    })
  }

  const stopSimulation = () => {
    setIsRunning(false)
    setCurrentStep('')
  }

  return (
    <div className="space-y-6">
      {/* Attack Type Selection */}
      <div className="space-y-3">
        <Label htmlFor="attack-type">Attack Type</Label>
        <Select
          value={config.attackType}
          onValueChange={(value) => setConfig(prev => ({ ...prev, attackType: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select attack type" />
          </SelectTrigger>
          <SelectContent>
            {attackTypes.map(type => (
              <SelectItem key={type.value} value={type.value}>
                <div>
                  <div className="font-medium">{type.label}</div>
                  <div className="text-xs text-muted-foreground">{type.description}</div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Target System */}
      <div className="space-y-3">
        <Label htmlFor="target-system">Target System</Label>
        <Select
          value={config.targetSystem}
          onValueChange={(value) => setConfig(prev => ({ ...prev, targetSystem: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select target" />
          </SelectTrigger>
          <SelectContent>
            {targetSystems.map(system => (
              <SelectItem key={system.value} value={system.value}>
                {system.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Attack Intensity */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="intensity">Attack Intensity</Label>
          <Badge variant="outline">{config.intensity}%</Badge>
        </div>
        <Slider
          value={[config.intensity]}
          onValueChange={(value) => setConfig(prev => ({ ...prev, intensity: value[0] }))}
          max={100}
          step={10}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Low</span>
          <span>Medium</span>
          <span>High</span>
        </div>
      </div>

      {/* Duration */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="duration">Duration</Label>
          <Badge variant="outline">{config.duration}s</Badge>
        </div>
        <Slider
          value={[config.duration]}
          onValueChange={(value) => setConfig(prev => ({ ...prev, duration: value[0] }))}
          min={30}
          max={300}
          step={30}
          className="w-full"
        />
      </div>

      {/* Options */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch
            id="logging"
            checked={config.enableLogging}
            onCheckedChange={(checked) => setConfig(prev => ({ ...prev, enableLogging: checked }))}
          />
          <Label htmlFor="logging">Enable Detailed Logging</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch
            id="realtime"
            checked={config.realTimeMode}
            onCheckedChange={(checked) => setConfig(prev => ({ ...prev, realTimeMode: checked }))}
          />
          <Label htmlFor="realtime">Real-time Mode</Label>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="space-y-3">
        {!isRunning ? (
          <Button onClick={startSimulation} className="w-full" size="lg">
            Start Simulation
          </Button>
        ) : (
          <Button onClick={stopSimulation} variant="destructive" className="w-full" size="lg">
            Stop Simulation
          </Button>
        )}
        
        <Button variant="outline" className="w-full" disabled={isRunning}>
          Save Configuration
        </Button>
      </div>

      {/* Simulation Status */}
      {isRunning && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              Simulation Running
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-sm font-medium">Current Status:</div>
              <div className="text-sm text-muted-foreground">{currentStep}</div>
              <div className="w-full bg-secondary rounded-full h-2 mt-2">
                <div className="bg-red-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Pre-configured attack scenarios</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <Button variant="outline" size="sm" className="justify-start">
              🔍 Basic Port Scan
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              💥 DDoS Simulation
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              🎣 Phishing Test
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              🦠 Malware Analysis
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Simulation History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Simulations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center p-2 border rounded">
              <span>Port Scan - Web Server</span>
              <Badge variant="secondary">Completed</Badge>
            </div>
            <div className="flex justify-between items-center p-2 border rounded">
              <span>SQL Injection - Database</span>
              <Badge variant="destructive">Failed</Badge>
            </div>
            <div className="flex justify-between items-center p-2 border rounded">
              <span>XSS - Web Application</span>
              <Badge variant="secondary">Completed</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}