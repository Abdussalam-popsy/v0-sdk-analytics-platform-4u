"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Globe, ArrowRight, Check } from "lucide-react"

export function AddSiteModal({ onClose, onAdd }: { onClose: () => void; onAdd: (name: string) => void }) {
  const [url, setUrl] = useState("")
  const [step, setStep] = useState<"url" | "confirm">("url")
  const [siteName, setSiteName] = useState("")

  const handleSubmit = () => {
    if (!url.trim()) return
    const cleaned = url.replace(/^https?:\/\//, "").replace(/\/$/, "")
    setSiteName(cleaned)
    setStep("confirm")
  }

  const handleConfirm = () => {
    onAdd(siteName)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-xl border border-border/60 bg-card p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        {step === "url" ? (
          <>
            <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
              <Globe className="h-5 w-5 text-foreground" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-foreground">Add a new site</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Enter the URL of the site you want to add personalization to.
            </p>

            <div className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="site-url" className="text-sm text-foreground">
                  Website URL
                </Label>
                <Input
                  id="site-url"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  className="bg-muted/30"
                />
              </div>

              <Button className="w-full gap-2" onClick={handleSubmit} disabled={!url.trim()}>
                Continue
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
              <Check className="h-5 w-5 text-emerald-500" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-foreground">Confirm your site</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              We'll generate a unique script tag for this site.
            </p>

            <div className="mt-6 rounded-lg border border-border/60 bg-muted/30 px-4 py-3">
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{siteName}</span>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-border/60 bg-muted/30 p-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Your script tag
              </p>
              <code className="block text-xs text-emerald-400">
                {`<script src="https://personalisable.io/sdk.js" data-site="site_${Math.random().toString(36).slice(2, 10)}"></script>`}
              </code>
            </div>

            <div className="mt-6 flex gap-3">
              <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setStep("url")}>
                Back
              </Button>
              <Button className="flex-1 gap-2" onClick={handleConfirm}>
                Add Site
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
