import { 
  Container, 
  Heading, 
  // SimpleGrid, 
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-link'
import Blurb from '../components/blurb'

const Blog = () => (
  <Layout title="Blog">
    <Container>
      <Heading as='h2' fontSize={20} mb={4}>Blog Posts</Heading>
      <Section delay={0.1}>
        <Blurb>
          No blog posts yet - but coming soon!
        </Blurb>
      </Section>
    </Container>
  </Layout>
)

export default Blog