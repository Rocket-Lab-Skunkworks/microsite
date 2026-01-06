import { Box } from "@radix-ui/themes"
import {
  LUNGS_ICON,
  PULSE_ICON,
  WARNING_ICON,
} from "../constants/icon.constants"
import { AccordionItemStyle } from "../theme/homepageAccordion"
import BlockquoteComponent from "./blockquote"
import ButtonCollapsible, { AccordionItemClass } from "./buttonCollapsible"
import {
  FirstAccordionContent,
  SecondAccordionContent,
  ThirdAccordionContent,
} from "./homepageAccordionContent"

export default function HomepageBanner() {
  const accordionDataItem: AccordionItemClass[] = [
    {
      ItemIcon: <WARNING_ICON width="24" height="24" />,
      ItemTitle: "1 in 6",
      ItemSubTitle: "have serious complications",
      ItemContent: FirstAccordionContent(),
      ItemClass: "relative",
      ItemTriggerClass: AccordionItemStyle,
    },
    {
      ItemIcon: <PULSE_ICON width="24" height="24" />,
      ItemTitle: "1 in 5",
      ItemSubTitle: "need revision surgery",
      ItemContent: SecondAccordionContent(),
      ItemClass: "relative",
      ItemTriggerClass: AccordionItemStyle,
    },
    {
      ItemIcon: <LUNGS_ICON width="24" height="24" />,
      ItemTitle: "3 in 4",
      ItemSubTitle: "have limited recovery",
      ItemContent: ThirdAccordionContent(),
      ItemClass: "relative",
      ItemTriggerClass: AccordionItemStyle,
    },
  ]

  return (
    <Box className="relative min-h-dvh bg-linear-to-b from-gray-900 to-gray-600 py-20 lg:py-0">
      <Box className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')]"></Box>
      <Box className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-dvh flex items-center">
        <Box className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* {THINK TWICE} */}
          <Box className="text-center lg:text-left space-y-6 md:space-y-8">
            <Box className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight flex gap-4">
                Think
                <Box as="span" className="relative">
                  <Box as="span" className="text-secondary">
                    Twice
                  </Box>
                  <Box
                    as="span"
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-secondary/30 rounded-full"
                  ></Box>
                </Box>
              </h1>
              <BlockquoteComponent
                image="/assets/images/the-university-of-sydney-3.svg"
                subject="University of Sydney"
                quote="Spinal fusion is the riskiest type of surgery for back pain."
              />
            </Box>
          </Box>

          {/* {BOX} */}
          <Box className="lg:pl-12">
            <Box className="bg-white/8 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
              <ButtonCollapsible
                Type="single"
                RootClass="space-y-3 sm:space-y-4"
                Data={accordionDataItem}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
