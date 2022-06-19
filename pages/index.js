import { Container, Box, Heading, useColorModeValue, Image } from "@chakra-ui/react"
import Section from "../components/section"

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('#009EF6', '#184B68')}
        p={3}
        mb={6}
        align="center"
      >
        Hello! I&apos;m a web developer living in Tokyo, Japan.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Niels Michael
          </Heading>
          <p>Front End & Web Developer / Designer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="#E7ECEF"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/img/niels.jpg"
            alt="Niels Michael Website Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}></Section>
    </Container>
  )
}

export default Page