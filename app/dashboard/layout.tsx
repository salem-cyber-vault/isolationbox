import type React from "react"
import { DashboardNav } from "@/components/dashboard-nav"
import { FloatingEyes } from "@/components/floating-eyes"
import { UserNav } from "@/components/user-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { AlertsButton } from "@/components/alerts-button"
import { Search } from "@/components/search"
import { SalemVaultIcon } from "@/components/salem-vault-icon"
import { Suspense } from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Floating eyes background effect */}
      <FloatingEyes />

      {/* Main layout */}
      <div className="flex min-h-screen flex-col">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center gap-2 font-semibold text-lg text-blue-500">
            <SalemVaultIcon className="h-6 w-6" size={24} />
            <span>Salem Cyber Vault</span>
          </div>

          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Suspense fallback={<div>Loading...</div>}>
              <Search />
            </Suspense>
          </div>

          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Suspense fallback={<div>Loading...</div>}>
                <AlertsButton />
              </Suspense>
              <Suspense fallback={<div>Loading...</div>}>
                <ModeToggle />
              </Suspense>
              <Suspense fallback={<div>Loading...</div>}>
                <UserNav />
              </Suspense>
            </nav>
          </div>
        </header>

        {/* Main content area with sidebar */}
        <div className="flex-1 flex">
          <DashboardNav />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
