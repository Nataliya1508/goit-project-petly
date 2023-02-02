import { Box } from '@chakra-ui/react'
import React from 'react'
import UserNav from 'components/UserNav/UserNav'
import AuthNav from 'components/AuthNav/AuthNav'
import Nav from 'components/Nav/Nav'
import PropTypes from 'prop-types'

const BurgerMenu = ({ active, setActive }) => {
    const isOpen = active ? 'translateY(0%)' : 'translateY(-120%)'

    const isLogin = true   ////////  Временно

    return (
        <Box
            w='100vw'
            h='100vh'
            bg='#FDF7F2'
            position='absolute'
            zIndex='1'
            transition='transform 0.5s'
            overflow='auto'
            style={{ transform: isOpen }}
        >
            <Box
                display='flex'
                flexDirection='column'
                padding='30px 0'
            >
                <Box display={{ md: 'none' }} mr='auto' ml='auto'>
                    {isLogin ? <UserNav onClick={setActive} /> : <AuthNav onClick={setActive} />}
                </Box>
                <Nav onClick={setActive} />
            </Box>
        </Box>
    )
}

export default BurgerMenu

BurgerMenu.propTypes = {
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
}