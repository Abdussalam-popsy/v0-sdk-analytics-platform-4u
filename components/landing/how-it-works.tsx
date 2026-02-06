import Link from "next/link"

const steps = [
  {
    step: "01",
    title: "Add SDK to your site",
    description:
      "Copy and paste a single script tag before your closing body tag. That's it.",
    visual: "code",
  },
  {
    step: "02",
    title: "Visitors customize instantly",
    description:
      "A sleek control panel appears on your site. Visitors adjust fonts, colors, spacing, and more in real time.",
    visual: "panel",
  },
  {
    step: "03",
    title: "View insights in dashboard",
    description:
      "See what your users actually prefer. Make data-driven design decisions based on real behavior.",
    visual: "chart",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Up and running in minutes
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Three simple steps to understand your users better.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.step} className="relative">
              <div className="mb-4 text-5xl font-bold text-foreground/10">
                {step.step}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>

              {step.visual === "code" && (
                <div className="rounded-lg border border-border/60 bg-card p-4">
                  <div className="mb-2 flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                  </div>
                  <pre className="overflow-x-auto text-xs">
                    <code className="text-muted-foreground">
                      {"<body>\n  <!-- your content -->\n\n  "}
                      <span className="text-foreground">
                        {'<script src="personalisable.io/sdk.js">'}
                      </span>
                      {"\n  "}
                      <span className="text-foreground">{"</script>"}</span>
                      {"\n</body>"}
                    </code>
                  </pre>
                </div>
              )}

              {step.visual === "panel" && (
                <div className="rounded-lg border border-border/60 bg-card p-4">
                  <div className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Personalize
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-foreground">Dark Mode</span>
                      <div className="h-4 w-8 rounded-full bg-foreground p-0.5">
                        <div className="ml-auto h-3 w-3 rounded-full bg-background" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-xs text-foreground">Font Size</span>
                        <span className="text-[10px] text-muted-foreground">18px</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-muted">
                        <div className="h-1.5 w-3/4 rounded-full bg-foreground" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-xs text-foreground">Spacing</span>
                        <span className="text-[10px] text-muted-foreground">Wider</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-muted">
                        <div className="h-1.5 w-1/2 rounded-full bg-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step.visual === "chart" && (
                <Link href="/dashboard" className="block">
                    <div className="rounded-lg border border-border/60 bg-card p-4 transition-colors hover:border-foreground/20">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-medium text-foreground">
                        Customizations
                      </span>
                      <span className="text-xs text-foreground">+23%</span>
                    </div>
                    <div className="flex items-end gap-1.5">
                      {[30, 50, 40, 70, 55, 80, 65].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm bg-foreground/30 transition-all hover:bg-foreground/50"
                          style={{ height: `${h * 0.6}px` }}
                        />
                      ))}
                    </div>
                    <p className="mt-2 text-[10px] text-muted-foreground">
                      View full dashboard &rarr;
                    </p>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
