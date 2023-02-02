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
        py={{base:'8px', md:'10px'}}
        bg={'white'}
        color={'#111111'}
        border={'2px solid'}
        borderColor={'accent.100'}
        borderRadius={'40px'}
        fontSize={{base:'sm', md:'xl'}}
        fontWeight={'500'}
        lineHeight={'short'}
        letterSpacing={'0.04em'}
        _hover={{   bg: 'accent.100',
                    color: 'white' }}
        _focus={{   bg: 'accent.100',
                    color: 'white' }}
        _activeLink={{  bg: 'accent.100',
                    color: 'white' }}
        _active={{  bg: 'accent.100',
                    color: 'white' }}
        {...rest}
            >{children}
    </Link>
  )
}

export default FilterLink