import { Button } from '@chakra-ui/react'

const FilterButton = ({children, ...rest}) => {
  return (
    <Button
        type={'button'}
        width={'fit-content'}
        height={['35px', null, '35px', '47px']}
        px={7}
        py={[2, null, 2, 2.5]}
        bg={'white'}
        color={'#111111'}
        border={'2px solid'}
        borderColor={'accent.100'}
        borderRadius={'40px'}
        fontSize={['sm', null, 'sm', 'xl']}
        fontWeight={'500'}
        lineHeight={'short'}
        letterSpacing={'0.04em'}
        _hover={{   bg: 'accent.100',
                    color: 'white' }}
        _focus={{   bg: 'accent.100',
                    color: 'white' }}
        _active={{  bg: 'accent.100',
                    color: 'white' }}
        {...rest}
            >{children}
    </Button>
  )
}

export default FilterButton