import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const styles = {
  global: props => ({
    body: {
      bg: mode('#E7ECEF', '#34383A')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#364954',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#00A6FD', '#F175A9')(props),
      textUnderlineOffset: 4
    })
  }
}

const fonts = {
  heading: 'M PLUS Rounded 1c'
}

// const colors = {}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles,
  components,
  // colors,
  fonts
})

export default theme