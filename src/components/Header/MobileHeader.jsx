import React from 'react'
import { Container, Flex, Box, Image } from '@chakra-ui/react'
import logo from '../../media/logo.svg'
import { BurgerButton } from './BurgerButton.styled'

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
                    <Flex justify='center' align='center' width='40px'>
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
            </Container>
        </Box >
    )
}
