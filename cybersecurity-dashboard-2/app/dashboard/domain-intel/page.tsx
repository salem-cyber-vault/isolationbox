import type React from "react"
import { SalemVaultIcon } from "@/components/salem-vault-icon"
import Link from "next/link"
import { ArrowLeft, Eye, Shield, Zap } from "lucide-react"

export default function DomainIntelPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Back button */}
        <div className="flex justify-start mb-8">
          <Link 
            href="/dashboard" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>

        {/* Main icon and title */}
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <SalemVaultIcon 
                className="h-24 w-24 text-blue-500 animate-pulse" 
                size={96} 
              />
              <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            Domain Intelligence
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            Advanced domain analysis and threat intelligence platform
          </p>
        </div>

        {/* Coming Soon message */}
        <div className="space-y-6 p-8 border border-border rounded-lg bg-card/50 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 text-2xl font-semibold text-blue-400">
            <Zap className="h-6 w-6" />
            Coming Soon
            <Zap className="h-6 w-6" />
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            We're crafting an innovative domain intelligence platform that will provide comprehensive 
            threat analysis, reputation scoring, and real-time monitoring capabilities. 
            This powerful tool will be part of the Salem Cyber Vault ecosystem.
          </p>
          
          {/* Feature preview cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 border border-border/50 rounded-lg bg-background/50">
              <Eye className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Domain Monitoring</h3>
              <p className="text-xs text-muted-foreground mt-1">Real-time surveillance</p>
            </div>
            
            <div className="p-4 border border-border/50 rounded-lg bg-background/50">
              <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Threat Analysis</h3>
              <p className="text-xs text-muted-foreground mt-1">Advanced detection</p>
            </div>
            
            <div className="p-4 border border-border/50 rounded-lg bg-background/50">
              <SalemVaultIcon className="h-8 w-8 text-blue-400 mx-auto mb-2" size={32} />
              <h3 className="font-semibold text-sm">Intelligence Reports</h3>
              <p className="text-xs text-muted-foreground mt-1">Comprehensive insights</p>
            </div>
          </div>
        </div>

        {/* Status indicator */}
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse"></div>
          Development in progress
        </div>
      </div>
    </div>
  )
}