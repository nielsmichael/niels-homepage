import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Niels Michael - Homepage</title>
        <meta property="og:site_name" content="Niels Michael" />
        <meta name="og:title" content="Niels Michael" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/niels.jpg" />
        <link rel="icon" type="image/png" href="/img/niels-dev-logo-dark.png" />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={16}>
        {children}
      </Container>

      <Footer />
    </Box>
  )
}

export default Main
