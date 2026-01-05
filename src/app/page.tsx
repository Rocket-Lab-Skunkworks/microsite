import { Box, DataList, Heading, Link, Text } from "@radix-ui/themes"
import GridBlockComponent from "./components/gridBlock"
import HomepageBanner from "./components/homepageBanner"
import SectionBlockComponent from "./components/sectionBlock"
import VideoPlayerComponent from "./components/videoPlayerBlock"
import {
  adviceWorkerVideoURL,
  gridFaqList,
  keyPointsList,
  lowBackPainVideoURL,
  postOpExpectationVideoURL,
  researchEvidenceList,
  riskVideoURL,
  spinalFusionVideoURL,
} from "./constants/homepage.constants"
import { INFO_ICON, NEWTAB_ICON } from "./constants/icon.constants"

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

      <SectionBlockComponent
        Id="video"
        RootClass="relative py-20 bg-[#F0F0F0]"
        ChildClass="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <Box
          className="text-center mb-12"
          style={{ opacity: 1, transform: "none" }}
        >
          <Heading className="text-4xl font-bold text-primary mb-4" as="h2">
            What to expect after fusion surgery
          </Heading>
        </Box>
        <GridBlockComponent GridClass="md:grid-cols-2 gap-12 items-center">
          <VideoPlayerComponent url={postOpExpectationVideoURL} />
          <Box className="space-y-6" style={{ opacity: 1, transform: "none" }}>
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
          </Box>
        </GridBlockComponent>
      </SectionBlockComponent>

      <SectionBlockComponent
        Id="faq"
        RootClass="relative py-12 bg-white"
        ChildClass="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <Box
          className="text-center mb-12"
          style={{ opacity: 1, transform: "none" }}
        >
          <Heading as="h2" className="text-4xl font-bold text-primary mb-4">
            Get a second opinion
          </Heading>
          <Text className="text-lg sm:text-xl text-gray-600">
            {`You have the right to request a second opinion. Don't worry - good
            surgeons aren't worried that you're seeking a second opinion, they'd
            rather have their opinion confirmed by another surgeon.`}
          </Text>
        </Box>

        <GridBlockComponent GridClass="md:grid-cols-2 gap-12 mb-16 items-center">
          <VideoPlayerComponent url={riskVideoURL} />
          <VideoPlayerComponent url={adviceWorkerVideoURL} />
        </GridBlockComponent>

        <GridBlockComponent GridClass="md:grid-cols-2 gap-8 grid-cols-1">
          {gridFaqList &&
            gridFaqList.map((item, key) => (
              <Box
                key={key}
                style={{ opacity: 1, transform: "none" }}
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
              </Box>
            ))}
        </GridBlockComponent>

        <GridBlockComponent GridClass="md:grid-cols-1 gap-8 p-8 items-center">
          <Box
            as="div"
            className="flex items-center justify-center"
            style={{ opacity: 1, transform: "none" }}
          >
            <Text className="text-2xl sm:text-3xl font-semibold text-primary text-center">
              {`Your successful recovery is everyone's primary goal!`}
            </Text>
          </Box>
        </GridBlockComponent>
      </SectionBlockComponent>

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
          <Box>
            <Heading as="h2" className="text-3xl font-bold text-primary mb-8">
              Research Evidence
            </Heading>
            <Box as="div" className="space-y-4">
              {researchEvidenceList &&
                researchEvidenceList.map((item, key) => (
                  <Link
                    key={key}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
                    style={{ opacity: 1, transform: "none" }}
                    href={item.url}
                  >
                    <NEWTAB_ICON width="24" height="24" className="w-5 h-5" />
                    {item.text}
                  </Link>
                ))}
            </Box>
          </Box>
        </Box>
      </SectionBlockComponent>
    </Box>
  )
}
