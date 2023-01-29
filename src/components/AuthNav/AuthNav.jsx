import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthNav() {
    const authItems = [
        { href: '/register', text: 'Registration' },
        { href: '/login', text: 'Login' }
    ]

    return (
        <Flex>
            {authItems.map(({ href, text }) => <Link to={href} key={href}>{text}</Link>)}
        </Flex>
    )
}
