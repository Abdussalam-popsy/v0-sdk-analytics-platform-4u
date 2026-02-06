"use client"

import { TopBar } from "@/components/dashboard/top-bar"
import { mockInsights } from "@/lib/mock-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

export default function InsightsPage() {
  return (
    <>
      <TopBar />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-7xl space-y-6">
          <div>
            <h1 className="text-xl font-semibold text-foreground">Insights</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Understand how personalization impacts your users.
            </p>
          </div>

          {/* Retention comparison */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-border/60">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Retention with Personalization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground">
                    {mockInsights.retentionWithCustomization}%
                  </span>
                  <span className="text-sm text-emerald-500">
                    +{mockInsights.retentionWithCustomization - mockInsights.retentionWithout}% vs without
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
                      <span>With personalization</span>
                      <span>{mockInsights.retentionWithCustomization}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-emerald-500"
                        style={{ width: `${mockInsights.retentionWithCustomization}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
                      <span>Without personalization</span>
                      <span>{mockInsights.retentionWithout}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-muted-foreground/40"
                        style={{ width: `${mockInsights.retentionWithout}%` }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Device Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockInsights.deviceBreakdown.map((d) => (
                    <div key={d.device}>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm text-foreground">{d.device}</span>
                        <span className="text-sm font-medium text-foreground">{d.percentage}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-foreground/70"
                          style={{ width: `${d.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    {mockInsights.avgCustomizationsPerUser}
                  </span>
                  <span className="text-sm text-muted-foreground">avg. customizations per user</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Hourly activity */}
          <Card className="border-border/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Hourly Activity (24h)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockInsights.hourlyActivity}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="hsl(0, 0%, 15%)"
                    />
                    <XAxis
                      dataKey="hour"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "hsl(0, 0%, 55%)", fontSize: 12 }}
                      tickFormatter={(v) => `${v}:00`}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "hsl(0, 0%, 55%)", fontSize: 12 }}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "hsl(0, 0%, 4%)",
                        border: "1px solid hsl(0, 0%, 15%)",
                        borderRadius: "8px",
                        color: "hsl(0, 0%, 98%)",
                        fontSize: 12,
                      }}
                      labelFormatter={(v) => `${v}:00`}
                    />
                    <Bar dataKey="count" fill="hsl(0, 0%, 98%)" radius={[3, 3, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Top combinations */}
          <Card className="border-border/60">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Most Popular Combinations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockInsights.topCombinations.map((combo, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-lg border border-border/40 bg-muted/20 p-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-foreground">
                      {i + 1}
                    </span>
                    <div className="flex flex-1 flex-wrap items-center gap-1.5">
                      {combo.combo.map((c) => (
                        <Badge
                          key={c}
                          variant="secondary"
                          className="text-[10px] font-normal"
                        >
                          {c}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 text-right">
                      <span className="text-sm font-medium text-foreground">
                        {combo.users.toLocaleString()} users
                      </span>
                      <span className="w-10 text-xs text-muted-foreground">
                        {combo.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}
