import { Box, Button } from "@radix-ui/themes"

export interface NavbarItem {
  Icon?: React.ReactNode
  Title: string
  Href?: string
}

interface NavbarMenuProps {
  items: NavbarItem[]
}

export default function NavbarMenuComponent({ items }: NavbarMenuProps) {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault()
    const targetId = id.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <Box className="hidden md:flex items-center space-x-1">
      {items &&
        items.map((item, key) => {
          return (
            <Button
              key={key}
              className="text-gray-300 hover:text-secondary px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-secondary/50 rounded-lg"
              onClick={(e) => handleScroll(e, item.Href || "#")}
            >
              {item.Icon}
              <Box as="span">{item.Title}</Box>
            </Button>
          )
        })}
    </Box>
  )
}
