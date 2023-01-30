import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function BurgerMenuNav({ items }) {
    return (
        <Box as='nav' display='flex' flexDir='column' alignItems='center' bg='lightblue'>
            {items.map(({ href, text }) => <Link style={{ marginLeft: '10px' }} to={href} key={href}>{text}</Link>)
            }
        </Box >
    )
}
