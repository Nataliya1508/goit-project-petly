import { Avatar, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';

const UserNav = ({ onClick }) => {
  const userItems = [
    { href: '/user', text: 'Account' }
  ]
  const userMail = useSelector(getUser);

  return (
    <Flex
      m='0 auto'
      align='center'
    >
      {userItems.map(({ href, text }) =>
        <Link
          onClick={onClick}
          to={href}
          key={href}

          as={NavLink}
          display='flex'
          alignItems='center'
          py='6px'
          px={{ base: '36px', md: '28px' }}
          mr={{ base: '12px', xl: '20px' }}
          mb={{ base: '60px', md: 0 }}
          fontWeight='500'
          fontSize={{ base: '14px', md: '16px' }}
          lineHeight={{ base: '20px', md: '22px' }}
          letterSpacing='0.04em'
          color='#FFFFFF'
          bg='accent.accentOrange'
          border='2px solid'
          borderColor='accent.accentOrange'
          borderRadius='40px'

          _last={{ mr: 0 }}
        >
          <Avatar
            bg="white"
            color={'accent.accentOrange'}
            name={userMail.name}
            // size={'sm'}
            h='28px'
            w='28px'
            mr="12px"
            mb="1px"
          />
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