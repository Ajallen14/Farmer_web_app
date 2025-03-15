import "./globals.css"

export const metadata = {
  title: "FarmConnect",
  description: "Connecting farmers with technology",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen">{children}</body>
    </html>
  )
}

