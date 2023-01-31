import { Flex, Image, Box } from '@chakra-ui/react'
import React from 'react'
import { StyledLink, Text } from './UserNav.styled'
import user from '../../media/user.svg'

export default function UserNav({ onClick }) {
    const userItems = [
        { href: '/user', text: 'Account', icon: `${user}` }
    ]

    return (
        <Flex m='0 auto'>
            {userItems.map(({ href, text, icon }) =>
                <StyledLink onClick={() => onClick(false)} to={href} key={href}>
                    {text}
                </StyledLink>)}
        </Flex>
    )
}
