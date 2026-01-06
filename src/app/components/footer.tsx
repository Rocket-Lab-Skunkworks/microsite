import { Box, Link, Text } from "@radix-ui/themes"
import GridBlockComponent from "./gridBlock"
import { NEWTAB_ICON } from "../constants/icon.constants"
import Image from "next/image"
import BoxMotionComponent from "./boxMotion"

export default function FooterComponent() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <Box as="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <GridBlockComponent GridClass="md:grid-cols-2 gap-8 items-center">
          <BoxMotionComponent as="div" type="UP">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://wiansw.au/"
              className="text-secondary hover:text-secondary/80 flex items-center gap-1 text-sm"
            >
              <Image
                src="https://wiansw.au/wp-content/uploads/2024/09/logo-1-1-2048x727.png"
                width="180"
                height="64"
                alt="Workers Insurance Association of NSW"
                className="h-16 object-contain"
              />
            </Link>
            <Text as="p" className="mt-4 text-gray-600">
              An initiative of the Workers Insurance Association of NSW
            </Text>
          </BoxMotionComponent>
          <BoxMotionComponent className="space-y-4" type="UP">
            <Box className="bg-gray-50 p-4 rounded-lg">
              <Text className="text-sm text-gray-600">
                <Box as="span" className="font-bold">
                  Important Disclaimer:
                </Box>{" "}
                The goal of this website is to support patients in seeking
                second opinions and fully understanding their recovery options.
                It provides general health information based on peer-reviewed
                research and publicly available evidence. This content is not a
                substitute for professional medical advice, diagnosis, or
                treatment. Always consult qualified healthcare professionals
                regarding your specific circumstances.
              </Text>
            </Box>
            <Box className="flex gap-4 items-center justify-start md:justify-end">
              <Link
                href="https://wiansw.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 flex items-center gap-1 text-sm"
              >
                Visit WIANSW
                <NEWTAB_ICON width="24" height="24" className="w-4 h-4" />
              </Link>
            </Box>
          </BoxMotionComponent>
        </GridBlockComponent>
      </Box>
    </footer>
  )
}
