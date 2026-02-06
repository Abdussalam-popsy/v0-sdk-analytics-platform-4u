import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-muted/50 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-muted/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            Now in public beta
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Let Your Users Customize Your Site
            <span className="block text-muted-foreground">No Account Needed</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Drop in one script tag. Your visitors instantly get personalization
            controls. You get insights into what they actually want.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 px-8" asChild>
              <Link href="/dashboard">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 bg-transparent" asChild>
              <Link href="#demo">View Demo</Link>
            </Button>
          </div>
        </div>

        {/* Hero visual - split screen mockup */}
        <div className="mx-auto mt-20 max-w-5xl">
            <div className="rounded-xl border border-border/60 bg-card/50 p-1 shadow-2xl shadow-background/50 backdrop-blur-sm">
            <div className="grid gap-1 md:grid-cols-2">
              {/* Before */}
              <div className="rounded-lg bg-muted/30 p-6">
                <div className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Before
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-3/4 rounded bg-muted-foreground/10" />
                  <div className="h-4 w-full rounded bg-muted-foreground/10" />
                  <div className="h-4 w-5/6 rounded bg-muted-foreground/10" />
                  <div className="mt-6 h-32 rounded-lg bg-muted-foreground/5" />
                  <div className="flex gap-3">
                    <div className="h-8 w-20 rounded bg-muted-foreground/10" />
                    <div className="h-8 w-20 rounded bg-muted-foreground/10" />
                  </div>
                </div>
              </div>

              {/* After - with floating controls */}
              <div className="relative rounded-lg bg-muted/30 p-6">
                <div className="mb-3 text-xs font-medium uppercase tracking-wider text-foreground">
                  After - Personalized
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-3/4 rounded bg-foreground/20" />
                  <div className="h-4 w-full rounded bg-foreground/15" />
                  <div className="h-4 w-5/6 rounded bg-foreground/20" />
                  <div className="mt-6 h-32 rounded-lg bg-foreground/10" />
                  <div className="flex gap-3">
                    <div className="h-8 w-20 rounded bg-foreground/30" />
                    <div className="h-8 w-20 rounded bg-foreground/15" />
                  </div>
                </div>
                {/* Floating control panel */}
                <div className="absolute -right-2 top-12 w-40 rounded-lg border border-border/60 bg-card p-3 shadow-lg md:-right-4">
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Customize
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground">Dark Mode</span>
                      <div className="h-3 w-6 rounded-full bg-foreground" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground">Font Size</span>
                      <div className="h-1 w-10 rounded-full bg-muted">
                        <div className="h-1 w-7 rounded-full bg-foreground" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground">Spacing</span>
                      <div className="h-1 w-10 rounded-full bg-muted">
                        <div className="h-1 w-4 rounded-full bg-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
