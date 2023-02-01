import React from 'react'
import { Flex, Container, Box, Image } from '@chakra-ui/react'
import UserNav from 'components/UserNav/UserNav'
import AuthNav from 'components/AuthNav/AuthNav'
import { BurgerButton } from './BurgerButton.styled'
import logo from '../../media/logo.svg'

export default function TabletHeader({ active, setActive, action }) {
    const isLogin = true ///////// Временно

    return (
        <Box
            bg='#FDF7F2;'
        >
            <Container
                maxW='768px'
                p='24px 32px'
                position='relative'
                zIndex='10'
            >
                <Flex
                    justify='space-between'
                >
                    <Flex
                        width='94px'
                        height='48px'
                        justify='center'
                    >
                        <Image
                            src={logo}
                            alt="Logo"
                        />
                    </Flex>
                    <Flex>
                        {isLogin ? <UserNav onClick={action} /> : <AuthNav onClick={action} />}
                        <Flex justify='center' align='center' width='40px' ml='20px'>
                            <Box
                                position='relative'
                                width='30px'
                                height='20px'
                                onClick={() => setActive()}
                            >
                                <BurgerButton className={active ? 'active' : ''} />
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}
