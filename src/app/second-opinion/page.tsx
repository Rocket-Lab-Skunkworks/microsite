import { Box, Heading, Text } from "@radix-ui/themes"
import SectionBlockComponent from "../components/sectionBlock"
import BoxMotionComponent from "../components/boxMotion"
import GridBlockComponent from "../components/gridBlock"
import VideoPlayerComponent from "../components/videoPlayerBlock"
import {
  adviceWorkerVideoURL,
  gridFaqList,
  riskVideoURL,
} from "../constants/homepage.constants"

export default function RisksPage() {
  return (
    <Box>
      <Box className="relative min-h-20 bg-gray-900 lg:py-0"></Box>

      <SectionBlockComponent
        Id="faq"
        RootClass="relative py-12 bg-white"
        ChildClass="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <BoxMotionComponent type="UP" className="text-center mb-12">
          <Heading as="h2" className="text-4xl font-bold text-primary mb-4">
            Get a second opinion
          </Heading>
          <Text className="text-lg sm:text-xl text-gray-600">
            {`You have the right to request a second opinion. Don't worry - good
            surgeons aren't worried that you're seeking a second opinion, they'd
            rather have their opinion confirmed by another surgeon.`}
          </Text>
        </BoxMotionComponent>

        <GridBlockComponent GridClass="md:grid-cols-2 gap-12 mb-16 items-center">
          <VideoPlayerComponent url={riskVideoURL} />
          <VideoPlayerComponent url={adviceWorkerVideoURL} />
        </GridBlockComponent>

        <GridBlockComponent GridClass="md:grid-cols-2 gap-8 grid-cols-1">
          {gridFaqList &&
            gridFaqList.map((item, key) => (
              <BoxMotionComponent
                key={key}
                type="UP"
                className="bg-[#F0F0F0] p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                {item.icon}
                <Heading
                  as="h3"
                  className="text-xl font-semibold text-primary mb-2"
                >
                  {item.title}
                </Heading>
                <Text className="text-gray-600">{item.desc}</Text>
              </BoxMotionComponent>
            ))}
        </GridBlockComponent>

        <GridBlockComponent GridClass="md:grid-cols-1 gap-8 p-8 items-center">
          <BoxMotionComponent
            type="LEFT"
            className="flex items-center justify-center"
          >
            <Text className="text-2xl sm:text-3xl font-semibold text-primary text-center">
              {`Your successful recovery is everyone's primary goal!`}
            </Text>
          </BoxMotionComponent>
        </GridBlockComponent>
      </SectionBlockComponent>
    </Box>
  )
}
