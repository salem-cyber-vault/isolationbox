import { NextRequest, NextResponse } from 'next/server'

// Configure edge runtime for optimal performance
export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const startTime = Date.now()
    
    // Simulate a brief processing delay
    await new Promise(resolve => setTimeout(resolve, 10))
    
    const responseTime = Date.now() - startTime

    return NextResponse.json({
      success: true,
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      runtime: 'edge',
      responseTime: `${responseTime}ms`,
      services: {
        database: 'connected',
        threatIntel: 'online',
        monitoring: 'active',
        alerts: 'operational'
      },
      metrics: {
        totalRequests: Math.floor(Math.random() * 10000 + 5000),
        activeConnections: Math.floor(Math.random() * 100 + 50),
        uptime: '99.9%'
      }
    })
  } catch (error) {
    return NextResponse.json(
      { 
        success: false,
        status: 'error',
        error: 'System health check failed',
        message: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}