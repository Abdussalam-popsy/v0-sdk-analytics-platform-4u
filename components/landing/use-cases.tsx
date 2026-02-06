import { Accessibility, FlaskConical, SplitSquareVertical } from "lucide-react"

const useCases = [
  {
    icon: Accessibility,
    title: "Accessibility Compliance",
    description:
      "Let users adjust font size, contrast, and spacing to meet their accessibility needs. Track adoption of accessibility features.",
  },
  {
    icon: FlaskConical,
    title: "User Preference Research",
    description:
      "Understand what your users actually want. See which customizations are most popular and make informed design decisions.",
  },
  {
    icon: SplitSquareVertical,
    title: "A/B Testing Without Code",
    description:
      "Let users self-select their preferred experience. Get natural A/B test results without complex infrastructure.",
  },
]

export function UseCases() {
  return (
    <section className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for real-world use cases
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From accessibility to research, Personalisable adapts to your needs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                <useCase.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {useCase.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
