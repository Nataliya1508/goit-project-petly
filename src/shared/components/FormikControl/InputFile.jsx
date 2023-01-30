import {
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    VisuallyHiddenInput } from "@chakra-ui/react"
import { Field } from 'formik';
  
const CustomInputFile = ({label, name, id, mb: marginbot='20px', ...rest}) => {
    return (
        <Box w="240px" mb={marginbot}>
            <Field>
                {({ form }) => (
                <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                    <FormLabel 
                        htmlFor={id}
                        display='flex'
                        flexDirection='column'
                        mr='0'
                        mb='0'
                        _after={{ 
                            content: '"+"',
                            display: 'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            h: '208px',
                            w: '208px',
                            bg: '#FDF7F2',
                            border: "none",
                            borderRadius: '40px'}}
                        >{label ? label : null}
                    </FormLabel>

                    <Field
                        as={VisuallyHiddenInput}
                        id={id}
                        name={name}
                        type='file'
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

export default CustomInputFile