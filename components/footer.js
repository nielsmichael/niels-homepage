import { Text } from "@chakra-ui/react"

const date = new Date().getFullYear()

const Footer = () => <Text align='center'>© {date} Niels Michael. All rights reserved.</Text>

export default Footer