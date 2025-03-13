import "./globals.css"

export const metadata = {
  title: "FarmConnect - Your Farming Platform",
  description: "Connect with farmers, get market prices, weather forecasts, and crop care tips.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}