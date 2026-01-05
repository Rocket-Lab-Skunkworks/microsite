import { Box, Button } from "@radix-ui/themes"

interface ButtonIconProps {
  IconPosition: "left" | "right"
  Icon?: React.ReactNode
  Text: string
  Description?: string
  OnClick?: () => void
}
export default function ButtonIcon({
  IconPosition,
  Icon,
  Text,
  Description,
  OnClick,
}: ButtonIconProps) {
  return (
    <Button
      className="w-full text-left focus:outline-none focus:ring-2 focus:ring-secondary/50 rounded-xl"
      onClick={OnClick}
    >
      <Box className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/3 hover:bg-white/6 border border-white/5 transition-colors">
        {IconPosition == "left" && Icon && (
          <Box className="bg-secondary/20 p-2 sm:p-3 rounded-full">{Icon}</Box>
        )}
        <Box className="flex-1 min-w-0">
          <Box className="flex flex-col gap-1">
            <Box className="flex items-baseline gap-2">
              <Box
                as="span"
                className="text-2xl sm:text-3xl font-bold text-white"
              >
                {Text}
              </Box>
            </Box>
            <Box className="text-sm sm:text-base text-gray-300">
              {Description}
            </Box>
          </Box>
        </Box>
      </Box>
    </Button>
  )
}
