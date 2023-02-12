import PropTypes from 'prop-types'
import { Input, InputRightElement, InputGroup, Button } from '@chakra-ui/react'
import { SearchIcon, SmallCloseIcon } from '@chakra-ui/icons'

const FilterInput = ({handleSearch, handleClear, onChange, value, mb, isSubmited, category, ...rest}) => {
  return (
    <InputGroup
        maxWidth={{base:'280px', md:'608px'}}
        w={'full'}
        mx={'auto'}
        mb={mb}>
            <Input
                value={value}
                onChange={onChange}
                placeholder={'Search'}
                autoComplete={'off'}
                pl={{base:'12px', md:'20px'}}
                pr={{base:'40px', md:'44px'}}
                py={'9px'}
                h={{base:'40px', md:'44px'}}
                border={'1px solid'}
                borderColor={'white'}
                borderRadius={'20px'}
                boxShadow={'7px 4px 14px rgba(49, 21, 4, 0.07)'}
                color={'#535353'}
                backgroundColor={'white'}
                fontSize={{base:'16px', md:'20px'}}
                fontWeight={'medium'}
                lineHeight={'1.2'}
                letterSpacing={'0.04em'}
                _placeholder={{ color: '#535353',
                                opacity: 1}}
                _hover={{borderColor: 'rgba(245, 146, 86, 0.5)'}}
                _focus={{borderColor: 'rgba(245, 146, 86, 0.5)',
                        boxShadow: '7px 4px 14px rgba(49, 21, 4, 0.07)'}}
                {...rest}/>
            { (category !== 'favorite' && category !== 'own') 
            && <InputRightElement h={{base:'40px', md:'44px'}} w={{base:'40px', md:'44px'}}>
                <Button
                    p={'0'}
                    borderRadius={'50%'}
                    minWidth={'0'}
                    backgroundColor={'white'}
                    width={{base:'20px', md:'24px'}}
                    height={{base:'20px', md:'24px'}}
                    onClick={!isSubmited ? handleSearch : handleClear}
                    _hover={{backgroundColor: 'rgba(245, 146, 86, 0.5)'}}
                    _focus={{backgroundColor: 'rgba(245, 146, 86, 0.5)'}}>
                        {!isSubmited
                            ? <SearchIcon
                                width={{base:'15px', md:'18px'}}
                                height={{base:'15px', md:'18px'}}/> 
                            : <SmallCloseIcon
                                border={'2px solid'}
                                borderRadius={'50%'}
                                width={{base:'15px', md:'18px'}}
                                height={{base:'15px', md:'18px'}}/>}
                </Button>
            </InputRightElement>}
    </InputGroup>
  )
}

export default FilterInput

FilterInput.propTypes = {
    handleSearch: PropTypes.func,
    handleClear: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    mb: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object
      ]),
    isSubmited: PropTypes.bool
  }
  