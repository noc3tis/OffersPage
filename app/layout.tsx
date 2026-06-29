//Implementacion del IBM_Plex_Serif
import { Geist, Geist_Mono, Inter, IBM_Plex_Serif } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Weight } from "lucide-react";
import { Metadata } from "next";

//Constructores de cada font 
const inter = Inter({subsets:['latin'],variable:'--font-inter'});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-ibmplex-serif'
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

//Meta data paralos datos de la app
export const metadata: Metadata = {
  title: "Offers",
  description: "Offers is a platform for people that always want to save something.",
  icons: {
    icon: '/icons/logo.svg'
  }
}

//El body va a abrcar toda la app y el children es el componente a mostrar en ese momento, mientras que el classname viene directo de javascript y permite usar ambas fonts en toda la app
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  )
}
