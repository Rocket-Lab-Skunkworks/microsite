import { Box, Text } from "@radix-ui/themes"
import GridBlockComponent from "./components/gridBlock"
import HomepageBanner from "./components/homepageBanner"
import SectionBlockComponent from "./components/sectionBlock"
import VideoPlayerComponent from "./components/videoPlayerBlock"
import { spinalFusionVideoURL } from "./constants/homepage.constants"

export default function Home() {
  return (
    <Box>
      <HomepageBanner />

      <SectionBlockComponent
        RootClass="bg-white py-20"
        ChildClass="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <GridBlockComponent GridClass="md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <VideoPlayerComponent url={spinalFusionVideoURL} />
          <Box className="space-y4">
            <Text className="text-lg sm:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0">
              Before considering spinal fusion surgery, understand the risks and
              explore evidence-based alternatives.
            </Text>
            <Box className="h-1 w-20 bg-secondary rounded-full"></Box>
          </Box>
        </GridBlockComponent>
      </SectionBlockComponent>
    </Box>
  )
}
