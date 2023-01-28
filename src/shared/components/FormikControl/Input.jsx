import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage, } from "@chakra-ui/react"
import { Field } from 'formik';

const CustomInput = ({label, name, id, mb='16px', ...rest}) => {
  return (
    <Box  w="240px" mb={mb}>
          <Field>
            {({ form }) => (
              <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                {console.log(form.values)}
                {label  ? <FormLabel 
                            htmlFor={id}
                            mb='8px'
                            mr='0'
                              >{label}
                          </FormLabel>
                        : null}
                <Field
                    as={Input}
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