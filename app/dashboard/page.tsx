import { TopBar } from "@/components/dashboard/top-bar"
import { StatCards } from "@/components/dashboard/stat-cards"
import { PopularCustomizations } from "@/components/dashboard/popular-customizations"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { TrendsChart } from "@/components/dashboard/trends-chart"

export default function DashboardPage() {
  return (
    <>
      <TopBar />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-7xl space-y-6">
          <StatCards />

          <div className="grid gap-6 lg:grid-cols-2">
            <PopularCustomizations />
            <ActivityFeed />
          </div>

          <TrendsChart />
        </div>
      </main>
    </>
  )
}
