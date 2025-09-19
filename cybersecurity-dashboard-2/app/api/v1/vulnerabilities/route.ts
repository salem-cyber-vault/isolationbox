import { NextRequest, NextResponse } from 'next/server'

// Configure edge runtime for optimal performance
export const runtime = 'edge'

// Mock data for vulnerabilities (in production, this would come from a database)
const mockVulnerabilities = [
  {
    cve: "CVE-2024-0001",
    severity: "Critical",
    score: 9.8,
    title: "Remote Code Execution in Apache HTTP Server",
    description: "A critical vulnerability allowing remote code execution through malformed HTTP requests.",
    affectedDevices: 234567,
    exploitAvailable: true,
    patchAvailable: true,
    firstSeen: "2024-01-10",
    categories: ["Web Server", "RCE"],
    mitreAttack: "T1190",
    nvdLink: "https://nvd.nist.gov/vuln/detail/CVE-2024-0001",
    mitreLink: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-0001",
    exploitDbLink: "https://www.exploit-db.com/search?cve=CVE-2024-0001",
    shodanLink: "https://www.shodan.io/search?query=apache+CVE-2024-0001",
  },
  {
    cve: "CVE-2024-0002",
    severity: "High",
    score: 8.1,
    title: "SQL Injection in MySQL Database",
    description: "SQL injection vulnerability in MySQL allowing unauthorized data access.",
    affectedDevices: 89234,
    exploitAvailable: false,
    patchAvailable: true,
    firstSeen: "2024-01-12",
    categories: ["Database", "SQLi"],
    mitreAttack: "T1190",
    nvdLink: "https://nvd.nist.gov/vuln/detail/CVE-2024-0002",
    mitreLink: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-0002",
    exploitDbLink: "https://www.exploit-db.com/search?cve=CVE-2024-0002",
    shodanLink: "https://www.shodan.io/search?query=mysql+CVE-2024-0002",
  },
  {
    cve: "CVE-2024-0003",
    severity: "Medium",
    score: 6.5,
    title: "Cross-Site Scripting in Web Applications",
    description: "Stored XSS vulnerability affecting multiple web applications.",
    affectedDevices: 156789,
    exploitAvailable: true,
    patchAvailable: false,
    firstSeen: "2024-01-08",
    categories: ["Web Application", "XSS"],
    mitreAttack: "T1059",
    nvdLink: "https://nvd.nist.gov/vuln/detail/CVE-2024-0003",
    mitreLink: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-0003",
    exploitDbLink: "https://www.exploit-db.com/search?cve=CVE-2024-0003",
    shodanLink: "https://www.shodan.io/search?query=xss+CVE-2024-0003",
  },
]

export async function GET(request: NextRequest) {
  try {
    // Add realistic delay to simulate network latency
    await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 200))

    // Parse query parameters for filtering
    const { searchParams } = new URL(request.url)
    const severity = searchParams.get('severity')
    const category = searchParams.get('category')
    const patchAvailable = searchParams.get('patchAvailable')

    let filteredVulnerabilities = mockVulnerabilities

    // Filter by severity if provided
    if (severity && severity !== 'all') {
      filteredVulnerabilities = filteredVulnerabilities.filter(
        vuln => vuln.severity.toLowerCase() === severity.toLowerCase()
      )
    }

    // Filter by category if provided
    if (category) {
      filteredVulnerabilities = filteredVulnerabilities.filter(
        vuln => vuln.categories.some(cat => 
          cat.toLowerCase().includes(category.toLowerCase())
        )
      )
    }

    // Filter by patch availability if provided
    if (patchAvailable !== null) {
      const patchFilter = patchAvailable === 'true'
      filteredVulnerabilities = filteredVulnerabilities.filter(
        vuln => vuln.patchAvailable === patchFilter
      )
    }

    return NextResponse.json({
      success: true,
      data: filteredVulnerabilities,
      total: filteredVulnerabilities.length,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch vulnerabilities',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}