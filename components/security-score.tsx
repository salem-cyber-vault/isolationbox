"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function SecurityScore() {
  const [score, setScore] = useState(0)
  const targetScore = 78

  useEffect(() => {
    const timer = setTimeout(() => {
      setScore(targetScore)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const getScoreColor = () => {
    if (score >= 80) return "text-green-500"
    if (score >= 60) return "text-yellow-500"
    if (score >= 40) return "text-orange-500"
    return "text-red-500"
  }

  const getProgressColor = () => {
    if (score >= 80) return "bg-green-500"
    if (score >= 60) return "bg-yellow-500"
    if (score >= 40) return "bg-orange-500"
    return "bg-red-500"
  }

  const scoreDetails = [
    {
      category: "Firewall Protection",
      score: 95,
      status: "Excellent",
      learnMore: "https://www.cisa.gov/firewall-best-practices",
      description: "Your firewall is properly configured and blocking threats effectively.",
    },
    {
      category: "Antivirus Coverage",
      score: 88,
      status: "Good",
      learnMore: "https://www.avast.com/en-us/guides/antivirus-protection",
      description: "Your antivirus software is up-to-date and covers most threats.",
    },
    {
      category: "System Updates",
      score: 72,
      status: "Fair",
      learnMore: "https://www.microsoft.com/en-us/windows/update",
      description: "Regular system updates are important for security patches.",
    },
    {
      category: "Access Controls",
      score: 65,
      status: "Needs Improvement",
      learnMore: "https://www.cisco.com/c/en/us/products/security/secure-access-control/index.html",
      description: "Implementing strong access controls can prevent unauthorized access.",
    },
    {
      category: "Network Security",
      score: 80,
      status: "Good",
      learnMore: "https://www.cloudflare.com/learning/ddos/glossary/network-security/",
      description: "Your network security measures are effective but could be enhanced.",
    },
    {
      category: "Data Encryption",
      score: 90,
      status: "Excellent",
      learnMore: "https://www.ibm.com/security/data-encryption",
      description: "Data encryption ensures that sensitive information is protected.",
    },
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Security Score</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-orange-500"
            >
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="relative h-24 w-24 flex items-center justify-center">
                <svg className="h-full w-full" viewBox="0 0 100 100">
                  <circle
                    className="text-muted-foreground/20"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                  <motion.circle
                    className={getProgressColor()}
                    strokeWidth="10"
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2 - (251.2 * score) / 100}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                    initial={{ strokeDashoffset: 251.2 }}
                    animate={{ strokeDashoffset: 251.2 - (251.2 * score) / 100 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className={`text-2xl font-bold ${getScoreColor()}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {score}
                  </motion.div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                {score >= 80 ? "Excellent" : score >= 60 ? "Good" : score >= 40 ? "Fair" : "Poor"}
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Security Score Breakdown</DialogTitle>
          <DialogDescription>Detailed analysis of your security posture across different categories</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {scoreDetails.map((detail, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{detail.category}</span>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className={
                      detail.score >= 80
                        ? "border-green-500 text-green-500"
                        : detail.score >= 60
                          ? "border-yellow-500 text-yellow-500"
                          : "border-orange-500 text-orange-500"
                    }
                  >
                    {detail.status}
                  </Badge>
                  <span className="text-sm font-bold">{detail.score}%</span>
                </div>
              </div>
              <Progress value={detail.score} className="h-2" />
            </div>
          ))}
        </div>
        <div className="space-y-2 border-t pt-4">
          <h4 className="font-medium text-sm">Educational Resources for Beginners</h4>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.cybersecurity.gov/" target="_blank" rel="noopener noreferrer">
                Cybersecurity Basics <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer">
                NIST Framework <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.sans.org/white-papers/" target="_blank" rel="noopener noreferrer">
                SANS Resources <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://attack.mitre.org/" target="_blank" rel="noopener noreferrer">
                MITRE ATT&CK <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
