"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { AlertTriangle, BarChart3, Bell, FileText, Globe, Home, Settings, Shield, Users, Search, Gamepad2, Target, BookOpen, Bot, User, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  label?: string
}

const items: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Attack Simulation",
    href: "/attack-lab",
    icon: Target,
    label: "Live",
  },
  {
    title: "Security Games",
    href: "/games",
    icon: Gamepad2,
    label: "Play",
  },
  {
    title: "OSINT Tools",
    href: "/osint",
    icon: Search,
    label: "New",
  },
  {
    title: "Project Explorer",
    href: "/projects",
    icon: BookOpen,
  },
  {
    title: "AI Mentor",
    href: "/mentor",
    icon: Bot,
    label: "24/7",
  },
  {
    title: "Your Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Cyber Search",
    href: "/dashboard/cyber-search",
    icon: Zap,
    label: "Pro",
  },
  {
    title: "Threat Map",
    href: "/dashboard",
    icon: AlertTriangle,
    label: "3",
  },
  {
    title: "Domain Intel",
    href: "/dashboard/domain-intel",
    icon: Globe,
    label: "Intel",
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid gap-2 px-2 py-4 md:px-4 border-r min-w-52">
      <div className="flex h-full flex-col">
        <ScrollArea className="flex-1">
          <div className="grid gap-1 px-2">
            {items.map((item, index) => (
              <Button
                key={index}
                variant={pathname === item.href ? "secondary" : "ghost"}
                size="sm"
                className={cn(
                  "justify-start group relative",
                  pathname === item.href &&
                    "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 hover:text-orange-500",
                  item.title === "Domain Intel" && "hover:bg-purple-500/10 hover:text-purple-400",
                  item.title === "Cyber Search" && "hover:bg-blue-500/10 hover:text-blue-400",
                )}
                asChild
              >
                <Link
                  href={item.href}
                  title={
                    item.title === "Domain Intel"
                      ? "Investigate domains like Yandex & CuteStat - perfect for noobs!"
                      : item.title === "Cyber Search"
                        ? "Advanced search engine for discovering internet-connected devices and services"
                        : item.title
                  }
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                  {item.label && (
                    <span
                      className={cn(
                        "ml-auto text-xs font-medium rounded-full px-2 py-0.5",
                        item.title === "Domain Intel"
                          ? "bg-purple-500/10 text-purple-400 animate-pulse"
                          : item.title === "Cyber Search"
                            ? "bg-blue-500/10 text-blue-400 animate-pulse"
                            : "bg-orange-500/10 text-orange-500",
                      )}
                    >
                      {item.label}
                    </span>
                  )}
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </nav>
  )
}
