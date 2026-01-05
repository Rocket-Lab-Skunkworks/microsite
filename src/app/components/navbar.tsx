"use client"
import Link from "next/link"
import { LOGO_ICON, MENU_ICONS } from "../constants/icon.constants"
import NavbarMenuComponent, { NavbarItem } from "./navbar-menu"
import { useEffect, useState } from "react"
import { Box } from "@radix-ui/themes"

export default function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false)
  const menu: NavbarItem[] = [
    {
      Icon: (
        <MENU_ICONS.Risk
          width="24"
          height="24"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
      ),
      Title: "Risks",
      Href: "#video",
    },
    {
      Icon: (
        <MENU_ICONS.Plain
          width="24"
          height="24"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
      ),
      Title: "Pain explained",
      Href: "#chronic",
    },
    {
      Icon: (
        <MENU_ICONS.SecondOpinion
          width="24"
          height="24"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
      ),
      Title: "Second Opinion",
      Href: "#faq",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900" : "bg-transparent"}`}
    >
      <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Box className="flex justify-between items-center h-16 md:h-20">
          <Link
            href="#"
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-secondary/50 rounded-lg p-1"
          >
            <LOGO_ICON width="24" height="24" className="text-secondary" />
            <Box as="span" className="text-xl font-bold">
              <Box as="span" className="text-white">
                Know
              </Box>
              <Box as="span" className="text-secondary">
                Before
              </Box>
              <Box as="span" className="text-white">
                You
              </Box>
              <Box as="span" className="text-secondary">
                Go
              </Box>
            </Box>
          </Link>
          <NavbarMenuComponent items={menu} />
        </Box>
      </Box>
    </nav>
  )
}
