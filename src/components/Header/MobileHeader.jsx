import React from 'react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Container, Flex, Box, Image } from '@chakra-ui/react'
import logo from '../../media/logo.svg'

export default function MobileHeader({ active, setActive }) {

    return (
        <Box
            bg='#FDF7F2;'
            position='relative'
            zIndex='10'
        >
            <Container
                maxW='320px'
                p='16px 20px'
            >
                <Flex
                    justify='space-between'
                >
                    <Flex
                        width='82px'
                        height='42px'
                        justify='center'
                    >
                        <Image src={logo} alt="Logo" />
                    </Flex>
                    <IconButton
                        onClick={() => setActive()}
                        variant='unstyled'
                        icon={active ? <CloseIcon w='20px' h='20px' /> : <HamburgerIcon w='30px' h='20px' />}
                    />
                </Flex>
            </Container>
        </Box>
    )
}
