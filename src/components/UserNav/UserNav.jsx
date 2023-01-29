import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function UserNav() {
    const userItems = [
        { href: '/user', text: 'Account' }
    ]

    return (
        <Flex>
            {userItems.map(({ href, text }) => <Link to={href} key={href}>{text}</Link>)}
        </Flex>
    )
}
