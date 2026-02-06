import Link from "next/link"
import { ArrowRight, Code, Settings, Layers, Zap } from "lucide-react"

const quickLinks = [
  { title: "Installation", description: "Add the SDK to your site in under a minute.", href: "/docs/installation", icon: Code },
  { title: "Configuration", description: "Customize the widget behavior and appearance.", href: "/docs/configuration", icon: Settings },
  { title: "Elements", description: "Learn how to mark elements as personalizable.", href: "/docs/elements", icon: Layers },
  { title: "API Reference", description: "Full reference for the JavaScript SDK API.", href: "/docs/api", icon: Zap },
]

export default function DocsPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-semibold text-foreground">Documentation</h1>
      <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
        Everything you need to add user personalization to your website.
        Drop in one script tag and your visitors get instant customization controls.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {quickLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="group rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-foreground/20"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
              <link.icon className="h-4 w-4 text-foreground" />
            </div>
            <h3 className="text-sm font-medium text-foreground">{link.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{link.description}</p>
            <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
              Read more <ArrowRight className="h-3 w-3" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-border/60 bg-card p-6">
        <h2 className="text-lg font-medium text-foreground">Quick Start</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Add personalization to your site in 3 steps:
        </p>
        <ol className="mt-4 space-y-3">
          <li className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-foreground">1</span>
            <div>
              <p className="text-sm text-foreground">Add the script tag before {'</body>'}</p>
              <div className="mt-2 rounded-lg bg-muted/50 p-3">
                <code className="text-xs text-emerald-400">
                  {'<script src="https://personalisable.io/sdk.js" data-site="YOUR_SITE_ID"></script>'}
                </code>
              </div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-foreground">2</span>
            <div>
              <p className="text-sm text-foreground">Mark elements with data attributes</p>
              <div className="mt-2 rounded-lg bg-muted/50 p-3">
                <code className="text-xs text-emerald-400">
                  {'<body data-p-darkmode data-p-fontsize data-p-spacing>'}
                </code>
              </div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-foreground">3</span>
            <p className="text-sm text-foreground">
              That's it. The widget appears automatically and your visitors can personalize their experience.
            </p>
          </li>
        </ol>
      </div>
    </div>
  )
}
