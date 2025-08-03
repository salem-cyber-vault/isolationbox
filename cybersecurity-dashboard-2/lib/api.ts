// Centralized API layer for Salem Cyber Vault Dashboard
// This module provides a unified interface for all API calls and data fetching

// ============================================================================
// TypeScript Interfaces
// ============================================================================

export interface Threat {
  id: number
  name: string
  type: string
  severity: 'Critical' | 'High' | 'Medium' | 'Low'
  targets: string[]
  description: string
  indicators: string[]
  updated: string
}

export interface Vulnerability {
  cve: string
  severity: 'Critical' | 'High' | 'Medium' | 'Low'
  score: number
  title: string
  description: string
  affectedDevices: number
  exploitAvailable: boolean
  patchAvailable: boolean
  firstSeen: string
  categories: string[]
  mitreAttack: string
  nvdLink: string
  mitreLink: string
  exploitDbLink: string
  shodanLink: string
}

export interface ThreatTrend {
  name: string
  count: number
  change: string
  trend: 'up' | 'down'
}

export interface SecurityEvent {
  id: number
  type: 'alert' | 'warning' | 'info' | 'success'
  title: string
  description: string
  time: string
  icon: any // Lucide icon component
  iconColor: string
  details: {
    severity: string
    [key: string]: any
    learnMore: string
    mitreAttack: string
    nistGuide: string
  }
}

export interface Alert {
  id: string
  title: string
  source: string
  severity: 'Critical' | 'High' | 'Medium' | 'Low'
  time: string
  status: 'Open' | 'Investigating' | 'Mitigated' | 'Resolved'
}

// ============================================================================
// Mock Data (Temporary - to be replaced with real API endpoints)
// ============================================================================

const mockThreats: Threat[] = [
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

const mockVulnerabilities: Vulnerability[] = [
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

const mockThreatTrends: ThreatTrend[] = [
  { name: "Ransomware", count: 45234, change: "+12%", trend: "up" },
  { name: "IoT Botnets", count: 78901, change: "+8%", trend: "up" },
  { name: "Cryptominers", count: 23456, change: "-5%", trend: "down" },
  { name: "Web Shells", count: 34567, change: "+15%", trend: "up" },
]

// Import icons for events (these will be set when the events are created in components)
import { AlertTriangle, Info, ShieldAlert, CheckCircle, XCircle, Clock } from "lucide-react"

const mockEvents: SecurityEvent[] = [
  {
    id: 1,
    type: "alert",
    title: "Critical vulnerability detected",
    description: "CVE-2023-1234 found on web server",
    time: "2 minutes ago",
    icon: AlertTriangle,
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
    icon: Info,
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
    icon: ShieldAlert,
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
    icon: CheckCircle,
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
    icon: XCircle,
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
    icon: Info,
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
    icon: Clock,
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

const mockAlerts: Alert[] = [
  {
    id: "ALERT-1234",
    title: "Critical Vulnerability Detected",
    source: "Web Server",
    severity: "Critical",
    time: "2023-10-31 14:23:45",
    status: "Open",
  },
  {
    id: "ALERT-1235",
    title: "Unusual Login Activity",
    source: "Authentication System",
    severity: "High",
    time: "2023-10-31 13:45:22",
    status: "Investigating",
  },
  {
    id: "ALERT-1236",
    title: "Malware Detected",
    source: "Endpoint DEV-45",
    severity: "High",
    time: "2023-10-31 12:12:01",
    status: "Mitigated",
  },
  {
    id: "ALERT-1237",
    title: "DDoS Attack Attempt",
    source: "Network Gateway",
    severity: "Critical",
    time: "2023-10-31 11:05:33",
    status: "Open",
  },
  {
    id: "ALERT-1238",
    title: "Suspicious File Download",
    source: "Endpoint HR-12",
    severity: "Medium",
    time: "2023-10-31 10:45:12",
    status: "Investigating",
  },
  {
    id: "ALERT-1239",
    title: "Firewall Rule Violation",
    source: "Network Firewall",
    severity: "Medium",
    time: "2023-10-31 09:30:45",
    status: "Resolved",
  },
  {
    id: "ALERT-1240",
    title: "Unauthorized Access Attempt",
    source: "Database Server",
    severity: "High",
    time: "2023-10-31 08:22:18",
    status: "Mitigated",
  },
  {
    id: "ALERT-1241",
    title: "System Update Available",
    source: "Update Server",
    severity: "Low",
    time: "2023-10-31 07:15:33",
    status: "Open",
  },
]

// ============================================================================
// API Functions
// ============================================================================

/**
 * Simulates network delay for realistic API behavior
 */
const simulateNetworkDelay = (): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500))
}

/**
 * Fetches threat intelligence data
 * In production, this would call: GET /api/v1/threats
 */
export async function fetchThreats(): Promise<Threat[]> {
  await simulateNetworkDelay()
  
  // TODO: Replace with real API call
  // return fetch('/api/v1/threats').then(res => res.json())
  
  return mockThreats
}

/**
 * Fetches vulnerability data
 * In production, this would call: GET /api/v1/vulnerabilities
 */
export async function fetchVulnerabilities(): Promise<Vulnerability[]> {
  await simulateNetworkDelay()
  
  // TODO: Replace with real API call
  // return fetch('/api/v1/vulnerabilities').then(res => res.json())
  
  return mockVulnerabilities
}

/**
 * Fetches threat trends data
 * In production, this would call: GET /api/v1/threat-trends
 */
export async function fetchThreatTrends(): Promise<ThreatTrend[]> {
  await simulateNetworkDelay()
  
  // TODO: Replace with real API call
  // return fetch('/api/v1/threat-trends').then(res => res.json())
  
  return mockThreatTrends
}

/**
 * Fetches recent security events
 * In production, this would call: GET /api/v1/events
 */
export async function fetchEvents(): Promise<SecurityEvent[]> {
  await simulateNetworkDelay()
  
  // TODO: Replace with real API call
  // return fetch('/api/v1/events').then(res => res.json())
  
  return mockEvents
}

/**
 * Fetches security alerts
 * In production, this would call: GET /api/v1/alerts
 */
export async function fetchAlerts(): Promise<Alert[]> {
  await simulateNetworkDelay()
  
  // TODO: Replace with real API call
  // return fetch('/api/v1/alerts').then(res => res.json())
  
  return mockAlerts
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Filters threats by severity
 */
export function filterThreatsBySeverity(threats: Threat[], severity: string): Threat[] {
  if (severity === "all") return threats
  return threats.filter(threat => threat.severity.toLowerCase() === severity.toLowerCase())
}

/**
 * Filters events by type
 */
export function filterEventsByType(events: SecurityEvent[], type: string | null): SecurityEvent[] {
  if (!type) return events
  return events.filter(event => event.type === type)
}

/**
 * Filters alerts by multiple criteria
 */
export function filterAlerts(
  alerts: Alert[], 
  searchTerm: string, 
  severityFilter: string, 
  statusFilter: string
): Alert[] {
  return alerts.filter(alert => {
    const matchesSearch = searchTerm === "" || 
      alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.source.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesSeverity = severityFilter === "All" || alert.severity === severityFilter
    const matchesStatus = statusFilter === "All" || alert.status === statusFilter

    return matchesSearch && matchesSeverity && matchesStatus
  })
}