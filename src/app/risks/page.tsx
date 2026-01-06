import { Box, DataList, Heading } from "@radix-ui/themes"
import SectionBlockComponent from "../components/sectionBlock"
import BoxMotionComponent from "../components/boxMotion"
import GridBlockComponent from "../components/gridBlock"
import VideoPlayerComponent from "../components/videoPlayerBlock"
import {
  keyPointsList,
  postOpExpectationVideoURL,
} from "../constants/homepage.constants"
import { INFO_ICON } from "../constants/icon.constants"

export default function RisksPage() {
  return (
    <Box>
      <Box className="relative min-h-20 bg-gray-900 lg:py-0"></Box>
      <SectionBlockComponent
        Id="video"
        RootClass="relative py-20 bg-[#F0F0F0]"
        ChildClass="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <BoxMotionComponent type="UP" className="text-center mb-12">
          <Heading className="text-4xl font-bold text-primary mb-4" as="h2">
            What to expect after fusion surgery
          </Heading>
        </BoxMotionComponent>
        <GridBlockComponent GridClass="md:grid-cols-2 gap-12 items-center">
          <VideoPlayerComponent url={postOpExpectationVideoURL} />
          <BoxMotionComponent className="space-y-6" type="LEFT">
            <Box className="bg-white p-6 rounded-xl shadow-md">
              <Heading
                as="h3"
                className="text-2xl font-semibold text-primary mb-4"
              >
                Key Points Covered
              </Heading>
              <DataList.Root orientation="horizontal" className="space-y-4">
                {keyPointsList &&
                  keyPointsList.map((items, key) => (
                    <DataList.Item
                      key={key}
                      align="center"
                      className="flex items-start gap-3"
                    >
                      <DataList.Label>
                        <INFO_ICON width="24" height="24" />
                      </DataList.Label>
                      <DataList.Value className="text-gray-600">
                        {items}
                      </DataList.Value>
                    </DataList.Item>
                  ))}
              </DataList.Root>
            </Box>
          </BoxMotionComponent>
        </GridBlockComponent>
      </SectionBlockComponent>
    </Box>
  )
}
