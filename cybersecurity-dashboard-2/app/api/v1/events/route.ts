import { NextRequest, NextResponse } from 'next/server'

// Configure edge runtime for optimal performance
export const runtime = 'edge'

// Mock data for security events (in production, this would come from a database)
const mockEvents = [
  {
    id: 1,
    type: "alert",
    title: "Critical vulnerability detected",
    description: "CVE-2023-1234 found on web server",
    time: "2 minutes ago",
    iconColor: "text-red-500",
    details: {
      severity: "Critical",
      affectedSystems: ["Web Server 01", "Web Server 02"],
      cve: "CVE-2023-1234",
      solution: "Apply security patch immediately",
      impact: "Remote code execution possible",
      learnMore: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-1234",
      mitreAttack: "https://attack.mitre.org/techniques/T1190/",
      nistGuide: "https://nvd.nist.gov/vuln/detail/CVE-2023-1234",
    },
  },
  {
    id: 2,
    type: "info",
    title: "System scan completed",
    description: "Weekly security scan finished",
    time: "15 minutes ago",
    iconColor: "text-blue-500",
    details: {
      severity: "Info",
      affectedSystems: ["All Systems"],
      scanType: "Full System Scan",
      findings: "23 vulnerabilities found, 18 patched",
      duration: "2 hours 34 minutes",
      learnMore: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-1234",
      mitreAttack: "https://attack.mitre.org/techniques/T1190/",
      nistGuide: "https://nvd.nist.gov/vuln/detail/CVE-2023-1234",
    },
  },
  {
    id: 3,
    type: "warning",
    title: "Unusual login activity",
    description: "Multiple failed login attempts from 192.168.1.45",
    time: "32 minutes ago",
    iconColor: "text-orange-500",
    details: {
      severity: "Warning",
      sourceIP: "192.168.1.45",
      attempts: "15 failed attempts",
      targetAccount: "admin@salencybervault.com",
      action: "IP temporarily blocked",
      learnMore: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-1234",
      mitreAttack: "https://attack.mitre.org/techniques/T1190/",
      nistGuide: "https://nvd.nist.gov/vuln/detail/CVE-2023-1234",
    },
  },
  {
    id: 4,
    type: "success",
    title: "Firewall rules updated",
    description: "New rules applied successfully",
    time: "1 hour ago",
    iconColor: "text-green-500",
    details: {
      severity: "Success",
      rulesAdded: 5,
      rulesModified: 3,
      rulesRemoved: 1,
      appliedTo: "All network segments",
      learnMore: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-1234",
      mitreAttack: "https://attack.mitre.org/techniques/T1190/",
      nistGuide: "https://nvd.nist.gov/vuln/detail/CVE-2023-1234",
    },
  },
  {
    id: 5,
    type: "alert",
    title: "Malware detected",
    description: "Trojan detected and quarantined on endpoint DEV-45",
    time: "1.5 hours ago",
    iconColor: "text-red-500",
    details: {
      severity: "High",
      malwareType: "Trojan.Win32.Generic",
      endpoint: "DEV-45 (John's Laptop)",
      action: "File quarantined and system cleaned",
      scanRecommended: "Full system scan recommended",
      learnMore: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-1234",
      mitreAttack: "https://attack.mitre.org/techniques/T1190/",
      nistGuide: "https://nvd.nist.gov/vuln/detail/CVE-2023-1234",
    },
  },
  {
    id: 6,
    type: "info",
    title: "System update available",
    description: "Security patch available for 3 systems",
    time: "2 hours ago",
    iconColor: "text-blue-500",
    details: {
      severity: "Info",
      updateType: "Security Patch",
      affectedSystems: ["DB Server", "Mail Server", "File Server"],
      patchSize: "245 MB",
      estimatedDowntime: "15 minutes per server",
      learnMore: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-1234",
      mitreAttack: "https://attack.mitre.org/techniques/T1190/",
      nistGuide: "https://nvd.nist.gov/vuln/detail/CVE-2023-1234",
    },
  },
  {
    id: 7,
    type: "warning",
    title: "API rate limit reached",
    description: "External API calls exceeded threshold",
    time: "3 hours ago",
    iconColor: "text-yellow-500",
    details: {
      severity: "Warning",
      apiEndpoint: "threat-intel.api.com",
      currentUsage: "1,250 calls/hour",
      limit: "1,000 calls/hour",
      recommendation: "Upgrade API plan or reduce call frequency",
      learnMore: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-1234",
      mitreAttack: "https://attack.mitre.org/techniques/T1190/",
      nistGuide: "https://nvd.nist.gov/vuln/detail/CVE-2023-1234",
    },
  },
]

export async function GET(request: NextRequest) {
  try {
    // Add realistic delay to simulate network latency
    await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 200))

    // Parse query parameters for filtering
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const severity = searchParams.get('severity')
    const limit = parseInt(searchParams.get('limit') || '50')

    let filteredEvents = mockEvents

    // Filter by type if provided
    if (type && type !== 'all') {
      filteredEvents = filteredEvents.filter(
        event => event.type === type
      )
    }

    // Filter by severity if provided (extracted from details)
    if (severity && severity !== 'all') {
      filteredEvents = filteredEvents.filter(
        event => event.details.severity?.toLowerCase() === severity.toLowerCase()
      )
    }

    // Apply limit
    filteredEvents = filteredEvents.slice(0, limit)

    return NextResponse.json({
      success: true,
      data: filteredEvents,
      total: filteredEvents.length,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch security events',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}