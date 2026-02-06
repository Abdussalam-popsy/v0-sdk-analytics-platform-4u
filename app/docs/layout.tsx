"use client"

import React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ArrowLeft, BookOpen, Code, Zap, Settings, Layers, HelpCircle } from "lucide-react"

const docNav = [
  { name: "Getting Started", href: "/docs", icon: BookOpen },
  { name: "Installation", href: "/docs/installation", icon: Code },
  { name: "Configuration", href: "/docs/configuration", icon: Settings },
  { name: "Elements", href: "/docs/elements", icon: Layers },
  { name: "API Reference", href: "/docs/api", icon: Zap },
  { name: "FAQ", href: "/docs/faq", icon: HelpCircle },
]

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-background">
      {/* Top nav */}
      <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-border/60 bg-background/80 px-6 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm font-bold tracking-tight text-foreground">
            Personalisable
          </Link>
          <span className="text-muted-foreground/40">/</span>
          <span className="text-sm text-muted-foreground">Docs</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3 w-3" />
            Dashboard
          </Link>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl">
        {/* Sidebar */}
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 overflow-y-auto border-r border-border/60 p-4 lg:block">
          <nav className="space-y-1">
            {docNav.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-muted font-medium text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 px-8 py-10 lg:px-16">{children}</main>
      </div>
    </div>
  )
}
