"use client"

import { trendData } from "@/lib/mock-data"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const lines = [
  { dataKey: "darkMode", name: "Dark Mode", color: "hsl(217, 91%, 60%)" },
  { dataKey: "fontSize", name: "Font Size", color: "hsl(160, 60%, 45%)" },
  { dataKey: "fontFamily", name: "Font Family", color: "hsl(30, 80%, 55%)" },
  { dataKey: "colorScheme", name: "Color Scheme", color: "hsl(280, 65%, 60%)" },
  { dataKey: "spacing", name: "Spacing", color: "hsl(340, 75%, 55%)" },
]

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: Array<{ name: string; value: number; color: string }>
  label?: string
}) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border/60 bg-card p-3 shadow-lg">
        <p className="mb-2 text-xs font-medium text-foreground">{label}</p>
        {payload.map((entry) => (
          <div key={entry.name} className="flex items-center gap-2 text-xs">
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-muted-foreground">{entry.name}:</span>
            <span className="font-medium text-foreground">{entry.value}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export function TrendsChart() {
  return (
    <div className="rounded-xl border border-border/60 bg-card p-5">
      <h3 className="mb-4 text-sm font-semibold text-foreground">
        Customization Trends
      </h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={trendData}
            margin={{ top: 5, right: 10, bottom: 5, left: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(240, 3.7%, 15.9%)"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(240, 5%, 64.9%)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(240, 5%, 64.9%)", fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ fontSize: 12, paddingTop: 16 }}
              iconType="circle"
              iconSize={8}
            />
            {lines.map((line) => (
              <Line
                key={line.dataKey}
                type="monotone"
                dataKey={line.dataKey}
                name={line.name}
                stroke={line.color}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: line.color }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
