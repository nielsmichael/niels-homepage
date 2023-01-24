import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import { useLocales } from '@/components/hooks/useLocales'

const NotFound = () => {
  const text = useLocales('404')

  return (
    <Container>
      <Heading as="h1">{text.hero_text}</Heading>
      <Text>{text.sub_text}</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button bg="#009EF6" color="black" _hover={{ bg: '#00C3FB' }}>
            {text.btn_text}
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
