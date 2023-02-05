import { Field } from "formik"
import { useMemo } from "react"
import { nanoid } from "nanoid"
import {
  Box,
  VisuallyHiddenInput,
  Text } from "@chakra-ui/react"

const CategoryRadioButtons = ({label, name, ...rest}) => {
    const id = useMemo(()=> nanoid(), [])
    const options = [ {value: "lost-found", text: "lost/found"},
                      {value: "for-free", text: "in good hands"},
                      {value: "sell", text: "sell"}]
  return (
    <Box mb={{base:'32px', md:'40px'}}>
        {label && <Box
                    fontSize={{base:'18px', md:'24px'}}
                    fontWeight={'500'}
                    lineHeight={{base:'1.44', md:'1.08'}}
                    mb={{base:'16px', md:'28px'}}>
                      {label}
                  </Box>}
        <Box
          as='ul'
          display='flex'
          flexWrap={'wrap'}
          gap={{base:'8px 12px', md:'12px 16px'}}
          listStyleType='none'>
            <Field name={name} {...rest}>
                {
                    ({field}) => {
                        return options.map(({value, text}) => {
                            return (
                                <Box
                                  as='li'
                                  key={value}
                                >
                                    <Box
                                      as='label'
                                      display={'inline-flex'}
                                      alignItems={'center'}
                                      htmlFor={id+value}
                                      mb={'0'}
                                      px={6}
                                      py={{base:'8px', md:'10px'}}
                                      border={'2px solid'}
                                      borderColor={'accent.accentOrange'}
                                      borderRadius={'40px'}
                                      bg={field.value === value ? 'accent.accentOrange' :'white'}
                                      color={field.value === value ? 'white' : '#111111'}
                                      width={'fit-content'}
                                      height={{base:'35px', md:'47px'}}
                                      _hover={{ bg: 'accent.accentOrange',
                                                color: 'white' }}
                                      _focusWithin={{backgroundColor: '#F59256',
                                                      outline: '2px solid #FF6101'}}>                                      
                                        {
                                          <>
                                            <VisuallyHiddenInput
                                                type='radio'
                                                {...field}
                                                id={id+value}
                                                value={value}
                                                checked={field.value === value}
                                            />
                                            <Text
                                              width={'fit-content'}
                                              fontSize={{base:'sm', md:'xl'}}
                                              fontWeight={'500'}
                                              lineHeight={'short'}
                                              letterSpacing={'0.04em'}
                                            >
                                              {text}
                                            </Text>
                                          </>
                                        }

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

export default CategoryRadioButtons