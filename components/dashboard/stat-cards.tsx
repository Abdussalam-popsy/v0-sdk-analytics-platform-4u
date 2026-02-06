"use client"

import { stats } from "@/lib/mock-data"
import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts"
import { TrendingUp, Users, Moon, Clock } from "lucide-react"

const icons = [TrendingUp, Users, Moon, Clock]

export function StatCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = icons[index]
        return (
          <div
            key={stat.title}
            className="rounded-xl border border-border/60 bg-card p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{stat.title}</span>
              <Icon className="h-4 w-4 text-muted-foreground/50" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-foreground">
                {stat.value}
              </span>
              <span className="text-xs font-medium text-foreground">
                {stat.change}
              </span>
              <span className="text-xs text-muted-foreground">
                {stat.changeLabel}
              </span>
            </div>
            {stat.data.length > 0 && (
              <div className="mt-3 h-12">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={stat.data}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(0, 0%, 98%)"
                      strokeWidth={1.5}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
