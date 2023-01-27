import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'

// custom components
import Section from '../components/section'
import { WorkGridItem, WorkList } from '../components/grid-link'
import Layout from '../components/layouts/article'
import { useLocales } from '@/components/hooks/useLocales'

// Assets
import makotoThumb from '../public/img/work/makoto-investments.png'
import glitchThumb from '../public/img/work/glitch-protocol_web3.png'
import cotoThumb from '../public/img/work/coto-world__header.png'
import costcoThumb from '../public/img/work/costco-inzai__header.png'

const Work = () => {
  const text = useLocales('work')

  return (
    <Layout title="Work History">
      <Container>
        <Heading as="h2" fontSize={20} mb={4}>
          {text.heading}
        </Heading>

        <SimpleGrid columns={1} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              id="makoto-investments"
              title={text.makoto_title}
              dates={text.makoto_dates}
              company={text.makoto_company}
              thumbnail={makotoThumb}
              link="https://makoto-investments.com/"
            >
              <WorkList
                workList={[
                  text.makoto_task_1,
                  text.makoto_task_2,
                  text.makoto_task_3,
                  text.makoto_task_4,
                  text.makoto_task_5,
                  text.makoto_task_6
                ]}
              />
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="bhc-fintech"
              title={text.glitch_title}
              dates={text.glitch_dates}
              company={text.glitch_company}
              thumbnail={glitchThumb}
              link="https://glitch.finance/"
            >
              <WorkList
                workList={[
                  text.glitch_task_1,
                  text.glitch_task_2,
                  text.glitch_task_3,
                  text.glitch_task_4
                ]}
              />
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="coto-world"
              title={text.coto_title}
              dates={text.coto_dates}
              company={text.coto_company}
              thumbnail={cotoThumb}
              link="https://cotoworld.jp/"
            >
              <WorkList
                workList={[
                  text.coto_task_1,
                  text.coto_task_2,
                  text.coto_task_3,
                  text.coto_task_4,
                  text.coto_task_5,
                  text.coto_task_6
                ]}
              />
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="costco"
              title={text.costco_title}
              dates={text.costco_dates}
              company={text.costco_company}
              thumbnail={costcoThumb}
              link="https://www.costco.co.jp/"
            >
              <WorkList workList={[text.costco_task_1, text.costco_task_2]} />
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Divider my={6} />
      </Container>
    </Layout>
  )
}

export default Work
