import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { StyledLink } from './AuthNav.styled'

export default function AuthNav({ onClick }) {
    const authItems = [
        { href: '/login', text: 'Login' },
        { href: '/register', text: 'Registration' }
    ]

    return (
        <Flex m='0 auto'>
            {authItems.map(({ href, text }) =>
                <StyledLink onClick={() => onClick(false)} to={href} key={href}>
                    {text}
                </StyledLink>)}
        </Flex>
    )
}
