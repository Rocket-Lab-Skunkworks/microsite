import { Metadata } from "next"
import "./globals.css"
import { GoogleAnalytics } from "@next/third-parties/google"
import { GTMID, SITE_ENV } from "./constants/global.constants"
import NavbarComponent from "./components/navbar"
import FooterComponent from "./components/footer"
import { Inter } from "next/font/google"

export const metadata: Metadata = {
  title: "Know Before You Go - Informed Decisions for Better Health Outcomes",
  description:
    "Empowering patients with comprehensive information about surgical procedures, risks, and recovery to ensure a safe and informed medical journey.",
  keywords: [
    "surgery preparation",
    "patient education",
    "surgical risks",
    "recovery guide",
    "Australia health",
  ],
  openGraph: {
    title: "Know Before You Go | Surgery Education Australia",
    description:
      "Understand every step of your surgical procedure before you go under. Expert advice on preparation and recovery.",
    url: "https://knowbeforeyougo.au/",
    siteName: "Know Before You Go Surgery",
    type: "website",
  },
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/next.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {SITE_ENV == "production" && <GoogleAnalytics gaId={GTMID} />}
      </head>
      <body className={inter.className}>
        <div id="root">
          <div className="min-h-screen">
            <NavbarComponent />
            {children}
            <FooterComponent />
          </div>
        </div>
      </body>
    </html>
  )
}
