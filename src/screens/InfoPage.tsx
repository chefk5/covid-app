import { Box, Flex, Text } from '@chakra-ui/react'

type Props = {
    msg?: string
}
const InfoPage = ({ msg }: Props) => {
    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Box>
                <Text>{msg}</Text>
            </Box>
        </Flex>

    )
}

export default InfoPage
