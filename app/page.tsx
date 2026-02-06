import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Demo } from "@/components/landing/demo"
import { UseCases } from "@/components/landing/use-cases"
import { Pricing } from "@/components/landing/pricing"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Demo />
        <UseCases />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
