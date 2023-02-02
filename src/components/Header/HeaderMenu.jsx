import { Box, Container, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../../media/logo.svg'
import UserNav from 'components/UserNav/UserNav'
import AuthNav from 'components/AuthNav/AuthNav'
import Nav from 'components/Nav/Nav'
import PropTypes from 'prop-types'

const HeaderMenu = ({ active, setActive, action }) => {
    const isLogin = false ///////// Временно

    return (
        <Box
            bg='#FDF7F2'
        >
            <Container
                maxW={{ base: '320px', md: '768px', xl: '1280px' }}
                pt={{ base: 4, md: 6, xl: 5 }}
                pr={{ base: 5, md: 8, xl: 4 }}
                pb={{ base: 4, md: 6, xl: 5 }}
                pl={{ base: 5, md: 8, xl: 4 }}
                pos='relative'
                zIndex={{ base: 10, md: 10 }}
            >
                <Flex
                    justify='space-between'
                >
                    <Flex>
                        <Flex
                            w={{ base: '82px', md: '94px', xl: '94px' }}
                            h={{ base: '42px', md: '48px', xl: '48px' }}
                            justify='center'
                        >
                            <Image src={logo} alt="Logo" />
                        </Flex>
                        <Flex display={{ base: 'none', md: 'none', xl: 'flex' }}>
                            <Nav />
                        </Flex>
                    </Flex>
                    <Flex display={{ base: 'flex', md: 'flex', xl: 'none' }}>
                        <Box
                            display={{ base: 'none', md: 'flex' }}
                        >
                            {isLogin ? <UserNav onClick={action} /> : <AuthNav onClick={action} />}
                        </Box>
                        <Flex
                            justify='center'
                            align='center'
                            width={10}
                            ml={{ md: 5 }}
                        >
                            <Box
                                position='relative'
                                width='30px'
                                height='20px'
                                onClick={() => setActive()}
                            >
                                <Box
                                    className={active ? 'active' : ''}

                                    w='30px'
                                    h='4px'
                                    pos='relative'
                                    transform='translateY(8px)'
                                    bg='#111111'
                                    transition='all 0ms 300ms'

                                    _before={{
                                        content: '""',
                                        pos: 'absolute',
                                        left: 0,
                                        bottom: '8px',
                                        w: '30px',
                                        h: '4px',
                                        bg: '#111111',
                                        transition: 'bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1)'
                                    }}
                                    _after={{
                                        content: '""',
                                        pos: 'absolute',
                                        left: 0,
                                        top: '8px',
                                        w: '30px',
                                        h: '4px',
                                        bg: '#111111',
                                        transition: 'top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1)'
                                    }}
                                    __css={{
                                        "&.active": {
                                            bg: 'rgba(255, 255, 255, 0)'
                                        },
                                        "&.active::before": {
                                            bottom: 0,
                                            transform: 'rotate(-45deg)',
                                            transition: 'bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1)'
                                        },
                                        "&.active::after": {
                                            top: 0,
                                            transform: 'rotate(45deg)',
                                            transition: 'top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1)'
                                        }
                                    }}
                                >
                                </Box>
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex display={{ base: 'none', md: 'none', xl: 'flex' }}>
                        {isLogin ? <UserNav onClick={action} /> : <AuthNav onClick={action} />}
                    </Flex>
                </Flex>
            </Container>
        </Box >
    )
}

export default HeaderMenu

HeaderMenu.propTypes = {
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
    action: PropTypes.func
}