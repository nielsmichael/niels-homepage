import { Container, Heading, SimpleGrid, } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-link'

const Blog = () => (
  <Layout title="Posts">
    <Container>
      <Heading as='h2' fontSize={20} mb={4}>Blog Posts</Heading>
      <Section delay={0.1}>
        <GridItem>
          No blog posts yet - but coming soon!
        </GridItem>
      </Section>
    </Container>
  </Layout>
)