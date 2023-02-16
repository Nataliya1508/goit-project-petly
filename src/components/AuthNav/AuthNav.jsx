import { Flex, Link } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthNav = ({ onClick }) => {
  const authItems = [
    { href: '/login', text: 'Login' },
    { href: '/register', text: 'Registration' },
  ];

  return (
    <Flex m="0 auto" align="center">
      {authItems.map(({ href, text }) => (
        <Link
          onClick={() => onClick(false)}
          to={href}
          key={href}
          as={NavLink}
          display="flex"
          alignItems="center"
          py={{ base: '6px', md: '8px' }}
          px={{ base: '28px', md: '36px' }}
          mr={{ base: '12px', xl: '20px' }}
          mb={{ base: '60px', md: 0 }}
          fontWeight="500"
          fontSize={{ base: '14px', md: '20px' }}
          lineHeight={{ base: '19px', md: '27px' }}
          letterSpacing="0.04em"
          color="#FFFFFF"
          bg="accent.accentOrange"
          border="2px solid"
          borderColor="accent.accentOrange"
          borderRadius="40px"
          _last={{ mr: 0 }}
          _hover={{ bg: 'accent.background', color: 'accent.black' }}
          _focus={{ bg: 'accent.background', color: 'accent.black' }}
          _activeLink={{ bg: 'accent.background', color: 'accent.black' }}
        >
          {text}
        </Link>
      ))}
    </Flex>
  );
};

export default AuthNav;

AuthNav.propTypes = {
  onClick: PropTypes.func,
};
