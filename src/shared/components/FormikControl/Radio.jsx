import { Field } from "formik"
import { useMemo } from "react"
import { nanoid } from "nanoid"
import {
  Box,
  Image,
  Text,
  VisuallyHiddenInput } from "@chakra-ui/react"
import { default as male } from './el_male.jpg'
import { default as female } from './el_female.jpg'

const SexRadioButtons = ({label, name, options, ...rest}) => {
    const id = useMemo(()=> nanoid(), [])

  return (
    <Box mb='32px'>
        <Box
          mb='16px'>
            {label}
        </Box>
        <Box
          as='ul'
          display='flex'
          listStyleType='none'>
            <Field name={name} {...rest}>
                {
                    ({field}) => {
                        return options.map(({value, text}) => {
                            return (
                                <Box
                                  as='li'
                                  key={value}
                                  mr='40px'>
                                    <VisuallyHiddenInput
                                        type='radio'
                                        {...field}
                                        id={id+value}
                                        value={value}
                                        checked={field.value === value}
                                    />
                                    <Box as='label' htmlFor={id+value}>
                                      <Image  boxSize='40px'
                                              objectFit='cover'
                                              mb='12px'
                                              src={value === 'male' ? male : female}
                                              alt={value}/>
                                      <Text
                                        color={field.value === value ? '#F59256' : '#000000'}>
                                        {text}
                                      </Text>
                                    </Box> 
                                </Box>
                            )
                        })
                    }
                }
            </Field>
        </Box>
    </Box>
  )
}

export default SexRadioButtons