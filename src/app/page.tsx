import { Box, Heading, Text } from "@radix-ui/themes";
import GridBlockComponent from "./components/gridBlock";
import HomepageBanner from "./components/homepageBanner";
import SectionBlockComponent from "./components/sectionBlock";

export default function Home() {
  return (
    <Box>
      <HomepageBanner />

      <SectionBlockComponent RootClass="bg-white py-20" ChildClass="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GridBlockComponent GridClass="gap-8 lg:gap-12">
            <Box className="aspect-video w-full rounded-xl overflow-hidden bg-[#F0F0F0]">Video Player</Box>
            <Box className="space-y4">
              <Text className="text-lg sm:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0">
                Before considering spinal fusion surgery, understand the risks and explore evidence-based alternatives.
              </Text>
              <Box className="h-1 w-20 bg-secondary rounded-full"></Box>
            </Box>
          </GridBlockComponent>
      </SectionBlockComponent>

      <SectionBlockComponent Id="video" RootClass="relative py-20 bg-[#F0F0F0]" ChildClass="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Box className="text-center mb-12" style={{opacity: 1, transform: 'none'}}>
            <Heading className="text-4xl font-bold text-primary mb-4" as="h2">
              What to expect after fusion surgery
            </Heading>
          </Box>
          <GridBlockComponent GridClass="gap-12">
            <Box className="aspect-video w-full rounded-xl overflow-hidden bg-gray-100">Video Player</Box>
            <Box className="space-y-6" style={{opacity: 1, transform: 'none'}}>
              <Box className="bg-white p-6 rounded-xl shadow-md">
                <Heading as="h3" className="text-2xl font-semibold text-primary mb-4">
                  Key Points Covered
                </Heading>
              </Box>
            </Box>
          </GridBlockComponent>
      </SectionBlockComponent>

      <SectionBlockComponent Id="faq" RootClass="relative py-12 bg-white" ChildClass="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Box className="text-center mb-12" style={{opacity: 1, transform: 'none'}}>
            <Heading as="h2" className="text-4xl font-bold text-primary mb-4">Get a second opinion</Heading>
            <Text className="text-lg sm:text-xl text-gray-600">
              You have the right to request a second opinion. Don't worry - good surgeons aren't worried that you're seeking a second opinion, they'd rather have their opinion confirmed by another surgeon.
            </Text>
          </Box>
      </SectionBlockComponent>
    </Box>
  );
}
