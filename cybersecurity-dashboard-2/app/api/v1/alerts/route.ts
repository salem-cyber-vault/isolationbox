import { NextRequest, NextResponse } from 'next/server'

// Configure edge runtime for optimal performance
export const runtime = 'edge'

// Mock data for security alerts (in production, this would come from a database)
const mockAlerts = [
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

export async function GET(request: NextRequest) {
  try {
    // Add realistic delay to simulate network latency
    await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 200))

    // Parse query parameters for filtering
    const { searchParams } = new URL(request.url)
    const severity = searchParams.get('severity')
    const status = searchParams.get('status')
    const search = searchParams.get('search')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    let filteredAlerts = mockAlerts

    // Filter by severity if provided
    if (severity && severity !== 'All') {
      filteredAlerts = filteredAlerts.filter(
        alert => alert.severity === severity
      )
    }

    // Filter by status if provided
    if (status && status !== 'All') {
      filteredAlerts = filteredAlerts.filter(
        alert => alert.status === status
      )
    }

    // Filter by search term if provided
    if (search) {
      const searchLower = search.toLowerCase()
      filteredAlerts = filteredAlerts.filter(
        alert => 
          alert.title.toLowerCase().includes(searchLower) ||
          alert.id.toLowerCase().includes(searchLower) ||
          alert.source.toLowerCase().includes(searchLower)
      )
    }

    // Apply pagination
    const totalCount = filteredAlerts.length
    filteredAlerts = filteredAlerts.slice(offset, offset + limit)

    return NextResponse.json({
      success: true,
      data: filteredAlerts,
      total: totalCount,
      limit,
      offset,
      hasMore: offset + limit < totalCount,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch alerts',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// Handle POST requests for creating new alerts
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.title || !body.source || !body.severity) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields',
          message: 'Title, source, and severity are required'
        },
        { status: 400 }
      )
    }

    // Generate new alert
    const newAlert = {
      id: `ALERT-${Date.now()}`,
      title: body.title,
      source: body.source,
      severity: body.severity,
      time: new Date().toISOString(),
      status: "Open",
    }

    // In production, this would save to database
    // For now, just return the created alert
    return NextResponse.json({
      success: true,
      data: newAlert,
      message: 'Alert created successfully',
      timestamp: new Date().toISOString()
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create alert',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}