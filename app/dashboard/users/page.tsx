"use client"

import { useState } from "react"
import { TopBar } from "@/components/dashboard/top-bar"
import { mockUsers } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Monitor, Smartphone, Tablet } from "lucide-react"

const deviceIcon = {
  Desktop: Monitor,
  Mobile: Smartphone,
  Tablet: Tablet,
}

export default function UsersPage() {
  const [search, setSearch] = useState("")

  const filtered = mockUsers.filter(
    (u) =>
      u.city.toLowerCase().includes(search.toLowerCase()) ||
      u.id.toLowerCase().includes(search.toLowerCase()) ||
      u.browser.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <TopBar />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-foreground">Users</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Anonymous visitors and their personalization preferences.
              </p>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by city, ID, browser..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-muted/30 pl-9"
              />
            </div>
          </div>

          <div className="rounded-xl border border-border/60 bg-card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Visitor
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Location
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Device
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Sessions
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Customizations
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Last Active
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((user) => {
                    const DeviceIcon = deviceIcon[user.device as keyof typeof deviceIcon] || Monitor
                    return (
                      <tr
                        key={user.id}
                        className="border-b border-border/40 transition-colors last:border-0 hover:bg-muted/30"
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-medium text-foreground">
                              {user.id.slice(-2).toUpperCase()}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground font-mono">
                                {user.id}
                              </p>
                              <p className="text-xs text-muted-foreground">{user.ip}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-foreground">{user.city}</span>
                            <span className="text-xs text-muted-foreground">{user.country}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <DeviceIcon className="h-3.5 w-3.5 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{user.browser}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-sm text-foreground">{user.sessions}</span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-1">
                            {user.customizations.map((c) => (
                              <Badge
                                key={c}
                                variant="secondary"
                                className="text-[10px] font-normal"
                              >
                                {c}
                              </Badge>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <span className="text-sm text-muted-foreground">{user.lastActive}</span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
