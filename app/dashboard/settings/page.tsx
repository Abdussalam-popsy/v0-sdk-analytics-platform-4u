"use client"

import { useState } from "react"
import { TopBar } from "@/components/dashboard/top-bar"
import { mockSettings } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Copy, Check, Eye, EyeOff, RotateCcw } from "lucide-react"

export default function SettingsPage() {
  const [copied, setCopied] = useState<string | null>(null)
  const [showApiKey, setShowApiKey] = useState(false)
  const [notifications, setNotifications] = useState(mockSettings.notifications)
  const [widgetPosition, setWidgetPosition] = useState(mockSettings.widgetPosition)
  const [widgetTheme, setWidgetTheme] = useState(mockSettings.widgetTheme)

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <>
      <TopBar />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <div>
            <h1 className="text-xl font-semibold text-foreground">Settings</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage your site configuration and SDK settings.
            </p>
          </div>

          {/* Site ID & API Key */}
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle className="text-base">API Credentials</CardTitle>
              <CardDescription>Your site ID and API key for the Personalisable SDK.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm text-foreground">Site ID</Label>
                <div className="flex items-center gap-2">
                  <Input
                    readOnly
                    value={mockSettings.siteId}
                    className="bg-muted/30 font-mono text-sm"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 bg-transparent"
                    onClick={() => copyToClipboard(mockSettings.siteId, "siteId")}
                  >
                    {copied === "siteId" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-foreground">API Key</Label>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Input
                      readOnly
                      type={showApiKey ? "text" : "password"}
                      value={mockSettings.apiKey}
                      className="bg-muted/30 pr-10 font-mono text-sm"
                    />
                    <button
                      onClick={() => setShowApiKey(!showApiKey)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showApiKey ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 bg-transparent"
                    onClick={() => copyToClipboard(mockSettings.apiKey, "apiKey")}
                  >
                    {copied === "apiKey" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-foreground">Script Tag</Label>
                <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
                  <code className="block text-xs text-emerald-400">
                    {`<script src="https://personalisable.io/sdk.js" data-site="${mockSettings.siteId}"></script>`}
                  </code>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 bg-transparent"
                  onClick={() =>
                    copyToClipboard(
                      `<script src="https://personalisable.io/sdk.js" data-site="${mockSettings.siteId}"></script>`,
                      "script"
                    )
                  }
                >
                  {copied === "script" ? (
                    <>
                      <Check className="h-3.5 w-3.5" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" /> Copy Script
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Widget Configuration */}
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle className="text-base">Widget</CardTitle>
              <CardDescription>Configure how the personalization widget appears on your site.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm text-foreground">Position</Label>
                <div className="flex flex-wrap gap-2">
                  {(["bottom-right", "bottom-left", "top-right", "top-left"] as const).map((pos) => (
                    <button
                      key={pos}
                      onClick={() => setWidgetPosition(pos)}
                      className={`rounded-lg border px-3 py-1.5 text-xs transition-colors ${
                        widgetPosition === pos
                          ? "border-foreground bg-foreground text-background"
                          : "border-border/60 bg-muted/30 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {pos}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-foreground">Theme</Label>
                <div className="flex flex-wrap gap-2">
                  {(["auto", "light", "dark"] as const).map((theme) => (
                    <button
                      key={theme}
                      onClick={() => setWidgetTheme(theme)}
                      className={`rounded-lg border px-3 py-1.5 text-xs capitalize transition-colors ${
                        widgetTheme === theme
                          ? "border-foreground bg-foreground text-background"
                          : "border-border/60 bg-muted/30 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-foreground">SDK Version</Label>
                <div className="flex items-center gap-3">
                  <span className="rounded bg-muted px-2 py-1 font-mono text-xs text-foreground">
                    v{mockSettings.sdkVersion}
                  </span>
                  <span className="text-xs text-muted-foreground">Latest</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Allowed Origins */}
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle className="text-base">Allowed Origins</CardTitle>
              <CardDescription>Domains where the SDK is authorized to run.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockSettings.allowedOrigins.map((origin) => (
                <div
                  key={origin}
                  className="flex items-center justify-between rounded-lg border border-border/40 bg-muted/20 px-4 py-2.5"
                >
                  <code className="text-xs font-mono text-foreground">{origin}</code>
                  <Button variant="ghost" size="sm" className="h-7 text-xs text-muted-foreground hover:text-foreground">
                    Remove
                  </Button>
                </div>
              ))}
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                Add Origin
              </Button>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle className="text-base">Notifications</CardTitle>
              <CardDescription>Choose what notifications you receive.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { key: "email" as const, label: "Email notifications", desc: "Get notified about important changes" },
                { key: "weeklyDigest" as const, label: "Weekly digest", desc: "Summary of personalization activity" },
                { key: "alertOnSpike" as const, label: "Spike alerts", desc: "Get alerted when activity spikes unusually" },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <button
                    onClick={() =>
                      setNotifications({ ...notifications, [item.key]: !notifications[item.key] })
                    }
                    className={`relative h-6 w-11 rounded-full transition-colors ${
                      notifications[item.key] ? "bg-foreground" : "bg-muted"
                    }`}
                    role="switch"
                    aria-checked={notifications[item.key]}
                  >
                    <span
                      className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-background transition-transform ${
                        notifications[item.key] ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Danger zone */}
          <Card className="border-destructive/30">
            <CardHeader>
              <CardTitle className="text-base text-destructive">Danger Zone</CardTitle>
              <CardDescription>Irreversible actions for your site.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground">Reset all data</p>
                <p className="text-xs text-muted-foreground">Delete all customization data and start fresh.</p>
              </div>
              <Button variant="outline" size="sm" className="gap-2 border-destructive/30 bg-transparent text-destructive hover:bg-destructive/10">
                <RotateCcw className="h-3.5 w-3.5" />
                Reset
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}
