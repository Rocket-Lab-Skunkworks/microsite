import { Box } from "@radix-ui/themes"

interface GridBlockProps {
  Id?: string
  GridClass?: string
  children: React.ReactNode
}

export default function GridBlockComponent({
  Id,
  GridClass,
  children,
}: GridBlockProps) {
  return (
    <Box className={`grid ${GridClass}`} id={Id}>
      {children}
    </Box>
  )
}
