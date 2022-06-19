import { Container, Box, Heading, useColorModeValue } from "@chakra-ui/react"

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('#A3CEF1', '#009EF6')}
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
      </Box>
    </Container>
  )
}

export default Page