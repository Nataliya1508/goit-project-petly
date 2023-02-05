import {
    Box,
    Image,
    FormControl,
    FormLabel,
    FormErrorMessage,
    VisuallyHiddenInput } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import {default as Plus} from './plus.svg' 
import { Field, useFormikContext } from 'formik';
  
const CustomInputFile = ({id, name, plusSize='30%', mb: marginbot='20px', borderRadius='40px', size, ...rest}) => {

    const [image, setImage] = useState(null)
    const { values } = useFormikContext();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    useEffect(() => {
        if (values.photo === null) {
            setImage(null)
        }
        if (values.photo !== null) {
            setImage(URL.createObjectURL(values.photo))
        }
      }, [values.photo]);

    return (
        <Box w={size} h={size} mb={marginbot}>
            <Field>
                {({ form }) => (
                <FormControl
                    isInvalid={form.errors[name] && form.touched[name]}
                    >
                    <Box _focusWithin={{outline: '2px solid #FF6101',
                                        borderRadius: '20px'}}>
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
                                bgColor={'#FDF7F2'}
                                borderRadius={borderRadius}
                                bgImage={Plus}
                                bgRepeat={'no-repeat'}
                                bgPosition={'50% 50%'}
                                bgSize={plusSize}>
                            </Box>}
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
                    </Box>
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