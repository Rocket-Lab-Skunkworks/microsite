import { Box } from "@radix-ui/themes"

interface GridBlockProps{
    Id?: string,
    GridClass?: string,
    children: React.ReactNode
}

export default function GridBlockComponent({Id, GridClass, children}:GridBlockProps){
    return (
        <Box className={`grid md:grid-cols-2 items-center ${GridClass}`} id={Id}>
            {children}
        </Box>
    )
}