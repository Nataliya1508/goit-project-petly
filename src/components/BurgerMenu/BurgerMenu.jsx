import { Box, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import UserNav from 'components/UserNav/UserNav'
import AuthNav from 'components/AuthNav/AuthNav'
import Nav from 'components/Nav/Nav'

export default function BurgerMenu({ active, setActive }) {
    const [isMobile] = useMediaQuery('(max-width: 767px)')
    const isOpen = active ? 'translateY(0%)' : 'translateY(-110%)'

    const isLogin = true     ////////  Временно

    return (
        <Box
            w='100vw'
            h='100vh'
            bg='#FDF7F2'
            position='absolute'
            zIndex='1'
            transition='transform 0.7s'
            overflow='auto'
            style={{ transform: isOpen }}
        >
            <Box
                display='flex'
                // justifyContent='center'
                flexDirection='column'
                padding='30px 0'
            >
                {isMobile && (isLogin ? <UserNav onClick={setActive} /> : <AuthNav onClick={setActive} />)}
                <Nav onClick={setActive} />
            </Box>
        </Box>
    )
}
