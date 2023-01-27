import {
    Box,
    FormControl,
    FormLabel,
    Textarea,
    FormErrorMessage, } from "@chakra-ui/react"
import { Field } from 'formik';
  
const CustomTextArea = ({label, name, id, mb='16px', ...rest}) => {
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
                <Field
                    as={Textarea}
                    id={id}
                    name={name}
                    resize='none'
                    variant='filled'
                    h='137px'
                    p="12px 14px"
                    fontSize="14px"
                    bg='#FDF7F2'
                    border= "1px solid rgba(245, 146, 86, 0.5)"
                    borderRadius='20px'
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

export default CustomTextArea