import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'

import Section from '../components/section'
import { WorkGridItem } from '../components/grid-link'

// Assets
import makotoThumb from '../public/img/work/makoto-investments.jpg'
import anchorThumb from '../public/img/work/anchor-investments.jpg'
// import nielsMealsThumb from '../public/img/work/niels-meals.jpg'
import Layout from '../components/layouts/article'

const Work = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h2" fontSize={20} mb={4}>
          Work
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              id="makoto-investments"
              title="Makoto Investments"
              thumbnail={makotoThumb}
            >
              Website homepage (English ver.) for consulting firm Makoto
              Investments Ltd. Built with HTML, CSS, and JavaScript (JQuery).
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="anchor-investments"
              title="Anchor Investments"
              thumbnail={anchorThumb}
            >
              Website homepage for real estate acquisition and property
              management company Anchor Investments. Built with NextJS and
              Typescript.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Divider my={6} />
      </Container>
    </Layout>
  )
}

export default Work
