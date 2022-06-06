import Logo from './logo'
import NextLink from 'next/link'
import { 
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
 } from '@chakra-ui/react'
 import { HamburgerIcon } from '@chakra-ui/icons'

 const LinkItem = ({ href, path, children }) => {
   const active = path === href
   const inactiveColor = useColorModeValue('#274C77', '#E7ECEF')
   return (
     <NextLink href={href}>
       <Link
        p={2}
        bg={active ? '#A3CEF1' : undefined}
        color={active ? '#274C77' : inactiveColor}>
          {children}
        </Link>
     </NextLink>
   )
 }

 const Navbar = props => {
   const { path } = props

   return (
     <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#E7ECEF', '#333333')}
      style={{backdropFilter: 'blur11px'}}
      zIndex={1}
      {...props}
      >
        NavBar
      </Box>
   )
 }

export default Navbar