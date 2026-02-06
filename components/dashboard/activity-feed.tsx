"use client"

import React from "react"

import { useEffect, useState, useCallback } from "react"
import { activityTemplates } from "@/lib/mock-data"
import { Moon, Type, Palette, AlignLeft, LayoutGrid, Contrast, MoveHorizontal } from "lucide-react"

interface ActivityItem {
  id: number
  icon: string
  city: string
  action: string
  timeAgo: string
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  moon: Moon,
  type: Type,
  palette: Palette,
  text: AlignLeft,
  layout: LayoutGrid,
  contrast: Contrast,
  spacing: MoveHorizontal,
}

function generateActivity(id: number): ActivityItem {
  const template =
    activityTemplates[Math.floor(Math.random() * activityTemplates.length)]
  const city =
    template.cities[Math.floor(Math.random() * template.cities.length)]
  return {
    id,
    icon: template.icon,
    city,
    action: template.action,
    timeAgo: "just now",
  }
}

function getInitialActivities(): ActivityItem[] {
  const items: ActivityItem[] = []
  for (let i = 0; i < 8; i++) {
    const item = generateActivity(i)
    item.timeAgo = `${(i + 1) * 3}s ago`
    items.push(item)
  }
  return items
}

export function ActivityFeed() {
  const [activities, setActivities] = useState<ActivityItem[]>(() =>
    getInitialActivities()
  )
  const [nextId, setNextId] = useState(8)

  const addActivity = useCallback(() => {
    setActivities((prev) => {
      const newItem = generateActivity(nextId)
      return [newItem, ...prev.slice(0, 7)]
    })
    setNextId((prev) => prev + 1)
  }, [nextId])

  useEffect(() => {
    const interval = setInterval(addActivity, 3000)
    return () => clearInterval(interval)
  }, [addActivity])

  return (
    <div className="rounded-xl border border-border/60 bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">
          Live Activity Feed
        </h3>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <span className="text-xs text-muted-foreground">Live</span>
        </div>
      </div>

      <div className="space-y-1">
        {activities.map((activity) => {
          const Icon = iconMap[activity.icon] || Moon
          return (
            <div
              key={activity.id}
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-muted/50"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <Icon className="h-3.5 w-3.5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm text-foreground">
                  User from{" "}
                  <span className="font-medium">{activity.city}</span>{" "}
                  {activity.action}
                </p>
              </div>
              <span className="shrink-0 text-xs text-muted-foreground">
                {activity.timeAgo}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
