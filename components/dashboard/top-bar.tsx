"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Calendar, Download, ChevronRight } from "lucide-react"

export function TopBar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border/60 bg-card px-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-sm">
        <span className="text-muted-foreground">Dashboard</span>
        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
        <span className="font-medium text-foreground">Overview</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="gap-2 bg-transparent text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Last 7 days</span>
        </Button>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent text-muted-foreground">
          <Download className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Export</span>
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-muted text-xs text-foreground">
            JD
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
