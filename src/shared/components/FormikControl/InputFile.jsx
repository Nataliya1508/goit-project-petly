import {
    Box,
    Image,
    FormControl,
    FormLabel,
    FormErrorMessage,
    VisuallyHiddenInput } from "@chakra-ui/react"
import { useState } from "react";
// import Plus from './akar-icons_plus.svg'
import { Field } from 'formik';
  
const CustomInputFile = ({id, name, mb: marginbot='20px', borderRadius='40px', size, ...rest}) => {

    const [image, setImage] = useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    return (
        <Box w={size} h={size} mb={marginbot}>
            <Field>
                {({ form }) => (
                <FormControl
                    isInvalid={form.errors[name] && form.touched[name]}
                    _focusWithin={{outline: '2px solid #FF6101',
                                    borderRadius: `${borderRadius}`}}>
                    <FormLabel
                        htmlFor={id}
                        m='0'
                    >
                    {image
                        ?   <Image
                                src={image}
                                w={size}
                                h={size}
                                borderRadius={borderRadius}
                                alt='pet'></Image>
                        :   <Box
                                w={size}
                                h={size}
                                backgroundColor={'#FDF7F2'}
                                borderRadius={borderRadius}/>}
                    </FormLabel>
                    <VisuallyHiddenInput
                        id={id}
                        name={name}
                        onChange={(e) =>{
                                form.setFieldValue(`${name}`, e.currentTarget.files[0])
                                onImageChange(e)
                            }
                          }
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

// // _after={{ 
//     content: '""',
//     display: 'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     h: `${size}`,
//     w: `${size}`,
//     bg: '#FDF7F2',
//     bgImage: `url(${Plus})`,
//     bgRepeat: 'no-repeat',
//     bgSize: '30%',
//     bgPosition: '50% 50%',
//     border: "none",
//     borderRadius: `${borderRadius}`}}