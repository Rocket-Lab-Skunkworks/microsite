import { Box, Heading } from "@radix-ui/themes"
import SectionBlockComponent from "../components/sectionBlock"
import GridBlockComponent from "../components/gridBlock"
import VideoPlayerComponent from "../components/videoPlayerBlock"
import {
  lowBackPainVideoURL,
  researchEvidenceList,
} from "../constants/homepage.constants"
import BoxMotionComponent from "../components/boxMotion"
import { NEWTAB_ICON } from "../constants/icon.constants"

export default function PainExplainedPage() {
  return (
    <Box>
      <Box className="relative min-h-20 bg-gray-900 lg:py-0"></Box>

      <SectionBlockComponent
        Id="chronic"
        RootClass="bg-[#FAFAFA] py-20"
        ChildClass="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <GridBlockComponent GridClass="md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Box className="space-y-6">
            <Heading
              as="h2"
              className="text-3xl sm:text-4xl font-bold text-primary"
            >
              {`There's more to chronic low back pain than most realise...`}
            </Heading>
            <Box className="h-1 w-20 bg-secondary rounded-full"></Box>
          </Box>
          <Box
            as="div"
            className="aspect-video w-full rounded-xl overflow-hidden bg-gray-100"
          >
            <VideoPlayerComponent url={lowBackPainVideoURL} />
          </Box>
        </GridBlockComponent>
      </SectionBlockComponent>

      <SectionBlockComponent
        RootClass="bg-[#F0F0F0] py-16"
        ChildClass="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <Box
          as="div"
          className="space-y-12"
          style={{ opacity: 1, transform: "none" }}
        >
          <BoxMotionComponent type="UP">
            <Heading as="h2" className="text-3xl font-bold text-primary mb-8">
              Research Evidence
            </Heading>
            <Box as="div" className="space-y-4">
              {researchEvidenceList &&
                researchEvidenceList.map((item, key) => (
                  <BoxMotionComponent
                    as="a"
                    type="RIGHT"
                    key={key}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
                    style={{ opacity: 1, transform: "none" }}
                    href={item.url}
                  >
                    <NEWTAB_ICON width="24" height="24" className="w-5 h-5" />
                    {item.text}
                  </BoxMotionComponent>
                ))}
            </Box>
          </BoxMotionComponent>
        </Box>
      </SectionBlockComponent>
    </Box>
  )
}
