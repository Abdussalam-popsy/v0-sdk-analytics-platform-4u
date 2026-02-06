"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Layers,
  Lightbulb,
  Settings,
  BookOpen,
  LogOut,
  Plus,
  Check,
  ChevronDown,
  PanelLeftClose,
  PanelLeft,
  ExternalLink,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { sites } from "@/lib/mock-data"
import { useState } from "react"

const menuItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Elements", href: "/dashboard/elements", icon: Layers },
  { name: "Insights", href: "/dashboard/insights", icon: Lightbulb },
]

const bottomItems = [
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Docs", href: "#", icon: BookOpen },
]

export function DashboardSidebar({
  collapsed,
  onToggle,
}: {
  collapsed: boolean
  onToggle: () => void
}) {
  const pathname = usePathname()
  const [siteDropdownOpen, setSiteDropdownOpen] = useState(false)
  const [activeSite, setActiveSite] = useState(sites[0].name)

  return (
    <aside
      className={cn(
        "flex h-screen flex-col border-r border-border/60 bg-card transition-all duration-200",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo & collapse toggle */}
      <div className="flex h-16 items-center justify-between border-b border-border/60 px-4">
        {!collapsed && (
          <Link href="/" className="text-sm font-bold tracking-tight text-foreground">
            Personalisable
          </Link>
        )}
        <button
          onClick={onToggle}
          className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <PanelLeft className="h-4 w-4" />
          ) : (
            <PanelLeftClose className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Site selector */}
      {!collapsed && (
        <div className="border-b border-border/60 p-3">
          <button
            onClick={() => setSiteDropdownOpen(!siteDropdownOpen)}
            className="flex w-full items-center justify-between rounded-lg bg-muted/50 px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
          >
            <span className="truncate">{activeSite}</span>
            <ChevronDown className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
          </button>
          {siteDropdownOpen && (
            <div className="mt-1 rounded-lg border border-border/60 bg-popover p-1 shadow-lg">
              {sites.map((site) => (
                <button
                  key={site.name}
                  onClick={() => {
                    setActiveSite(site.name)
                    setSiteDropdownOpen(false)
                  }}
                  className="flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-muted"
                >
                  {activeSite === site.name && (
                    <Check className="h-3.5 w-3.5 text-foreground" />
                  )}
                  {activeSite !== site.name && <span className="w-3.5" />}
                  <span className="truncate">{site.name}</span>
                </button>
              ))}
              <div className="my-1 border-t border-border/40" />
              <button className="flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                <Plus className="h-3.5 w-3.5" />
                Add Site
              </button>
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-3">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                collapsed && "justify-center px-0"
              )}
              title={collapsed ? item.name : undefined}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {!collapsed && item.name}
            </Link>
          )
        })}
      </nav>

      {/* Bottom items */}
      <div className="border-t border-border/60 p-3 space-y-1">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
            collapsed && "justify-center px-0"
          )}
          title={collapsed ? "Back to site" : undefined}
        >
          <ExternalLink className="h-4 w-4 shrink-0" />
          {!collapsed && "Back to site"}
        </Link>
        {bottomItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
              collapsed && "justify-center px-0"
            )}
            title={collapsed ? item.name : undefined}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            {!collapsed && item.name}
          </Link>
        ))}
        <button
          className={cn(
            "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
            collapsed && "justify-center px-0"
          )}
          title={collapsed ? "Logout" : undefined}
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {!collapsed && "Logout"}
        </button>
      </div>
    </aside>
  )
}
