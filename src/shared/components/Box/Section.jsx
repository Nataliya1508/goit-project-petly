import { Box } from '@chakra-ui/react'

function Section({children, ...rest}) {
    return (
        <Box
            as={'section'}
            pt={{base:'100px', md:'160px', xl:'126px'}}
            pb={{base:'100px', md:'100px', xl:'200px'}}
            {...rest}
        >
            {children}
        </Box>
    )
}

export default Section