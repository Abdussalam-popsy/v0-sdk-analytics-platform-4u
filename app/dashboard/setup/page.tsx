"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Check, Copy, ArrowRight, CheckCircle2 } from "lucide-react"
import { TopBar } from "@/components/dashboard/top-bar"

const scriptTag = '<script src="https://personalisable.io/sdk.js" data-site="YOUR_SITE_ID"></script>'

const steps = [
  {
    number: 1,
    title: "Copy your script tag",
    description: "Copy the script tag below. It contains your unique site ID.",
  },
  {
    number: 2,
    title: "Paste before </body>",
    description: "Add the script tag just before the closing </body> tag in your HTML.",
  },
  {
    number: 3,
    title: "Verify installation",
    description: "Once added, we will automatically detect the SDK on your site.",
  },
]

export default function SetupPage() {
  const router = useRouter()
  const [copied, setCopied] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [verified, setVerified] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(scriptTag)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
      setCurrentStep(1)
    }, 1500)
  }

  const handleVerify = () => {
    setCurrentStep(2)
    setTimeout(() => {
      setVerified(true)
    }, 2000)
  }

  return (
    <>
      <TopBar />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-2xl font-bold text-foreground">
            Set up your site
          </h1>
          <p className="mt-2 text-muted-foreground">
            Follow these steps to add Personalisable to your website.
          </p>

          <div className="mt-10 space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`rounded-xl border p-6 transition-colors ${
                  index <= currentStep
                    ? "border-foreground/20 bg-card"
                    : "border-border/40 bg-card/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                      index < currentStep
                        ? "bg-foreground text-background"
                        : index === currentStep
                          ? "border-2 border-foreground text-foreground"
                          : "border border-border text-muted-foreground"
                    }`}
                  >
                    {index < currentStep ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {step.description}
                    </p>

                    {/* Step 1: Copy script tag */}
                    {index === 0 && (
                      <div className="mt-4">
                        <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
                          <code className="block overflow-x-auto text-xs text-foreground">
                            {scriptTag}
                          </code>
                        </div>
                        <Button
                          size="sm"
                          className="mt-3 gap-2"
                          onClick={handleCopy}
                          disabled={copied}
                        >
                          {copied ? (
                            <>
                              <Check className="h-3.5 w-3.5" />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" />
                              Copy Script Tag
                            </>
                          )}
                        </Button>
                      </div>
                    )}

                    {/* Step 2: Paste instruction */}
                    {index === 1 && currentStep >= 1 && (
                      <div className="mt-4">
                        <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
                          <pre className="overflow-x-auto text-xs text-muted-foreground">
                            {"<body>\n  <!-- your content -->\n\n  "}
                            <span className="text-foreground">{scriptTag}</span>
                            {"\n</body>"}
                          </pre>
                        </div>
                        <Button
                          size="sm"
                          className="mt-3 gap-2"
                          onClick={handleVerify}
                          disabled={currentStep > 1}
                        >
                          I've added it
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    )}

                    {/* Step 3: Verify */}
                    {index === 2 && currentStep >= 2 && (
                      <div className="mt-4">
                        {!verified ? (
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-foreground border-t-transparent" />
                            Checking for SDK installation...
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 text-sm text-foreground">
                              <CheckCircle2 className="h-4 w-4" />
                              SDK detected on your site
                            </div>
                            <Button
                              className="gap-2"
                              onClick={() => router.push("/dashboard")}
                            >
                              Go to Dashboard
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
