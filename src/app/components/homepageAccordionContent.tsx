import { Box, Link, Text } from "@radix-ui/themes"
import { NEWTAB_ICON } from "../constants/icon.constants"

export const FirstAccordionContent = () => {
    return (
        <Box className="mt-2 p-3 sm:p-4 bg-white/3 rounded-xl border border-white/5">
            <Text className="text-gray-300 mb-2 text-sm sm:text-base">
                Including infection, nerve damage, and blood clots
            </Text>
            <Link href="https://www.sydney.edu.au/medicine-health/news-and-events/news/2022/04/12/orthopaedic-surgeries-doing-more-harm-than-good.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-secondary hover:text-secondary/80 text-sm gap-1.5 transition-colors">
                University of Sydney
                <NEWTAB_ICON />
            </Link>
        </Box>
    )
}

export const SecondAccordionContent = () => {
    return ( 
        <Box className="mt-2 p-3 sm:p-4 bg-white/3 rounded-xl border border-white/5">
            <Text className="text-gray-300 mb-2 text-sm sm:text-base">
                Within 10 years of initial surgery
            </Text>
            <Link href="https://www.sydney.edu.au/medicine-health/news-and-events/news/2022/04/12/orthopaedic-surgeries-doing-more-harm-than-good.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-secondary hover:text-secondary/80 text-sm gap-1.5 transition-colors">
                University of NSW
                <NEWTAB_ICON />
            </Link>
        </Box>
    )
}

export const ThirdAccordionContent = () => {
    return (
        <Box className="mt-2 p-3 sm:p-4 bg-white/3 rounded-xl border border-white/5">
            <Text className="text-gray-300 mb-2 text-sm sm:text-base">
                Patients not returning to full capacity
            </Text>
            <Link href="https://www.sydney.edu.au/medicine-health/news-and-events/news/2022/04/12/orthopaedic-surgeries-doing-more-harm-than-good.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-secondary hover:text-secondary/80 text-sm gap-1.5 transition-colors">
                Spine, 2011
                <NEWTAB_ICON />
            </Link>
        </Box>
    )
}