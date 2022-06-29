import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'

import Section from '../components/section'
import { WorkGridItem } from '../components/grid-link'
import makotoThumb from '../public/img/work/makoto-investments.png'

const Work = () => {
  return (
    <Container>
      <Heading as="h2" fontSize={20} mb={4}>
        Work
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="makotoInvestments"
            title="Makoto Investments"
            thumbnail={makotoThumb}
          >
            Website homepage (English ver.) for Makoto Investments Ltd.
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>
    </Container>
  )
}

export default Work