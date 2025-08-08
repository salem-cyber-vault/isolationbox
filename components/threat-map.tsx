"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface Attack {
  id: number
  sourceX: number
  sourceY: number
  targetX: number
  targetY: number
  color: string
  duration: number
  type: string
  sourceCountry: string
  targetCountry: string
  severity: string
  educationalLinks: {
    howItWorks: string
    prevention: string
    mitreAttack: string
    cisaAlert?: string
  }
  attackSteps: string[]
  indicators: string[]
  mitigation: string[]
}

export function ThreatMap() {
  const [attacks, setAttacks] = useState<Attack[]>([])
  const [selectedAttack, setSelectedAttack] = useState<Attack | null>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  const attackTypes = ["DDoS", "Malware", "Phishing", "Brute Force", "SQL Injection", "XSS"]
  const countries = ["Russia", "China", "North Korea", "Iran", "Brazil", "Romania", "Ukraine", "India"]
  const severities = ["Low", "Medium", "High", "Critical"]

  // Generate random attacks
  useEffect(() => {
    const generateAttack = (): Attack => {
      const id = Date.now() + Math.random()
      const sourceX = Math.random() * 100
      const sourceY = Math.random() * 100
      const targetX = Math.random() * 100
      const targetY = Math.random() * 100
      const duration = Math.random() * 3 + 2

      const colors = ["#f97316", "#ef4444", "#8b5cf6", "#ec4899"]
      const color = colors[Math.floor(Math.random() * colors.length)]

      return {
        id,
        sourceX,
        sourceY,
        targetX,
        targetY,
        color,
        duration,
        type: attackTypes[Math.floor(Math.random() * attackTypes.length)],
        sourceCountry: countries[Math.floor(Math.random() * countries.length)],
        targetCountry: "United States",
        severity: severities[Math.floor(Math.random() * severities.length)],
        educationalLinks: {
          howItWorks: `https://www.cisa.gov/news-events/cybersecurity-advisories`,
          prevention: `https://www.nist.gov/cyberframework`,
          mitreAttack: `https://attack.mitre.org/techniques/`,
          cisaAlert: `https://www.cisa.gov/known-exploited-vulnerabilities-catalog`,
        },
        attackSteps: [
          "Initial reconnaissance and target identification",
          "Vulnerability scanning and exploitation",
          "Payload delivery and execution",
          "Persistence establishment",
          "Data exfiltration or system compromise",
        ],
        indicators: [
          "Unusual network traffic patterns",
          "Unexpected system processes",
          "Modified system files",
          "Suspicious registry changes",
        ],
        mitigation: [
          "Apply latest security patches",
          "Enable network monitoring",
          "Implement access controls",
          "Regular security audits",
        ],
      }
    }

    // Initial attacks
    setAttacks(Array.from({ length: 8 }, () => generateAttack()))

    // Add new attacks periodically
    const interval = setInterval(() => {
      setAttacks((prev) => {
        const filtered = prev.length > 25 ? prev.slice(prev.length - 25) : prev
        return [...filtered, generateAttack()]
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="relative w-full h-[300px] bg-background rounded-md overflow-hidden cursor-pointer hover:bg-accent/5 transition-colors"
          ref={mapRef}
        >
          {/* World map background */}
          <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=300&width=600')] bg-no-repeat bg-center bg-contain" />

          {/* Attack lines */}
          <svg className="absolute inset-0 w-full h-full">
            {attacks.map((attack) => (
              <AttackLine key={attack.id} attack={attack} onClick={() => setSelectedAttack(attack)} />
            ))}
          </svg>

          {/* Location dots */}
          {attacks.map((attack) => (
            <React.Fragment key={`dots-${attack.id}`}>
              <motion.div
                className="absolute h-3 w-3 rounded-full cursor-pointer hover:scale-150 transition-transform"
                style={{
                  left: `${attack.sourceX}%`,
                  top: `${attack.sourceY}%`,
                  backgroundColor: attack.color,
                  boxShadow: `0 0 10px ${attack.color}`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedAttack(attack)}
                title={`${attack.type} attack from ${attack.sourceCountry}`}
              />
              <motion.div
                className="absolute h-3 w-3 rounded-full cursor-pointer hover:scale-150 transition-transform"
                style={{
                  left: `${attack.targetX}%`,
                  top: `${attack.targetY}%`,
                  backgroundColor: attack.color,
                  boxShadow: `0 0 10px ${attack.color}`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: attack.duration }}
                onClick={() => setSelectedAttack(attack)}
                title={`Target: ${attack.targetCountry}`}
              />
            </React.Fragment>
          ))}

          {/* Stats overlay */}
          <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-lg p-2">
            <div className="text-xs font-medium">Live Attacks: {attacks.length}</div>
            <div className="text-xs text-muted-foreground">Click for details</div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Global Threat Map - Salem Cyber Vault</DialogTitle>
          <DialogDescription>Real-time visualization of cyber attacks detected across the globe</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-sm">Active Attacks</h4>
              <p className="text-2xl font-bold text-orange-500">{attacks.length}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm">Most Common Attack</h4>
              <p className="text-sm">DDoS (32%)</p>
            </div>
          </div>

          {selectedAttack && (
            <div className="border rounded-lg p-4 space-y-4">
              <h4 className="font-medium">Interactive Attack Analysis</h4>

              <Tabs defaultValue="steps">
                <TabsList>
                  <TabsTrigger value="steps">Attack Steps</TabsTrigger>
                  <TabsTrigger value="indicators">Indicators</TabsTrigger>
                  <TabsTrigger value="mitigation">Mitigation</TabsTrigger>
                  <TabsTrigger value="learn">Learn More</TabsTrigger>
                </TabsList>

                <TabsContent value="steps" className="space-y-2">
                  {selectedAttack.attackSteps?.map((step, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Badge variant="outline">{i + 1}</Badge>
                      <span className="text-sm">{step}</span>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="learn" className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={selectedAttack.educationalLinks?.howItWorks} target="_blank" rel="noreferrer">
                        How It Works <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={selectedAttack.educationalLinks?.prevention} target="_blank" rel="noreferrer">
                        Prevention Guide <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}

          <div className="text-xs text-muted-foreground">
            Click on attack points or lines to see detailed information about specific threats.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

interface AttackLineProps {
  attack: Attack
  onClick: () => void
}

function AttackLine({ attack, onClick }: AttackLineProps) {
  return (
    <motion.line
      x1={`${attack.sourceX}%`}
      y1={`${attack.sourceY}%`}
      x2={`${attack.sourceX}%`}
      y2={`${attack.sourceY}%`}
      stroke={attack.color}
      strokeWidth="2"
      strokeDasharray="4,4"
      className="cursor-pointer hover:stroke-width-4 transition-all"
      initial={{ x2: `${attack.sourceX}%`, y2: `${attack.sourceY}%`, opacity: 0 }}
      animate={{
        x2: `${attack.targetX}%`,
        y2: `${attack.targetY}%`,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: attack.duration,
        times: [0, 0.1, 0.9, 1],
      }}
      onClick={onClick}
      title={`${attack.type} attack - Click for details`}
    />
  )
}
