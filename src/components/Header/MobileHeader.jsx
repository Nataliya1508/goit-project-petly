import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Container, Flex } from '@chakra-ui/react'

export default function MobileHeader() {
    return (
        <Container maxW='320px' pl='20px' pr='20px'>
            <Flex justify='space-between' bg='green'>
                <Flex align='center'>petly</Flex>
                <IconButton variant='unstyled' icon={<HamburgerIcon w='30px' h='20px' />} />
            </Flex>
        </Container>
    )
}
