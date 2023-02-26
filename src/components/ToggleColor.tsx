import { Box, Button, Flex, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function ToggleColor() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex justify={'flex-end'} m={'1rem'}>
            <Button onClick={() => toggleColorMode()} >
                {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            </Button>
        </Flex>
    )
}