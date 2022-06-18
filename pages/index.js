import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="#A3CEF1" p={3} mb={6} align="center">
        Hello! I&apos;m a web developer in Tokyo, Japan.
      </Box>
      
      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Niels Michael
          </Heading>
          <p>Web Developer / Designer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page