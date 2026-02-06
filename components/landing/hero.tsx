import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-32">
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-blob-1 absolute -left-32 top-1/4 h-[700px] w-[700px] rounded-full bg-emerald-500/20 blur-[140px]" />
        <div className="hero-blob-2 absolute -right-32 top-1/4 h-[600px] w-[600px] rounded-full bg-white/10 blur-[120px]" />
        <div className="hero-blob-3 absolute -bottom-32 left-1/4 h-[650px] w-[650px] rounded-full bg-emerald-400/15 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            Now in public beta
          </div>

          <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[56px]">
            Let Your Users{" "}
            <span className="inline-flex items-baseline gap-1 rounded-md bg-emerald-950/50 px-3 py-1 font-mono text-[0.85em] text-emerald-400">
              <span className="text-emerald-600">{"<"}</span>
              Personalise
              <span className="text-emerald-600">{"/>"}</span>
            </span>{" "}
            Your Site
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
                {/* Chat bubble */}
                <div className="absolute -right-2 bottom-6 w-56 md:-right-8">
                  <div className="overflow-hidden rounded-xl border border-border/60 bg-card shadow-lg">
                    {/* Chat header */}
                    <div className="flex items-center gap-2 border-b border-border/40 px-3 py-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-[10px] font-medium text-muted-foreground">Visitor</span>
                      <span className="ml-auto text-[9px] text-muted-foreground/60">just now</span>
                    </div>
                    {/* Message */}
                    <div className="px-3 py-2.5">
                      <div className="flex gap-2">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted text-[9px] font-semibold text-foreground">
                          V
                        </div>
                        <div className="space-y-1.5">
                          <div className="rounded-lg rounded-tl-sm bg-muted px-2.5 py-1.5">
                            <p className="text-[11px] leading-relaxed text-foreground">
                              {"Make the text "}
                              <span className="font-bold">bold</span>
                              {" and increase the font size"}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="h-[3px] w-[3px] animate-pulse rounded-full bg-muted-foreground/60" />
                            <span className="h-[3px] w-[3px] animate-pulse rounded-full bg-muted-foreground/60 [animation-delay:150ms]" />
                            <span className="h-[3px] w-[3px] animate-pulse rounded-full bg-muted-foreground/60 [animation-delay:300ms]" />
                            <span className="ml-1 text-[9px] text-muted-foreground/50">applying...</span>
                          </div>
                        </div>
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
