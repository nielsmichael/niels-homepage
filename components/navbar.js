import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleBtn from './UI/theme-toggle-btn.js'
import { LanguageToggle } from './UI/lang-toggle-btn'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('#274C77', '#E7ECEF')
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? '#A3CEF1' : undefined}
        color={active ? '#274C77' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const ExternalLink = ({ href, children }) => {
  const color = useColorModeValue('#274C77', '#E7ECEF')
  return (
    <a href={href} target="_blank">
      <Box p={2} color={color}>
        {children}
      </Box>
    </a>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#E7ECEF', '#34383A')}
      style={{ backdropFilter: 'blur(11px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/work" path={path}>
            Work
          </LinkItem>
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
          <ExternalLink as="link" href="https://github.com/nielsmichael">
            Github
          </ExternalLink>
        </Stack>
        <Box flex={1} align="right">
          <LanguageToggle />
          <ThemeToggleBtn />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/work" passHref>
                  <MenuItem as={Link}>Work</MenuItem>
                </NextLink>
                <NextLink href="/about" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  target="_blank"
                  href="https://github.com/nielsmichael"
                >
                  Github
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
