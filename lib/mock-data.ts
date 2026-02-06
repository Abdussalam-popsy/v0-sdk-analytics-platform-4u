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

export const mockUsers = [
  { id: "usr_01", ip: "192.168.1.***", city: "London", country: "GB", lastActive: "2 min ago", sessions: 14, customizations: ["Dark Mode", "Font Size +2"], device: "Desktop", browser: "Chrome" },
  { id: "usr_02", ip: "10.0.0.***", city: "New York", country: "US", lastActive: "5 min ago", sessions: 8, customizations: ["Sans to Serif", "Spacing Wider"], device: "Mobile", browser: "Safari" },
  { id: "usr_03", ip: "172.16.0.***", city: "Berlin", country: "DE", lastActive: "12 min ago", sessions: 22, customizations: ["Dark Mode", "High Contrast"], device: "Desktop", browser: "Firefox" },
  { id: "usr_04", ip: "192.168.2.***", city: "Tokyo", country: "JP", lastActive: "18 min ago", sessions: 5, customizations: ["Font Size +4"], device: "Tablet", browser: "Safari" },
  { id: "usr_05", ip: "10.1.1.***", city: "Paris", country: "FR", lastActive: "25 min ago", sessions: 31, customizations: ["Dark Mode", "Sans to Serif", "Spacing Wider"], device: "Desktop", browser: "Chrome" },
  { id: "usr_06", ip: "172.16.1.***", city: "Sydney", country: "AU", lastActive: "32 min ago", sessions: 9, customizations: ["Warm Theme"], device: "Mobile", browser: "Chrome" },
  { id: "usr_07", ip: "192.168.3.***", city: "Toronto", country: "CA", lastActive: "45 min ago", sessions: 17, customizations: ["Dark Mode", "Font Size +2", "Compact Layout"], device: "Desktop", browser: "Edge" },
  { id: "usr_08", ip: "10.2.0.***", city: "Amsterdam", country: "NL", lastActive: "1 hr ago", sessions: 3, customizations: ["High Contrast"], device: "Desktop", browser: "Firefox" },
  { id: "usr_09", ip: "172.16.2.***", city: "Seoul", country: "KR", lastActive: "1 hr ago", sessions: 11, customizations: ["Dark Mode", "Cool Theme"], device: "Mobile", browser: "Samsung" },
  { id: "usr_10", ip: "192.168.4.***", city: "Dublin", country: "IE", lastActive: "2 hr ago", sessions: 6, customizations: ["Font Size +2", "Spacing Wider"], device: "Desktop", browser: "Chrome" },
]

export const mockElements = [
  { id: "el_01", name: "Dark Mode Toggle", type: "toggle", selector: "[data-p-darkmode]", enabled: true, usage: 68, description: "Allows users to switch between light and dark theme" },
  { id: "el_02", name: "Font Size Control", type: "slider", selector: "[data-p-fontsize]", enabled: true, usage: 45, description: "Users can adjust the base font size from 14px to 24px" },
  { id: "el_03", name: "Font Family Picker", type: "select", selector: "[data-p-fontfamily]", enabled: true, usage: 32, description: "Choose between Sans, Serif, and Monospace font families" },
  { id: "el_04", name: "Color Scheme", type: "select", selector: "[data-p-colorscheme]", enabled: false, usage: 28, description: "Pick a preset color scheme (warm, cool, neutral)" },
  { id: "el_05", name: "Spacing Control", type: "slider", selector: "[data-p-spacing]", enabled: true, usage: 15, description: "Adjust content spacing between compact, default, and wide" },
  { id: "el_06", name: "High Contrast", type: "toggle", selector: "[data-p-contrast]", enabled: true, usage: 12, description: "Boost contrast ratios for better accessibility" },
  { id: "el_07", name: "Layout Density", type: "select", selector: "[data-p-layout]", enabled: false, usage: 8, description: "Switch between compact, comfortable, and spacious layouts" },
]

export const mockInsights = {
  retentionWithCustomization: 72,
  retentionWithout: 41,
  avgCustomizationsPerUser: 2.3,
  topCombinations: [
    { combo: ["Dark Mode", "Font Size +2"], users: 842, percentage: 34 },
    { combo: ["Dark Mode", "Sans to Serif"], users: 521, percentage: 21 },
    { combo: ["Dark Mode", "Spacing Wider"], users: 398, percentage: 16 },
    { combo: ["High Contrast", "Font Size +4"], users: 287, percentage: 12 },
    { combo: ["Warm Theme", "Serif Font"], users: 201, percentage: 8 },
  ],
  hourlyActivity: [
    { hour: "00", count: 45 }, { hour: "02", count: 23 }, { hour: "04", count: 12 },
    { hour: "06", count: 34 }, { hour: "08", count: 120 }, { hour: "10", count: 245 },
    { hour: "12", count: 310 }, { hour: "14", count: 290 }, { hour: "16", count: 265 },
    { hour: "18", count: 195 }, { hour: "20", count: 156 }, { hour: "22", count: 89 },
  ],
  deviceBreakdown: [
    { device: "Desktop", percentage: 58 },
    { device: "Mobile", percentage: 34 },
    { device: "Tablet", percentage: 8 },
  ],
}

export const mockSettings = {
  siteId: "site_k8f2m9x1p4",
  apiKey: "pk_live_personalisable_2f8k9m1x4p7q3r6t",
  sdkVersion: "1.2.4",
  widgetPosition: "bottom-right" as const,
  widgetTheme: "auto" as const,
  allowedOrigins: ["https://myawesomesite.com", "https://www.myawesomesite.com"],
  notifications: {
    email: true,
    weeklyDigest: true,
    alertOnSpike: false,
  },
}
