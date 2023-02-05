import { Field } from "formik"
import { useMemo } from "react"
import { nanoid } from "nanoid"
import {
  Box,
  Image,
  Text,
  VisuallyHiddenInput } from "@chakra-ui/react"
import male from './male.svg'
import female from './female.svg'

const SexRadioButtons = ({label, name, ...rest}) => {
    const id = useMemo(()=> nanoid(), [])
    const options = [{value: "male", text: "male"}, {value: "female", text: "female"}]
  return (
    <Box mb={{base:'32px', md:'40px'}}>
        <Box
          display={'inline-flex'}
          fontSize={{base:'18px', md:'24px'}}
          fontWeight={'500'}
          lineHeight={{base:'1.44', md:'1.08'}}
          mb={{base:'16px', md:'28px'}}>
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
                                  w={{base:'55px', md:'65px'}}
                                  _focusWithin={{outline: '2px solid #FF6101',
                                                borderRadius: '8px' }}
                                  mr={{base:'40px', md:'60px'}}
                                >
                                    <VisuallyHiddenInput
                                        type='radio'
                                        {...field}
                                        id={id+value}
                                        value={value}
                                        checked={field.value === value}
                                    />
                                    <Box as='label' htmlFor={id+value} display={'flex'} flexDirection={'column'} alignItems={'center'} mb={'0'}>
                                      <Image  boxSize={{base:'40px', md:'60px'}}
                                              objectFit='cover'
                                              mb={{base:'12px', md:'20px'}}
                                              src={value === 'male' ? male : female}
                                              alt={value}/>
                                      <Text
                                        fontSize={{base:'18px', md:'20px'}}
                                        fontWeight={'500'}
                                        lineHeight={{base:'1.44', md:'1.08'}}
                                        _hover={{color: '#F59256'}}
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