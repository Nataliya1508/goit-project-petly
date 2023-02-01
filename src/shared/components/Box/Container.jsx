import { Box } from '@chakra-ui/react'

function Container({children, ...rest}) {
    return (
        <Box
            p={'0 20px'}
            m={'0 auto'}
            backgroundColor={'#FDF7F2'}
            {...rest}
        >
            {children}
        </Box>
    )
}

export default Container