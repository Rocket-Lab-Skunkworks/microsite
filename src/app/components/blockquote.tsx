import { Box, Quote, Text } from "@radix-ui/themes"

interface BlockquoteProps {
    image?: string
    quote: string
    subject?: string
}
export default function BlockquoteComponent({image, quote, subject}:BlockquoteProps){
    return (
        <Text className="text-xl sm:text-2xl font-semibold text-white italic">
            <Quote>{quote}</Quote>
            {(image || subject) && (
                <Box className="text-base mt-3 text-gray-400 flex items-center justify-center lg:justify-start gap-3">
                    {image && (
                        <img src={image} alt={subject} className="h-8 w-auto" />
                    )}
                    {subject && (
                        <Box as="span">{subject}</Box>
                    )}
                </Box>
            )}
        </Text>
    )
}