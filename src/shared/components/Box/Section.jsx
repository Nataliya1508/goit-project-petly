import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'

function Section({children, ...rest}) {
    return (
        <Box
            as={'section'}
            pt={{base:'26px', md:'66px', xl:'39px'}}
            pb={{base:'100px', md:'100px', xl:'200px'}}
            {...rest}
        >
            {children}
        </Box>
    )
}

export default Section

Section.propTypes = {
    children: PropTypes.node
}