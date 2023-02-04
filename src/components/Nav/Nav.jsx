import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Flex, HStack, Link } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Nav = ({ onClick }) => {
  const navItems = [
    { href: '/news', text: 'News' },
    { href: '/notices', text: 'Find pet' },
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
            transitionProperty={'font-weight, text-decoration, color'}
            transitionDuration={'250ms'}
            transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
            color="#181C27"
            _first={{ mt: { md: '34px', xl: 0 } }}
            _last={{ mb: 0 }}
            _hover={{
              fontWeight: '700',
              textDecoration: 'underline',
              color: '#F59256',
            }}
            _focus={{
              fontWeight: '700',
              textDecoration: 'underline',
              color: '#F59256',
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
              transitionProperty={'font-weight, text-decoration, color'}
              transitionDuration={'350ms'}
              transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
              color="#181C27"
              _first={{ mt: { md: '34px', xl: 0 } }}
              _last={{ mb: 0 }}
              _hover={{
                fontWeight: '700',
                textDecoration: 'underline',
                color: '#F59256',
              }}
              _focus={{
                fontWeight: '700',
                textDecoration: 'underline',
                color: '#F59256',
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
