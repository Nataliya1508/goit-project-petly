import { Flex } from '@chakra-ui/react'
import React from 'react'
import { StyledAuthLink } from './StyledLink.styled'

export default function AuthNav({ onClick }) {
    const authItems = [
        { href: '/login', text: 'Login' },
        { href: '/register', text: 'Registration' }
    ]

    return (
        <Flex m='0 auto' align='center'>
            {authItems.map(({ href, text }) =>
                <StyledAuthLink onClick={() => onClick(false)} to={href} key={href}>
                    {text}
                </StyledAuthLink>)}
        </Flex>
    )
}
