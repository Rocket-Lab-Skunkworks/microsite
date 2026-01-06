import { Box, Quote, Text } from "@radix-ui/themes"
import Image from "next/image"

interface BlockquoteProps {
  image?: string
  quote: string
  subject?: string
}
export default function BlockquoteComponent({
  image,
  quote,
  subject,
}: BlockquoteProps) {
  return (
    <Text className="text-xl sm:text-2xl font-semibold text-white italic">
      <Quote>{quote}</Quote>
      {(image || subject) && (
        <Box className="text-base mt-3 text-gray-400 flex items-center justify-center lg:justify-start gap-3">
          {image && (
            <Image
              src={image}
              alt={subject || ""}
              width="24"
              height="24"
              className="h-8 w-auto bg-white p-1.5"
            />
          )}
          {subject && <Box as="span">{subject}</Box>}
        </Box>
      )}
    </Text>
  )
}
