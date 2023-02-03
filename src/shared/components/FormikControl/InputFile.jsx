import {
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    VisuallyHiddenInput } from "@chakra-ui/react"
import Plus from './akar-icons_plus.svg'
import { Field } from 'formik';
  
const CustomInputFile = ({label, name, id, mb: marginbot='20px', borderRadius='40px', size, ...rest}) => {
    return (
        <Box w={size} h={size} mb={marginbot}>
            <Field>
                {({ form }) => (
                <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                    <FormLabel 
                        htmlFor={id}
                        display='flex'
                        flexDirection='column'
                        w={size}
                        h={size}
                        m='0'
                        _after={{ 
                            content: '""',
                            display: 'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            h: `${size}`,
                            w: `${size}`,
                            bg: '#FDF7F2',
                            bgImage: `url(${Plus})`,
                            bgRepeat: 'no-repeat',
                            bgSize: '30%',
                            bgPosition: '50% 50%',
                            border: "none",
                            borderRadius: `${borderRadius}`}}
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