import { Box, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import UserNav from 'components/UserNav/UserNav'
import AuthNav from 'components/AuthNav/AuthNav'
import Nav from 'components/Nav/Nav'

export default function BurgerMenu({ active }) {
    const [isMobile] = useMediaQuery('(max-width: 767px)')
    const isOpen = active ? 'translateY(0%)' : 'translateY(-110%)'

    const isLogin = false   ////////  Временно

    return (
        <Box w='100vw' h='100vh' bg='black' position='absolute' zIndex='1' transition='transform 0.7s' overflow='auto' style={{ transform: isOpen }}>
            {isMobile && (isLogin ? <UserNav /> : <AuthNav />)}
            <Nav />
        </Box>
    )
}
