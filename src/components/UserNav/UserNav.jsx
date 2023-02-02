import { Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import user from '../../media/user.svg'
import PropTypes from 'prop-types'

const UserNav = ({ onClick }) => {
    const userItems = [
        { href: '/user', text: 'Account', icon: `${user}` }
    ]

    return (
        <Flex
            m='0 auto'
            align='center'
        >
            {userItems.map(({ href, text }) =>
                <Link
                    onClick={() => onClick(false)}
                    to={href}
                    key={href}

                    as={NavLink}
                    display='flex'
                    alignItems='center'
                    pt='6px'
                    pb='6px'
                    pr={{ base: '36px', md: '28px' }}
                    pl={{ base: '36px', md: '28px' }}
                    mr={{ base: '12px', xl: '20px' }}
                    mb={{ base: '60px', md: 0 }}
                    fontWeight='500'
                    fontSize={{ base: '14px', md: '16px' }}
                    lineHeight={{ base: '20px', md: '22px' }}
                    letterSpacing='0.04em'
                    color='#FFFFFF'
                    bg='#F59256'
                    border='2px solid #F59256'
                    borderRadius='40px'

                    _last={{ mr: 0 }}

                    _before={{
                        content: '""',
                        w: { base: '20px', md: '28px' },
                        h: { base: '20px', md: '28px' },
                        mr: '12px',
                        mb: '1px',
                        bgImage: `url(${user})`,
                        bgRepeat: 'no-repeat',
                        bgSize: 'contain'
                    }}
                >
                    {text}
                </Link>)
            }
        </Flex >
    )
}

export default UserNav

UserNav.propTypes = {
    onClick: PropTypes.func.isRequired
}