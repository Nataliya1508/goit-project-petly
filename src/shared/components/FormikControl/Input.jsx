import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputRightElement,
  IconButton, 
  InputGroup} from "@chakra-ui/react"
import { useEffect } from "react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Field, useFormikContext } from 'formik';

const CustomInput = ({label, name, id, mb='16px', width='280px', type='text', show, handleClick, ...rest}) => {
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    if (values.categoryName !== 'sell') {
      setFieldValue('price', null)
    }
    if (values.categoryName === 'sell') {
      setFieldValue('price', '')
    }
  }, [values.categoryName, setFieldValue]);

  return (
    <Box  w={{base: `${width}`, md:'448px', xl:'458px'}} mb={mb}>
          <Field>
            {({ form }) => (
              <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                {label  ? <FormLabel
                            display={'inline-flex'}
                            htmlFor={id}
                            fontSize={{base:'18px', md:'24px'}}
                            fontWeight={'500'}
                            lineHeight={'1.44'}
                            color={'#111111'}
                            mb='8px'
                            mr='0'
                              >
                                {label}
                          </FormLabel>
                        : null}
                <InputGroup maxH={{base:'40px', md:'52px'}}>
                <Field
                    as={Input}
                    type={(type !== 'password') ? type : (show ? 'text' : 'password')}
                    id={id}
                    name={name}
                    variant='filled'
                    minH={'none'}
                    h={{base:'40px', md:'52px'}}
                    p={{base:"11px 14px", md:"14px 32px"}}
                    fontSize={{base:'14px', md:'18px'}}
                    lineHeight={'short'}
                    color={(type === 'date' && form.values.birthday === '') ? 'rgba(27, 27, 27, 0.6)' : '#111111'}
                    bg='#FDF7F2'
                    border= "1px solid rgba(245, 146, 86, 0.5)"
                    borderRadius='40px'
                    _placeholder={{ color: '#111111' }}
                    {...rest}
                  />
                  {type === 'password' && <InputRightElement width={{base:'40px', md:'52px'}} height={{base:'40px', md:'52px'}}>
                                            <IconButton
                                              onClick={handleClick}
                                              icon={show ? <ViewOffIcon/> : <ViewIcon/>}
                                              width={{base:'30px', md:'40px'}}
                                              height={{base:'30px', md:'40px'}}
                                              minW={'none'}
                                              backgroundColor={'transparent'}
                                              borderRadius={'50%'}/>
                                          </InputRightElement>}
                </InputGroup>
                <FormErrorMessage
                  fontSize="12px">
                    {form.errors[name]}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
    </Box>
  )
}

export default CustomInput