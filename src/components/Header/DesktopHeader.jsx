import React from 'react'
import { Flex, Container } from '@chakra-ui/react'
import Nav from 'components/Nav/Nav'
import UserNav from 'components/UserNav/UserNav'
import AuthNav from 'components/AuthNav/AuthNav'
import logo from '../../media/logo.svg'

export default function DesktopHeader() {
    const isLogin = false

    return (
        <Container maxW='1280px' pl='16px' pr='16px'>
            <Flex justify='space-between' bg='yellow'>
                <Flex>
                    <Flex width='94px' height='48px' justify='center'>
                        <img src={logo} alt="Logo" />
                    </Flex>
                    <Nav />
                </Flex>
                <Flex>
                    {isLogin ? <UserNav /> : <AuthNav />}
                </Flex>
            </Flex>
        </Container>
    )
}
