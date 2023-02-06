import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Flex, HStack, Link } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Nav = ({ onClick }) => {
  const navItems = [
    { href: '/news', text: 'News' },
    { href: '/notices/sell', text: 'Find pet' },
    { href: '/friends', text: 'Our friends' },
  ];

  return (
    <Box as="nav" display={{ base: 'box', xl: 'flex' }}>
      <Flex
        display={{ base: 'flex', xl: 'none' }}
        flexDir="column"
        align="center"
      >
        {navItems.map(({ href, text }) => (
          <Link
            onClick={() => onClick()}
            to={href}
            key={href}
            as={NavLink}
            mb={{ base: '40px', md: '60px' }}
            m={{ xl: 0 }}
            fontWeight="500"
            fontSize={{ base: '32px', md: '48px', xl: '20px' }}
            lineHeight={{ base: '44px', md: '66px', xl: '27px' }}
            letterSpacing="0.04em"
            color="#181C27"
            _first={{ mt: { md: '34px', xl: 0 } }}
            _last={{ mb: 0 }}
            _hover={{
              textDecorationLine: 'underline',
              color: 'accent.accentOrange',
            }}
            _focus={{
              textDecorationLine: 'underline',
              color: 'accent.accentOrange',
            }}
            _activeLink={{
              textDecorationLine: 'underline',
              color: 'accent.accentOrange',
            }}
          >
            {text}
          </Link>
        ))}
      </Flex>
      <Flex
        display={{ base: 'none', xl: 'flex' }}
        align="center"
        ml={{ xl: 20 }}
      >
        <HStack spacing="80px">
          {navItems.map(({ href, text }) => (
            <Link
              to={href}
              key={href}
              as={NavLink}
              mb={{ base: '40px', md: '60px' }}
              m={{ xl: 0 }}
              fontWeight="500"
              fontSize={{ base: '32px', md: '48px', xl: '20px' }}
              lineHeight={{ base: '44px', md: '66px', xl: '27px' }}
              letterSpacing="0.04em"
              color="#181C27"
              _first={{ mt: { md: '34px', xl: 0 } }}
              _last={{ mb: 0 }}
              _hover={{
                textDecorationLine: 'underline',
                color: 'accent.accentOrange',
              }}
              _focus={{
                textDecorationLine: 'underline',
                color: 'accent.accentOrange',
              }}
              _activeLink={{
                textDecorationLine: 'underline',
                color: 'accent.accentOrange',
              }}
            >
              {text}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Nav;

Nav.propTypes = {
  onClick: PropTypes.func,
};
