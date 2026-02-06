"use client"

import { useState } from "react"
import { TopBar } from "@/components/dashboard/top-bar"
import { mockElements } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"
import { ToggleLeft, SlidersHorizontal, List, Code } from "lucide-react"

const typeIcon = {
  toggle: ToggleLeft,
  slider: SlidersHorizontal,
  select: List,
}

export default function ElementsPage() {
  const [elements, setElements] = useState(mockElements)

  const toggleElement = (id: string) => {
    setElements(
      elements.map((el) =>
        el.id === id ? { ...el, enabled: !el.enabled } : el
      )
    )
  }

  return (
    <>
      <TopBar />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-7xl space-y-6">
          <div>
            <h1 className="text-xl font-semibold text-foreground">Elements</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage which elements visitors can personalize on your site.
            </p>
          </div>

          <div className="grid gap-4">
            {elements.map((element) => {
              const TypeIcon = typeIcon[element.type as keyof typeof typeIcon] || Code
              return (
                <div
                  key={element.id}
                  className="flex items-center gap-4 rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-foreground/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                    <TypeIcon className="h-5 w-5 text-foreground" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-foreground">{element.name}</h3>
                      <Badge variant="secondary" className="text-[10px] font-normal font-mono">
                        {element.type}
                      </Badge>
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">{element.description}</p>
                    <div className="mt-2 flex items-center gap-4">
                      <code className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-mono text-emerald-400">
                        {element.selector}
                      </code>
                      <span className="text-xs text-muted-foreground">
                        {element.usage}% of visitors use this
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Usage bar */}
                    <div className="hidden w-24 sm:block">
                      <div className="h-1.5 w-full rounded-full bg-muted">
                        <div
                          className="h-1.5 rounded-full bg-emerald-500 transition-all"
                          style={{ width: `${element.usage}%` }}
                        />
                      </div>
                    </div>

                    {/* Toggle */}
                    <button
                      onClick={() => toggleElement(element.id)}
                      className={`relative h-6 w-11 rounded-full transition-colors ${
                        element.enabled ? "bg-foreground" : "bg-muted"
                      }`}
                      role="switch"
                      aria-checked={element.enabled}
                      aria-label={`Toggle ${element.name}`}
                    >
                      <span
                        className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-background transition-transform ${
                          element.enabled ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}
