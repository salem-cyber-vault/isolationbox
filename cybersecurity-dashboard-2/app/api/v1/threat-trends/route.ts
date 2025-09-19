import { NextRequest, NextResponse } from 'next/server'

// Configure edge runtime for optimal performance
export const runtime = 'edge'

// Mock data for threat trends (in production, this would come from a database)
const mockThreatTrends = [
  { name: "Ransomware", count: 45234, change: "+12%", trend: "up" },
  { name: "IoT Botnets", count: 78901, change: "+8%", trend: "up" },
  { name: "Cryptominers", count: 23456, change: "-5%", trend: "down" },
  { name: "Web Shells", count: 34567, change: "+15%", trend: "up" },
  { name: "APT Groups", count: 12890, change: "+3%", trend: "up" },
  { name: "Phishing", count: 156789, change: "+22%", trend: "up" },
]

export async function GET(request: NextRequest) {
  try {
    // Add realistic delay to simulate network latency
    await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 200))

    // Parse query parameters for filtering
    const { searchParams } = new URL(request.url)
    const period = searchParams.get('period') || '24h'
    const trend = searchParams.get('trend')

    let filteredTrends = mockThreatTrends

    // Filter by trend direction if provided
    if (trend && trend !== 'all') {
      filteredTrends = filteredTrends.filter(
        trendItem => trendItem.trend === trend
      )
    }

    // Simulate different data based on time period
    if (period === '7d') {
      filteredTrends = filteredTrends.map(item => ({
        ...item,
        count: Math.floor(item.count * 1.2),
        change: item.trend === 'up' ? `+${Math.floor(Math.random() * 15 + 5)}%` : `-${Math.floor(Math.random() * 8 + 2)}%`
      }))
    } else if (period === '30d') {
      filteredTrends = filteredTrends.map(item => ({
        ...item,
        count: Math.floor(item.count * 1.8),
        change: item.trend === 'up' ? `+${Math.floor(Math.random() * 25 + 10)}%` : `-${Math.floor(Math.random() * 12 + 3)}%`
      }))
    }

    return NextResponse.json({
      success: true,
      data: filteredTrends,
      period,
      total: filteredTrends.length,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch threat trends',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}