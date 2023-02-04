import { Avatar, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';

const UserNav = ({ onClick }) => {
  const userMail = useSelector(getUser);
  return (
    <Flex m="0 auto" align="center">
      <Link
        onClick={() => onClick(false)}
        to="/user"
        as={NavLink}
        display="flex"
        alignItems="center"
        pt="6px"
        pb="6px"
        pr={{ base: '36px', md: '28px' }}
        pl={{ base: '36px', md: '28px' }}
        mr={{ base: '12px', xl: '20px' }}
        mb={{ base: '60px', md: 0 }}
        fontWeight="500"
        fontSize={{ base: '14px', md: '16px' }}
        lineHeight={{ base: '20px', md: '22px' }}
        letterSpacing="0.04em"
        color="#FFFFFF"
        bg="#F59256"
        border="2px solid #F59256"
        borderRadius="40px"
      >
        <Avatar
          bg="white"
          color={'accent.accentOrange'}
          name={userMail.name}
          size={'sm'}
          // h={{ base: '20px', md: '28px' }}
          mr="12px"
          mb="1px"
        />
        Account
      </Link>
    </Flex>
  );
};
export default UserNav;

UserNav.propTypes = {
  onClick: PropTypes.func.isRequired,
};
