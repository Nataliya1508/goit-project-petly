import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function DesktopNav({ items }) {
    return (
        <Box as='nav' display='flex' alignItems='center' bg='green'>
            {items.map(({ href, text }) => <Link style={{ marginLeft: '10px' }} to={href} key={href}>{text}</Link>)
            }
        </Box >
    )
}
