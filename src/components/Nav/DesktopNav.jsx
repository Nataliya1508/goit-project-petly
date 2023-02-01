import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { StyledLink } from './Link.styled'

export default function DesktopNav({ items }) {
    return (
        <Box
            as='nav'
            ml='80px'
            display='flex'
            alignItems='center'
        >
            <HStack
                spacing='80px'
            >
                {items.map(({ href, text }) => <StyledLink to={href} key={href}>{text}</StyledLink>)
                }
            </HStack>
        </Box >
    )
}
