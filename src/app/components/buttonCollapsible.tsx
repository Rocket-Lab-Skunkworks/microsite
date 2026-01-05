import { Box } from "@radix-ui/themes"
import { Accordion } from "radix-ui"

export interface AccordionItemClass {
  ItemClass?: string
  ItemHeaderClass?: string
  ItemTriggerClass?: string
  ItemTitle: string
  ItemSubTitle?: string
  ItemContent?: React.ReactNode
  ItemIcon?: React.ReactNode
}

interface AccordionProps {
  Type: "single" | "multiple"
  RootClass: string
  Data: AccordionItemClass[]
}
export default function ButtonCollapsible({
  Type,
  RootClass,
  Data,
}: AccordionProps) {
  return (
    <Accordion.Root type={Type} collapsible className={RootClass}>
      {Data &&
        Data.map((item, key) => (
          <Accordion.Item
            key={key}
            className={item.ItemClass}
            value={key.toString()}
          >
            <Accordion.Header className={item.ItemHeaderClass}>
              <Accordion.Trigger className={item.ItemTriggerClass}>
                <Box className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/3 hover:bg-white/6 border border-white/5 transition-colors cursor-pointer">
                  <Box className="bg-secondary/20 p-2 sm:p-3 rounded-full">
                    {item.ItemIcon}
                  </Box>
                  <Box className="flex-1 min-w-0">
                    <Box className="flex flex-col gap-1">
                      <Box className="flex items-baseline gap-2">
                        <Box
                          as="span"
                          className="text-2xl sm:text-3xl font-bold text-white"
                        >
                          {item.ItemTitle}
                        </Box>
                      </Box>
                      <Box className="text-sm sm:text-base text-gray-300">
                        {item.ItemSubTitle}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>{item.ItemContent}</Accordion.Content>
          </Accordion.Item>
        ))}
    </Accordion.Root>
  )
}
