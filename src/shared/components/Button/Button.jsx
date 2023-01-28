import { Button } from '@chakra-ui/react'

const CustomButton = ({children, controle='primary', ...rest}) => {
  return (
    <Button
        type='button'
        width='180px'
        height='44px'
        p='8.5px 28px'
        bg={controle==='secondary' ? 'accent.100' : 'white'}
        color={controle==='secondary' ? 'white' : '#111111'}
        border={controle==='secondary' ? 'none' : '2px solid #F59256'}
        borderRadius='40px'
        fontSize='20px'
        fontWeight='500'
        letterSpacing='0.04em'
        _hover={{   bg: `${controle==='secondary' ? 'white' : 'accent.100'}`,
                    border: `${controle==='secondary' ? '2px solid #F59256' : 'none'}`,
                    color: `${controle==='secondary' ? '#111111' : 'white'}` }}
        _focus={{   bg: 'accent.100',
                    border: 'none',
                    color: 'white' }}
        {...rest}
            >{children}
    </Button>
  )
}

export default CustomButton