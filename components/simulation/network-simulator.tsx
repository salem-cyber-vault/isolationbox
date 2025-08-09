"use client"

import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface NetworkNode {
  id: string
  type: 'server' | 'workstation' | 'router' | 'firewall' | 'database' | 'switch'
  position: { x: number; y: number }
  label: string
  status: 'online' | 'offline' | 'compromised' | 'vulnerable'
}

interface NetworkConnection {
  id: string
  from: string
  to: string
  type: 'ethernet' | 'wifi' | 'vpn' | 'attack'
  status: 'active' | 'inactive' | 'malicious'
}

const NODE_TYPES = {
  server: { icon: '🖥️', color: 'bg-blue-500' },
  workstation: { icon: '💻', color: 'bg-green-500' },
  router: { icon: '📡', color: 'bg-purple-500' },
  firewall: { icon: '🛡️', color: 'bg-red-500' },
  database: { icon: '🗄️', color: 'bg-yellow-500' },
  switch: { icon: '🔀', color: 'bg-gray-500' }
}

export function NetworkSimulator() {
  const [nodes, setNodes] = useState<NetworkNode[]>([
    { id: '1', type: 'firewall', position: { x: 100, y: 200 }, label: 'Corporate Firewall', status: 'online' },
    { id: '2', type: 'server', position: { x: 300, y: 100 }, label: 'Web Server', status: 'online' },
    { id: '3', type: 'database', position: { x: 300, y: 300 }, label: 'Database Server', status: 'online' },
    { id: '4', type: 'workstation', position: { x: 500, y: 150 }, label: 'Admin Workstation', status: 'online' },
    { id: '5', type: 'workstation', position: { x: 500, y: 250 }, label: 'User Workstation', status: 'online' }
  ])

  const [connections, setConnections] = useState<NetworkConnection[]>([
    { id: 'c1', from: '1', to: '2', type: 'ethernet', status: 'active' },
    { id: 'c2', from: '1', to: '3', type: 'ethernet', status: 'active' },
    { id: 'c3', from: '2', to: '4', type: 'ethernet', status: 'active' },
    { id: 'c4', from: '3', to: '5', type: 'ethernet', status: 'active' }
  ])

  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [draggedNode, setDraggedNode] = useState<string | null>(null)
  const [isSimulating, setIsSimulating] = useState(false)
  const svgRef = useRef<SVGSVGElement>(null)

  const handleNodeDrag = useCallback((nodeId: string, newPosition: { x: number; y: number }) => {
    setNodes(prev => prev.map(node => 
      node.id === nodeId ? { ...node, position: newPosition } : node
    ))
  }, [])

  const simulateAttack = useCallback(() => {
    setIsSimulating(true)
    
    // Simulate a multi-stage attack
    const attackSteps = [
      { nodeId: '4', status: 'compromised' as const, delay: 1000 },
      { nodeId: '2', status: 'vulnerable' as const, delay: 2000 },
      { nodeId: '3', status: 'compromised' as const, delay: 3000 }
    ]

    attackSteps.forEach(({ nodeId, status, delay }) => {
      setTimeout(() => {
        setNodes(prev => prev.map(node => 
          node.id === nodeId ? { ...node, status } : node
        ))
      }, delay)
    })

    // Add attack connection
    setTimeout(() => {
      setConnections(prev => [...prev, {
        id: 'attack1',
        from: '4',
        to: '2',
        type: 'attack',
        status: 'malicious'
      }])
    }, 1500)

    setTimeout(() => {
      setIsSimulating(false)
    }, 4000)
  }, [])

  const resetSimulation = useCallback(() => {
    setNodes(prev => prev.map(node => ({ ...node, status: 'online' })))
    setConnections(prev => prev.filter(conn => conn.type !== 'attack'))
    setIsSimulating(false)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'border-green-500'
      case 'offline': return 'border-gray-500'
      case 'compromised': return 'border-red-500 animate-pulse'
      case 'vulnerable': return 'border-yellow-500'
      default: return 'border-gray-300'
    }
  }

  const getConnectionColor = (type: string, status: string) => {
    if (type === 'attack') return '#ef4444'
    if (status === 'malicious') return '#ef4444'
    return '#3b82f6'
  }

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex items-center gap-2 mb-4">
        <Button 
          onClick={simulateAttack} 
          disabled={isSimulating}
          variant="destructive"
          size="sm"
        >
          {isSimulating ? 'Simulating...' : 'Simulate Attack'}
        </Button>
        <Button onClick={resetSimulation} variant="outline" size="sm">
          Reset
        </Button>
        {selectedNode && (
          <Badge variant="secondary">
            Selected: {nodes.find(n => n.id === selectedNode)?.label}
          </Badge>
        )}
      </div>

      {/* Network Diagram */}
      <div className="border rounded-lg bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
        <svg
          ref={svgRef}
          width="100%"
          height="400"
          className="block"
          viewBox="0 0 600 400"
        >
          {/* Grid background */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Connections */}
          {connections.map(conn => {
            const fromNode = nodes.find(n => n.id === conn.from)
            const toNode = nodes.find(n => n.id === conn.to)
            if (!fromNode || !toNode) return null

            return (
              <line
                key={conn.id}
                x1={fromNode.position.x + 30}
                y1={fromNode.position.y + 30}
                x2={toNode.position.x + 30}
                y2={toNode.position.y + 30}
                stroke={getConnectionColor(conn.type, conn.status)}
                strokeWidth={conn.type === 'attack' ? 3 : 2}
                strokeDasharray={conn.type === 'attack' ? '5,5' : 'none'}
                className={conn.type === 'attack' ? 'animate-pulse' : ''}
              />
            )
          })}

          {/* Nodes */}
          {nodes.map(node => (
            <g key={node.id}>
              <rect
                x={node.position.x}
                y={node.position.y}
                width="60"
                height="60"
                rx="8"
                className={`fill-white dark:fill-slate-800 stroke-2 cursor-move ${getStatusColor(node.status)}`}
                onClick={() => setSelectedNode(node.id)}
                onMouseDown={() => setDraggedNode(node.id)}
              />
              <text
                x={node.position.x + 30}
                y={node.position.y + 35}
                textAnchor="middle"
                fontSize="20"
              >
                {NODE_TYPES[node.type].icon}
              </text>
              <text
                x={node.position.x + 30}
                y={node.position.y + 80}
                textAnchor="middle"
                fontSize="10"
                className="fill-current text-sm"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Node Details */}
      {selectedNode && (
        <Card>
          <CardHeader>
            <CardTitle>Node Details</CardTitle>
            <CardDescription>
              {nodes.find(n => n.id === selectedNode)?.label}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium">Type</div>
                <div className="text-muted-foreground">
                  {nodes.find(n => n.id === selectedNode)?.type}
                </div>
              </div>
              <div>
                <div className="font-medium">Status</div>
                <div className="text-muted-foreground">
                  {nodes.find(n => n.id === selectedNode)?.status}
                </div>
              </div>
              <div>
                <div className="font-medium">IP Address</div>
                <div className="text-muted-foreground font-mono">192.168.1.{selectedNode}0</div>
              </div>
              <div>
                <div className="font-medium">Services</div>
                <div className="text-muted-foreground">HTTP, SSH, RDP</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Legend */}
      <Card>
        <CardHeader>
          <CardTitle>Legend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="space-y-2">
              <div className="font-medium">Node Types</div>
              {Object.entries(NODE_TYPES).map(([type, config]) => (
                <div key={type} className="flex items-center gap-2">
                  <span>{config.icon}</span>
                  <span className="capitalize">{type}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="font-medium">Status Colors</div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border-2 border-green-500 rounded"></div>
                <span>Online</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border-2 border-yellow-500 rounded"></div>
                <span>Vulnerable</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border-2 border-red-500 rounded"></div>
                <span>Compromised</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}