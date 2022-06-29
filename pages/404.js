import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">404 - Not Found</Heading>
      <Text>The page you are looking for could not be found.</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button
            bg="#009EF6"
            color="black"
            _hover={{ bg: '#00C3FB' }}
          >Back to Top</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound