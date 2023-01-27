import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Global } from '@emotion/react'

// export const GridItem = ({ children, href, title, thumbnail }) => (
//   <Box w="100%" align="center">
//     <LinkBox cursor="pointer">
//       <Image
//         src={thumbnail}
//         alt={title}
//         className="grid-item-thumbnail"
//         placeholder="blur"
//         loading="lazy"
//       />
//       <LinkOverlay href={href} target="_blank">
//         <Text mt={2}>{title}</Text>
//       </LinkOverlay>
//       <Text fontSize={14}>{children}</Text>
//     </LinkBox>
//   </Box>
// )

export const WorkGridItem = ({
  children,
  title,
  dates,
  company,
  thumbnail,
  link
}) => (
  <Box w="100%" align="left">
    <LinkBox>
      <Image src={thumbnail} alt={title} className="grid-item-thumbnail" />
      <LinkOverlay href={link} target="_blank" rel="nofollow">
        <Text mt={2} fontSize={20} as="b">
          {title}
        </Text>
        <Text mt={1} fontSize={18}>
          {dates}
        </Text>
        <Text mt={1} fontSize={16} as="i">
          {company}
        </Text>
      </LinkOverlay>
      {children}
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)

export const WorkList = ({ workList }) => (
  <List spacing={3}>
    {workList.map(item => (
      <ListItem key={item}>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        {item}
      </ListItem>
    ))}
  </List>
)
