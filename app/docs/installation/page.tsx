export default function InstallationPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-semibold text-foreground">Installation</h1>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Add Personalisable to your website with a single script tag. No build tools required.
      </p>

      <section className="mt-10 space-y-6">
        <div>
          <h2 className="text-lg font-medium text-foreground">Script Tag (Recommended)</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {"Add the following script tag just before the closing </body> tag in your HTML:"}
          </p>
          <div className="mt-3 rounded-lg border border-border/60 bg-muted/30 p-4">
            <code className="block text-sm text-emerald-400">
              {'<script src="https://personalisable.io/sdk.js" data-site="YOUR_SITE_ID"></script>'}
            </code>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {"Replace YOUR_SITE_ID with your actual site ID from the dashboard Settings page."}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium text-foreground">NPM Package</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            For projects using a bundler (Next.js, Vite, etc.):
          </p>
          <div className="mt-3 rounded-lg border border-border/60 bg-muted/30 p-4">
            <code className="block text-sm text-emerald-400">
              npm install @personalisable/sdk
            </code>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">Then initialize in your app entry:</p>
          <div className="mt-3 rounded-lg border border-border/60 bg-muted/30 p-4 space-y-1">
            <code className="block text-sm text-muted-foreground">
              <span className="text-emerald-400">import</span> {"{ Personalisable }"} <span className="text-emerald-400">from</span> {"'@personalisable/sdk'"}
            </code>
            <code className="block text-sm text-muted-foreground mt-2"> </code>
            <code className="block text-sm text-muted-foreground">
              Personalisable.<span className="text-emerald-400">init</span>({"{"} siteId: <span className="text-emerald-400">{"'YOUR_SITE_ID'"}</span> {"}"})
            </code>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium text-foreground">React Component</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            For React/Next.js projects, use the React wrapper:
          </p>
          <div className="mt-3 rounded-lg border border-border/60 bg-muted/30 p-4 space-y-1">
            <code className="block text-sm text-muted-foreground">
              <span className="text-emerald-400">import</span> {"{ PersonalisableProvider }"} <span className="text-emerald-400">from</span> {"'@personalisable/react'"}
            </code>
            <code className="block text-sm text-muted-foreground mt-2"> </code>
            <code className="block text-sm text-muted-foreground">
              {"<"}<span className="text-emerald-400">PersonalisableProvider</span> siteId=<span className="text-emerald-400">{'"YOUR_SITE_ID"'}</span>{">"}
            </code>
            <code className="block text-sm text-muted-foreground pl-4">
              {"<"}<span className="text-emerald-400">App</span> {"/>"}
            </code>
            <code className="block text-sm text-muted-foreground">
              {"</"}<span className="text-emerald-400">PersonalisableProvider</span>{">"}
            </code>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium text-foreground">Verify Installation</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Once installed, open your browser console and you should see:
          </p>
          <div className="mt-3 rounded-lg border border-border/60 bg-muted/30 p-4">
            <code className="block text-sm text-muted-foreground">
              [Personalisable] SDK v1.2.4 initialized for site <span className="text-emerald-400">site_k8f2m9x1p4</span>
            </code>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            The personalization widget will appear in the corner of your website within a few seconds.
          </p>
        </div>
      </section>
    </div>
  )
}
