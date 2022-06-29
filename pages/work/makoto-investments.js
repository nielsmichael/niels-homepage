import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/post'
import Blurb from '../../components/blurb'
import Layout from '../../components/layouts/article'

const Article = () => {
  return (
    <Layout title="Makoto Investments">
      <Container>
        <Title>
          Makoto Investments <Badge>2021</Badge>
        </Title>
        <Blurb>
          Website homepage (English ver.) for consulting firm Makoto Investments
          Ltd. Built with HTML, CSS, and JavaScript (JQuery).
        </Blurb>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://makoto-investments.com">
              https://makoto-investments.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JQuery, HTML, CSS, JavaScript</span>
          </ListItem>
        </List>

        {/*
        * Add images here
        <WorkImage></WorkImage>
        */}
      </Container>
    </Layout>
  )
}

export default Article