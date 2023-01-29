import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    const navItems = [
        { href: '/news', text: 'News' },
        { href: '/notices', text: 'Find pet' },
        { href: '/friends', text: 'Our friends' }
    ]

    return (
        <Box as='nav' display='flex' alignItems='center'>
            {navItems.map(({ href, text }) => <Link style={{ marginLeft: '10px' }} to={href} key={href}>{text}</Link>)
            }
        </Box >
    )
}
