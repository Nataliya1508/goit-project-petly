import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Flex, Container, IconButton } from '@chakra-ui/react'
import UserNav from 'components/UserNav/UserNav'
import AuthNav from 'components/AuthNav/AuthNav'

export default function TabletHeader() {
    const isLogin = true

    return (
        <Container maxW='768px' pl='32px' pr='32px'>
            <Flex justify='space-between' bg='red'>
                <Flex align='center'>petly</Flex>
                <Flex>
                    {isLogin ? <UserNav /> : <AuthNav />}
                    <IconButton variant='unstyled' icon={<HamburgerIcon w='30px' h='20px' />} />
                </Flex>
            </Flex>
        </Container>
    )
}
