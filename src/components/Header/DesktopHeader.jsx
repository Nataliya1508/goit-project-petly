import React from 'react'
import { Flex, Container } from '@chakra-ui/react'
import Nav from 'components/Nav/Nav'
import UserNav from 'components/UserNav/UserNav'
import AuthNav from 'components/AuthNav/AuthNav'

export default function DesktopHeader() {
    const isLogin = false

    return (
        <Container maxW='1280px' pl='16px' pr='16px'>
            <Flex justify='space-between' bg='yellow'>
                <Flex>
                    <Flex align='center'>petly</Flex>
                    <Nav />
                </Flex>
                <Flex>
                    {isLogin ? <UserNav /> : <AuthNav />}
                </Flex>
            </Flex>
        </Container>
    )
}
