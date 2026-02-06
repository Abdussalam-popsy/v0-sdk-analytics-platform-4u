"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Demo() {
  const [darkMode, setDarkMode] = useState(true)
  const [fontSize, setFontSize] = useState(16)
  const [spacing, setSpacing] = useState(1)

  return (
    <section id="demo" className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Try it yourself
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            This is what your users will see. Customize the sample site below.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_280px]">
          {/* Sample website */}
          <div
            className="overflow-hidden rounded-xl border border-border/60 transition-colors"
            style={{
              background: darkMode ? "hsl(240, 10%, 6%)" : "hsl(0, 0%, 98%)",
              color: darkMode ? "hsl(0, 0%, 95%)" : "hsl(240, 10%, 10%)",
            }}
          >
            {/* Browser chrome */}
            <div
              className="flex items-center gap-2 border-b px-4 py-3"
              style={{
                borderColor: darkMode
                  ? "hsl(240, 3.7%, 15.9%)"
                  : "hsl(240, 5.9%, 90%)",
              }}
            >
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
              </div>
              <div
                className="mx-auto rounded-md px-8 py-1 text-xs"
                style={{
                  background: darkMode
                    ? "hsl(240, 3.7%, 12%)"
                    : "hsl(240, 5.9%, 93%)",
                  color: darkMode ? "hsl(240, 5%, 64.9%)" : "hsl(240, 3.8%, 46.1%)",
                }}
              >
                samplewebsite.com
              </div>
            </div>

            {/* Page content */}
            <div className="p-8" style={{ fontSize: `${fontSize}px`, lineHeight: `${spacing + 0.5}` }}>
              <div className="mx-auto max-w-lg space-y-6">
                <div
                  className="h-6 rounded"
                  style={{
                    width: "60%",
                    background: darkMode
                      ? "hsl(0, 0%, 20%)"
                      : "hsl(0, 0%, 80%)",
                  }}
                />
                <p
                  className="leading-relaxed"
                  style={{
                    color: darkMode
                      ? "hsl(0, 0%, 70%)"
                      : "hsl(240, 3.8%, 46.1%)",
                  }}
                >
                  Welcome to our sample website. This demonstrates how
                  Personalisable lets your visitors customize their experience in
                  real-time with no account needed.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="h-24 rounded-lg"
                    style={{
                      background: darkMode
                        ? "hsl(240, 3.7%, 12%)"
                        : "hsl(240, 5.9%, 93%)",
                    }}
                  />
                  <div
                    className="h-24 rounded-lg"
                    style={{
                      background: darkMode
                        ? "hsl(240, 3.7%, 12%)"
                        : "hsl(240, 5.9%, 93%)",
                    }}
                  />
                </div>
                <p
                  className="leading-relaxed"
                  style={{
                    color: darkMode
                      ? "hsl(0, 0%, 70%)"
                      : "hsl(240, 3.8%, 46.1%)",
                  }}
                >
                  Use the controls on the right to adjust dark mode, font size,
                  and line spacing. Every change is tracked in the analytics
                  dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Control panel */}
          <div className="rounded-xl border border-border/60 bg-card p-6">
            <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Personalize
            </div>
            <p className="mb-6 text-xs text-muted-foreground">
              This is what your visitors see
            </p>

            <div className="space-y-6">
              {/* Dark mode toggle */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">
                    Dark Mode
                  </label>
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`relative h-5 w-10 rounded-full transition-colors ${
                      darkMode ? "bg-foreground" : "bg-muted-foreground"
                    }`}
                    aria-label="Toggle dark mode"
                  >
                    <div
                      className={`absolute top-0.5 h-4 w-4 rounded-full bg-background transition-transform shadow-sm ${
                        darkMode ? "translate-x-5" : "translate-x-0.5"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Font size */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">
                    Font Size
                  </label>
                  <span className="text-xs text-muted-foreground">{fontSize}px</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full accent-foreground"
                />
              </div>

              {/* Line spacing */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">
                    Line Spacing
                  </label>
                  <span className="text-xs text-muted-foreground">
                    {spacing.toFixed(1)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={spacing}
                  onChange={(e) => setSpacing(Number(e.target.value))}
                  className="w-full accent-foreground"
                />
              </div>
            </div>

            <div className="mt-8 border-t border-border/60 pt-6">
              <p className="mb-3 text-xs text-muted-foreground">
                See these interactions in your dashboard
              </p>
              <Button size="sm" className="w-full gap-2" asChild>
                <Link href="/dashboard">
                  View Dashboard
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
