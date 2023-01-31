import { Button } from '@chakra-ui/react'

const CustomButton = ({children, controle='primary', ...rest}) => {
  return (
    <Button
        type={'button'}
        width={'full'}
        height={[10, null, 10, '44px', null, 12]}
        py={[2, null, 2, 2.5]}
        px={7}
        bg={controle==='secondary' ? 'accent.100' : 'white'}
        color={controle==='secondary' ? 'white' : '#111111'}
        border={'2px solid'}
        borderColor={'accent.100'}
        borderRadius={'40px'}
        fontSize={['md', null, 'md', 'xl']}
        fontWeight={'medium'}
        letterSpacing={'0.04em'}
        lineHeight={['short', null, 'short', '1.35']}
        _hover={{   bg: `${controle==='secondary' ? 'white' : 'accent.100'}`,
                    color: `${controle==='secondary' ? '#111111' : 'white'}` }}
        _focus={{   bg: 'accent.100',
                    color: 'white' }}
        {...rest}
            >{children}
    </Button>
  )
}

export default CustomButton