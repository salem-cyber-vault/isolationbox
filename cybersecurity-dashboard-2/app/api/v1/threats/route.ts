import { NextRequest, NextResponse } from 'next/server'

// Configure edge runtime for optimal performance
export const runtime = 'edge'

// Mock data for threats (in production, this would come from a database)
const mockThreats = [
  {
    id: 1,
    name: "BlackCat Ransomware",
    type: "Ransomware",
    severity: "Critical",
    targets: ["Financial Services", "Healthcare"],
    description: "New variant of BlackCat ransomware targeting vulnerable Exchange servers with enhanced encryption capabilities.",
    indicators: ["Suspicious PowerShell commands", "Unusual network traffic to port 445", "Registry modifications"],
    updated: "2 hours ago",
  },
  {
    id: 2,
    name: "APT-29 Campaign",
    type: "Advanced Persistent Threat",
    severity: "High",
    targets: ["Government", "Defense"],
    description: "Ongoing spear-phishing campaign targeting government officials with malicious Office documents.",
    indicators: ["Emails with .doc attachments", "Macro execution", "Connections to known C2 servers"],
    updated: "5 hours ago",
  },
  {
    id: 3,
    name: "SQL Injection Vulnerability",
    type: "Web Application Vulnerability",
    severity: "Medium",
    targets: ["E-commerce", "Web Applications"],
    description: "New SQL injection technique bypassing common WAF protections discovered in the wild.",
    indicators: ["Unusual database queries", "Unexpected error messages", "Data exfiltration attempts"],
    updated: "1 day ago",
  },
  {
    id: 4,
    name: "DDoS Botnet",
    type: "Botnet",
    severity: "High",
    targets: ["Financial Services", "Critical Infrastructure"],
    description: "Large botnet observed preparing for coordinated DDoS attacks against financial institutions.",
    indicators: ["Unusual traffic patterns", "Connection attempts from multiple IPs", "DNS amplification"],
    updated: "8 hours ago",
  },
  {
    id: 5,
    name: "Zero-day in Chrome",
    type: "Browser Vulnerability",
    severity: "Critical",
    targets: ["All Industries"],
    description: "Actively exploited zero-day vulnerability in Chrome browser allowing remote code execution.",
    indicators: ["Unexpected browser crashes", "Unusual process spawning", "Unknown browser extensions"],
    updated: "3 hours ago",
  },
  {
    id: 6,
    name: "Supply Chain Attack",
    type: "Supply Chain",
    severity: "High",
    targets: ["Software Development", "IT Services"],
    description: "Compromised software repository distributing malicious packages to developers.",
    indicators: ["Unexpected code in dependencies", "Unusual network connections", "Unauthorized system changes"],
    updated: "12 hours ago",
  },
]

export async function GET(request: NextRequest) {
  try {
    // Add realistic delay to simulate network latency
    await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 200))

    // Parse query parameters for filtering
    const { searchParams } = new URL(request.url)
    const severity = searchParams.get('severity')
    const type = searchParams.get('type')

    let filteredThreats = mockThreats

    // Filter by severity if provided
    if (severity && severity !== 'all') {
      filteredThreats = filteredThreats.filter(
        threat => threat.severity.toLowerCase() === severity.toLowerCase()
      )
    }

    // Filter by type if provided
    if (type) {
      filteredThreats = filteredThreats.filter(
        threat => threat.type.toLowerCase().includes(type.toLowerCase())
      )
    }

    return NextResponse.json({
      success: true,
      data: filteredThreats,
      total: filteredThreats.length,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch threats',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}