import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, PostImage } from '../../components/post'
import Blurb from '../../components/blurb'
import Layout from '../../components/layouts/article'

const Article = () => {
  return (
    <Layout title="Niels' Meals">
      <Container>
        <Title>
          Anchor Investments <Badge>2022</Badge>
        </Title>
        <Blurb>
          An online ordering front-end interface built with React.
          Unfortunately, I have not opened my restaurant yet - but when I do,
          the web app is ready to go.
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
            <span>JavaScript, React</span>
          </ListItem>
        </List>

        <PostImage src="/img/work/niels-meals.jpg" alt="Niels Meals" />
        <PostImage src="/img/work/niels-meals-01.jpg" alt="Niels Meals" />
      </Container>
    </Layout>
  )
}

export default Article
