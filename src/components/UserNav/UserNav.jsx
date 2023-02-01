import { Flex } from '@chakra-ui/react'
import React from 'react'
import { StyledUserLink } from '../AuthNav/StyledLink.styled'
import user from '../../media/user.svg'

export default function UserNav({ onClick }) {
    const userItems = [
        { href: '/user', text: 'Account', icon: `${user}` }
    ]

    return (
        <Flex
            m='0 auto'
            align='center'
        >
            {userItems.map(({ href, text }) =>
                <StyledUserLink onClick={() => onClick(false)} to={href} key={href}>
                    {text}
                </StyledUserLink>)}
        </Flex>
    )
}
