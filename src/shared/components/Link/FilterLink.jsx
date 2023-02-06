import { Link as RouteLink } from 'react-router-dom'
import { Link } from '@chakra-ui/react'

const FilterLink = ({children, ...rest}) => {
  return (
    <Link
        as={RouteLink}
        display={'inline-flex'}
        alignItems={'center'}
        width={'fit-content'}
        height={{base:'35px', md:'47px'}}
        px={7}
        py={{base:'2', md:'2.5'}}
        bg={'white'}
        color={'accent.black'}
        border={'2px solid'}
        borderColor={'accent.accentOrange'}
        borderRadius={'40px'}
        fontSize={{base:'sm', md:'xl'}}
        fontWeight={'medium'}
        lineHeight={'short'}
        letterSpacing={'0.04em'}
        _hover={{   bg: 'accent.accentOrange',
                    color: 'white' }}
        _focus={{   bg: 'accent.accentOrange',
                    color: 'white' }}
        _activeLink={{  bg: 'accent.accentOrange',
                    color: 'white' }}
        _active={{  bg: 'accent.accentOrange',
                    color: 'white' }}
        {...rest}
            >{children}
    </Link>
  )
}

export default FilterLink