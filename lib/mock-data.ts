export const stats = [
  {
    title: "Total Customizations",
    value: "12,847",
    change: "+23%",
    changeLabel: "this week",
    data: [
      { day: "Mon", value: 1200 },
      { day: "Tue", value: 1800 },
      { day: "Wed", value: 1400 },
      { day: "Thu", value: 2200 },
      { day: "Fri", value: 1900 },
      { day: "Sat", value: 2400 },
      { day: "Sun", value: 1947 },
    ],
  },
  {
    title: "Active Users Now",
    value: "247",
    change: "+12%",
    changeLabel: "vs yesterday",
    data: [],
  },
  {
    title: "Most Popular Change",
    value: "Dark Mode",
    change: "68%",
    changeLabel: "of users",
    data: [],
  },
  {
    title: "Avg. Session",
    value: "4m 32s",
    change: "+8%",
    changeLabel: "this week",
    data: [],
  },
]

export const popularCustomizations = [
  { name: "Dark Mode Toggle", percentage: 68, color: "hsl(0, 0%, 98%)" },
  { name: "Font Size +2", percentage: 45, color: "hsl(0, 0%, 70%)" },
  { name: "Sans to Serif", percentage: 32, color: "hsl(0, 0%, 50%)" },
  { name: "Color Scheme", percentage: 28, color: "hsl(0, 0%, 35%)" },
  { name: "Spacing Wider", percentage: 15, color: "hsl(0, 0%, 20%)" },
]

export const activityTemplates = [
  {
    icon: "moon",
    action: "enabled dark mode",
    cities: ["London", "Paris", "Dublin", "Amsterdam", "Berlin"],
  },
  {
    icon: "type",
    action: "changed font to Inter",
    cities: ["NYC", "San Francisco", "Chicago", "Boston", "Seattle"],
  },
  {
    icon: "palette",
    action: "switched to warm theme",
    cities: ["Berlin", "Munich", "Vienna", "Zurich", "Prague"],
  },
  {
    icon: "text",
    action: "increased font size",
    cities: ["Tokyo", "Osaka", "Seoul", "Singapore", "Sydney"],
  },
  {
    icon: "layout",
    action: "changed layout to compact",
    cities: ["Toronto", "Vancouver", "Montreal", "Melbourne", "Auckland"],
  },
  {
    icon: "contrast",
    action: "enabled high contrast",
    cities: ["Stockholm", "Helsinki", "Copenhagen", "Oslo", "Reykjavik"],
  },
  {
    icon: "spacing",
    action: "adjusted spacing wider",
    cities: ["Madrid", "Barcelona", "Lisbon", "Rome", "Milan"],
  },
  {
    icon: "palette",
    action: "switched to cool theme",
    cities: ["Mumbai", "Delhi", "Bangalore", "Jakarta", "Bangkok"],
  },
]

export const trendData = [
  { date: "Mon", darkMode: 320, fontSize: 180, fontFamily: 120, colorScheme: 95, spacing: 60 },
  { date: "Tue", darkMode: 480, fontSize: 220, fontFamily: 140, colorScheme: 110, spacing: 75 },
  { date: "Wed", darkMode: 390, fontSize: 200, fontFamily: 160, colorScheme: 130, spacing: 85 },
  { date: "Thu", darkMode: 560, fontSize: 280, fontFamily: 180, colorScheme: 150, spacing: 90 },
  { date: "Fri", darkMode: 490, fontSize: 240, fontFamily: 155, colorScheme: 120, spacing: 70 },
  { date: "Sat", darkMode: 620, fontSize: 310, fontFamily: 190, colorScheme: 160, spacing: 100 },
  { date: "Sun", darkMode: 540, fontSize: 260, fontFamily: 170, colorScheme: 140, spacing: 80 },
]

export const sites = [
  { name: "myawesomesite.com", active: true },
  { name: "blog.example.com", active: false },
  { name: "docs.example.com", active: false },
]
