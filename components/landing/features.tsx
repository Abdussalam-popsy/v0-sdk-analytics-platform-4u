import { Code2, Sliders, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "One Script Tag",
    description:
      "Add a single line of code to your site. No complex setup, no build steps, no dependencies.",
    code: '<script src="personalisable.io/sdk.js"></script>',
  },
  {
    icon: Sliders,
    title: "Real-Time Customization",
    description:
      "Your visitors get instant access to font, color, spacing, and layout controls. Zero friction.",
    code: null,
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "See exactly what your users prefer. Dark mode adoption, font choices, spacing preferences, and more.",
    code: null,
  },
]

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need, nothing you don't
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Simple tools that deliver powerful insights about your users'
            preferences.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-foreground/20 hover:bg-card/80"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <feature.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              {feature.code && (
                <div className="mt-4 overflow-x-auto rounded-lg bg-muted/50 p-3">
                  <code className="text-xs text-emerald-400">{feature.code}</code>
                </div>
              )}
              {!feature.code && feature.title === "Real-Time Customization" && (
                <div className="mt-4 space-y-2 rounded-lg bg-muted/50 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Font Size</span>
                    <div className="h-1.5 w-20 rounded-full bg-muted">
                      <div className="h-1.5 w-14 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Contrast</span>
                    <div className="h-1.5 w-20 rounded-full bg-muted">
                      <div className="h-1.5 w-10 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Spacing</span>
                    <div className="h-1.5 w-20 rounded-full bg-muted">
                      <div className="h-1.5 w-6 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                </div>
              )}
              {!feature.code && feature.title === "Analytics Dashboard" && (
                <div className="mt-4 flex items-end gap-1 rounded-lg bg-muted/50 p-3">
                  {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-emerald-500/40"
                      style={{ height: `${h * 0.5}px` }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
