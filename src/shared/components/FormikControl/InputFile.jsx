import {
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    VisuallyHiddenInput } from "@chakra-ui/react"
import Plus from './akar-icons_plus.svg'
import { Field } from 'formik';
  
const CustomInputFile = ({label, name, id, mb: marginbot='20px', labelmb='20px', w='116px', ...rest}) => {
    return (
        <Box w="240px" mb={marginbot}>
            <Field>
                {({ form }) => (
                <FormControl isInvalid={form.errors[name] && form.touched[name]} _focusWithin={{}}>
                    <FormLabel 
                        htmlFor={id}
                        display='flex'
                        flexDirection='column'
                        mr='0'
                        _after={{ 
                            content: '""',
                            display: 'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            h: `${w}`,
                            w: `${w}`,
                            bg: '#FDF7F2',
                            bgImage: `url(${Plus})`,
                            bgRepeat: 'no-repeat',
                            bgSize: '60%',
                            bgPosition: '50% 50%',
                            mt: `${labelmb}`,
                            border: "none",
                            borderRadius: '20px'}}
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