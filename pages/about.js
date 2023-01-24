import { Container, Heading, Image } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Blurb from '../components/blurb'
import { useLocales } from '@/components/hooks/useLocales'

const About = () => {
  const text = useLocales('about')
  return (
    <Layout title="About">
      <Container>
        <Heading as="h2" fontSize={20} mb={4}>
          About Niels
        </Heading>
        <Section delay={0.1}>
          <Blurb>{text.about_blurb}</Blurb>
        </Section>
        <Section delay={0.2}>
          <Image
            borderRadius="lg"
            w="full"
            src="/img/niels-shinjuku.jpeg"
            alt="Niels Michael about photo"
            mb={4}
            placeholder="blur"
            loading="lazy"
          />
        </Section>
      </Container>
    </Layout>
  )
}

export default About
