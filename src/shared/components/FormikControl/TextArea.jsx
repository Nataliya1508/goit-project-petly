import {
    Box,
    FormControl,
    FormLabel,
    Textarea,
    FormErrorMessage, } from "@chakra-ui/react"
import { Field } from 'formik';
  
const CustomTextArea = ({label, name, id, mb='40px', ...rest}) => {
  return (
    <Box  w={{base:'240px', md:'394px'}} mb={mb}>
          <Field>
            {({ form }) => (
              <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                {label  ? <FormLabel 
                            htmlFor={id}
                            mb={{base:'8px', md:'12px'}}
                            fontSize={{base:'18px', md:'24px'}}
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
                    h={{base:'137px', md:'116px'}}
                    p={{base:'12px 14px', md:'16px 16px'}}
                    fontSize={{base:'14px', md:'16px'}}
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