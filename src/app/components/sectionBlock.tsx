import { Box } from "@radix-ui/themes"

interface SectionBlockProps {
  Id?: string
  RootClass?: string
  ChildClass?: string
  children?: React.ReactNode
}

export default function SectionBlockComponent({
  Id,
  RootClass,
  ChildClass,
  children,
}: SectionBlockProps) {
  return (
    <section id={Id} className={RootClass}>
      <Box className={ChildClass}>{children}</Box>
    </section>
  )
}
