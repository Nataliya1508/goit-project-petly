import { Box } from '@chakra-ui/react'

function Section({children, ...rest}) {
    return (
        <Box
            as={'section'}
            p={'100px 0'}
            {...rest}
        >
            {children}
        </Box>
    )
}

export default Section