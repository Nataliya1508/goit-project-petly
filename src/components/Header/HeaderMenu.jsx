import { Box, Flex, Image } from '@chakra-ui/react'
import { Container } from 'shared/components'
import React from 'react'
import logo from '../../media/logo.svg'
import UserNav from 'components/UserNav/UserNav'
import AuthNav from 'components/AuthNav/AuthNav'
import Nav from 'components/Nav/Nav'
import PropTypes from 'prop-types'

const HeaderMenu = ({ active, setActive, isLogin }) => {
    return (
        <Box
            bg='accent.background'
        >
            <Container
                py={{ base: 4, md: 6, xl: 5 }}
                pos='relative'
                zIndex={{ base: 10, md: 10 }}
                bg='accent.background'
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
                            {isLogin ? <UserNav onClick={() => setActive(false)} /> : <AuthNav onClick={() => setActive(false)} />}
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
                                onClick={setActive}
                                _hover={{ cursor: 'pointer' }}
                            >
                                <Box
                                    className={active ? 'active' : ''}

                                    w='30px'
                                    h='4px'
                                    pos='relative'
                                    transform='translateY(8px)'
                                    bg='accent.black'
                                    transition='all 0ms 300ms'

                                    _before={{
                                        content: '""',
                                        pos: 'absolute',
                                        left: 0,
                                        bottom: '8px',
                                        w: '30px',
                                        h: '4px',
                                        bg: 'accent.black',
                                        transition: 'bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1)'
                                    }}
                                    _after={{
                                        content: '""',
                                        pos: 'absolute',
                                        left: 0,
                                        top: '8px',
                                        w: '30px',
                                        h: '4px',
                                        bg: 'accent.black',
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
                        {isLogin ? <UserNav onClick={() => setActive(false)} /> : <AuthNav onClick={() => setActive(false)} />}
                    </Flex>
                </Flex>
            </Container>
        </Box >
    )
}

export default HeaderMenu

HeaderMenu.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func.isRequired,
}