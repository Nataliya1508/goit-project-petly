import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputRightElement,
  IconButton, 
  InputGroup} from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Field } from 'formik';

const CustomInput = ({label, name, id, mb='16px', type='text', show, handleClick, ...rest}) => {
  return (
    <Box  w="240px" mb={mb}>
          <Field>
            {({ form }) => (
              <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                {label  ? <FormLabel 
                            htmlFor={id}
                            mb='8px'
                            mr='0'
                              >{label}
                          </FormLabel>
                        : null}
                <InputGroup>
                <Field
                    as={Input}
                    type={type}
                    id={id}
                    name={name}
                    variant='filled'
                    h='40px'
                    p="11px 14px"
                    fontSize="14px"
                    bg='#FDF7F2'
                    border= "1px solid rgba(245, 146, 86, 0.5)"
                    borderRadius='40px'
                    _placeholder={{ color: '#111111' }}
                    {...rest}
                  />
                  {type === 'password' && <InputRightElement>
                                            <IconButton
                                              onClick={handleClick}
                                              icon={show ? <ViewIcon/> : <ViewOffIcon/>}
                                              width={'30px'}
                                              height={'30px'}
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