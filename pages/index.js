import NextLink from 'next/link'
// import Head from 'next/head'  --to do
import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Image,
  Link,
  Button,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Blurb from '../components/blurb'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io5'
import { SkillLang, Skills } from '../components/skill'
import { useLocales } from '@/components/hooks/useLocales'

const Page = () => {
  const text = useLocales('index')

  return (
    <Layout title={text.meta_title}>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('#009EF6', '#184B68')}
          p={3}
          mb={6}
          align="center"
        >
          {text.tag_text}
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              {text.hero_name}
            </Heading>
            <p>{text.sub_title}</p>
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
            {text.work_text_a}
            <NextLink href="/work/makoto-investments">
              <Link>{text.work_company_span}</Link>
            </NextLink>{' '}
            {text.work_text_b}
          </Blurb>
          <Box align="center" my={4}>
            <NextLink href="/work">
              <Button
                rightIcon={<ChevronRightIcon />}
                bg="#009EF6"
                color="black"
                _hover={{ bg: '#00C3FB' }}
              >
                {text.work_btn_text}
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <Skills>
            <SkillLang>{text.skills_title}</SkillLang>
            {text.skills_text}
          </Skills>
          <Skills>
            <SkillLang>{text.languages_title}</SkillLang>
            {text.languages_text}
          </Skills>
          <Skills>
            <SkillLang>{text.technical_title}</SkillLang>
            {text.technical_text}
          </Skills>
          <Skills>
            <SkillLang>{text.learning_title}</SkillLang>
            {text.learning_text}
          </Skills>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1996</BioYear>
            {text.bio_1996_text}
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            {text.bio_2015_text}
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            {text.bio_2016_text}
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            {text.bio_2020_text_a}
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            {text.bio_2020_text_b}
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            {text.bio_2021_text}
          </BioSection>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Fun things I like
          </Heading>
          <Blurb>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://ghostwife.bandcamp.com/"
            >
              {text.fun_text_gtr}
            </Link>
            {text.fun_text}
          </Blurb>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://github.com/nielsmichael"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @nielsmichael
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/nielzthephotographer/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @nielzthephotographer
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
