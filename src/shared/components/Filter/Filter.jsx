import { Button } from '@chakra-ui/react'

const CustomFilter = ({children, ...rest}) => {
  return (
    <Button
        type='button'
        width='fit-content'
        height='35px'
        p='8px 28px'
        bg='white'
        color='#111111'
        border='2px solid #F59256'
        borderRadius='40px'
        fontSize='14px'
        fontWeight='500'
        letterSpacing='0.04em'
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

export default CustomFilter