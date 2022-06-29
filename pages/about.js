import {
  Container,
  Heading,
  Image
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Blurb from '../components/blurb'

const About = () => (
  <Layout title="About">
    <Container>
      <Heading as="h2" fontSize={20} mb={4}>
        About Niels
      </Heading>
      <Section delay={0.1}>
        <Blurb>
          Niels is a web and front end developer with a background in digital
          marketing. Niels is primarily based in Tokyo, Japan, but he has roots
          in Nashville, TN where he was born and raised. When not working, he
          enjoys playing guitar, making music, and drinking coffee. Currently,
          Niels is working with a consulting firm in Shinjuku.
        </Blurb>
      </Section>
      <Section>
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

export default About