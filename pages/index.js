import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Image,
  Link,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import Section from '../components/section'
import Blurb from '../components/blurb'
import { BioSection, BioYear } from '../components/bio'

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
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Blurb>
          Niels is a web and front end developer with a background in digital
          marketing. Niels is primarily based in Tokyo, Japan, but he has roots
          in Nashville, TN where he was born and raised. When not working, he
          enjoys playing guitar, making music, and drinking coffee. Currently,
          Niels is working with{' '}
          <NextLink href="/work/makoto">
            <Link>Makoto Investments Ltd.</Link>
          </NextLink>{' '}
          - a consulting firm in Shinjuku.
        </Blurb>
        <Box align="center" my={4}>
          <NextLink href="/work">
            <Button
              rightIcon={<ChevronRightIcon />}
              bg="#009EF6"
              color="black"
              _hover={{ bg: '#00C3FB' }}
            >
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Nashville, Tennessee
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Began studying web development and programming
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Moved to Tokyo, Japan
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed Bachelor&apos;s degree of Liberal Arts from Tokyo Christian
          University (東京基督教大リベラルアーツ学士)
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Began work at Makoto Investments Ltd.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Fun things I like:
        </Heading>
        <Blurb>
          <Link href="https://ghostwife.bandcamp.com/">Guitar</Link>, very heavy
          metal, Japanese city pop, craft beer, kettlebells
        </Blurb>
      </Section>
    </Container>
  )
}

export default Page
