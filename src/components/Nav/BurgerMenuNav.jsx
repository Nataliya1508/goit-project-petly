import { Box } from '@chakra-ui/react'
import React from 'react'
// import { Link } from 'react-router-dom'
import { StyledLink } from './Link.styled'

export default function BurgerMenuNav({ items, action }) {
    return (
        <Box
            as='nav'
            display='flex'
            flexDir='column'
            alignItems='center'
        >
            {items.map(({ href, text }) => <StyledLink onClick={() => action(false)} to={href} key={href}>{text}</StyledLink>)
            }
        </Box >
    )
}
