import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, Meta, PostImage } from '../../components/post'
import Blurb from '../../components/blurb'
import Layout from '../../components/layouts/article'

const Article = () => {
  return (
    <Layout title="Anchor Investments">
      <Container>
        <Title>
          Anchor Investments <Badge>2022</Badge>
        </Title>
        <Blurb>
          Website homepage for real estate acquisition and property management
          company Anchor Investments. Built with NextJS and Typescript.
        </Blurb>
        <List ml={4} my={4}>
          {/* <ListItem>
            <Meta>Website</Meta>
            <Link href="https://makoto-investments.com">
              https://makoto-investments.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem> */}
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJS, Typescript</span>
          </ListItem>
        </List>

        <PostImage src='/img/work/anchor-investments.jpg' alt='Anchor Investments' />
      </Container>
    </Layout>
  )
}

export default Article
