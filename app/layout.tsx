import "./global.css"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMonoNonVariable } from "geist/font/mono-non-variable"
import { Navbar } from "./components/nav"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "./components/footer"
import { baseUrl } from "./sitemap"
import Providers from "./components/Providers"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "David Rivera",
    template: "%s | David Rivera Portfolio",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ")

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={cx(GeistSans.className)}
    >
      <Providers>
        <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto bg-background">
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 bg-background">
            <div className="container min-h-screen bg-background">
              <Navbar />
              {children}
              <Footer />

              <Analytics />
              <SpeedInsights />
            </div>
          </main>
        </body>
      </Providers>
    </html>
  )
}
