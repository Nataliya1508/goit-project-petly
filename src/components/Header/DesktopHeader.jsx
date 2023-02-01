import React from 'react'
import { Flex, Container, Image, Box } from '@chakra-ui/react'
import Nav from 'components/Nav/Nav'
import UserNav from 'components/UserNav/UserNav'
import AuthNav from 'components/AuthNav/AuthNav'
import logo from '../../media/logo.svg'

export default function DesktopHeader({ action }) {
    const isLogin = true  ////////// Временно

    return (
        <Box
            bg='#FDF7F2;'
        >
            <Container
                maxW='1280px'
                padding='20px 16px'
            >
                <Flex
                    justify='space-between'
                >
                    <Flex>
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
                        <Nav />
                    </Flex>
                    <Flex>
                        {isLogin ? <UserNav onClick={action} /> : <AuthNav onClick={action} />}
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}
