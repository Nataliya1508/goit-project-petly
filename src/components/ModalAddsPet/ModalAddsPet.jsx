import { Formik, Form } from "formik"
import { useMemo, useState } from "react"
import { nanoid } from "nanoid"
import { Text, Box } from "@chakra-ui/react"
import { FormikControl, Button } from "shared/components"
import { addPetInitialState, addPetSchema } from "./index"

const ModalAddsPet = ({onClose}) => {
    const nameId = useMemo(()=> nanoid(), [])
    const birthdayId = useMemo(()=> nanoid(), [])
    const breedId = useMemo(()=> nanoid(), [])
    const photoId = useMemo(()=> nanoid(), [])
    const commentsId = useMemo(()=> nanoid(), [])

    const [firstStep, setFirstStep] = useState(true)

    const handleSubmit = ({name, birthday, breed, photo, comments}, {resetForm}) => {
        const newPet = {
            name: name.trim(),
            birthday,
            breed,
            photo,
            comments
        }
        console.log(newPet)
        resetForm()
    }

    return (
        <Formik initialValues={addPetInitialState}
                validationSchema={addPetSchema}
                onSubmit={handleSubmit}
                validateOnChange={false}
                validateOnBlur={true}>
                {({form}) => (
                    <Form autoComplete='off'>
                        {firstStep
                            ?   <>
                                    <FormikControl
                                        type='text'
                                        name='name'
                                        label='Name pet'
                                        placeholder='Type name pet'
                                        id={nameId}
                                        width={'240px'}
                                    />
                                    <FormikControl
                                        type='text'
                                        name='birthday'
                                        label='Date of birthday'
                                        placeholder='Type date of birthday'
                                        id={birthdayId}
                                        width={'240px'}
                                    />
                                    <FormikControl
                                        type='text'
                                        name='breed'
                                        label='Breed'
                                        placeholder='Type breed'
                                        id={breedId}
                                        width={'240px'}
                                        mb={'40px'}
                                    />
                                    <Box    
                                        maxW={'none'}
                                        display={'flex'}
                                        flexDirection={{base:'column', md:'row-reverse'}}
                                        justifyContent={{base:'center', md:'center'}}
                                    >
                                        <Button
                                            controle='secondary'
                                            onClick={()=>setFirstStep(false)}
                                            mb={{base:'12px', md:'0'}}
                                            width={{md:'180px'}}
                                        >
                                            Next
                                        </Button>
                                        <Button
                                            onClick={onClose}
                                            mr={{md:'20px'}}
                                            width={{md:'180px'}}
                                        >
                                            Cancel
                                        </Button>
                                    </Box>
                                </>
                            :   <Box 
                                    display={'flex'}
                                    flexDirection={'column'}
                                    alignItems={'center'}
                                    maxW={'none'}
                                >  
                                    <Text
                                        fontSize={{base:'16px', md:'20px'}}
                                        fontWeight={'500'}
                                        lineHeight={{base:'short', md:'1.2'}}
                                        letterSpacing={'-0.01em'}
                                        mb={'20px'}    
                                    >
                                        Add photo and some comments
                                    </Text>
                                    <FormikControl
                                        control="file"
                                        name='photo'
                                        id={photoId}
                                        size={'208px'}
                                    />
                                    <FormikControl
                                        control="textarea"
                                        name='comments'
                                        label='Comments'
                                        placeholder='Type comments'
                                        id={commentsId}
                                    />
                                    <Box
                                        maxW={'none'}
                                        width={'100%'}
                                        display={'flex'}
                                        flexDirection={{base:'column', md:'row-reverse'}}
                                        justifyContent={{base:'center', md:'center'}}
                                    >
                                        <Button
                                            type='submit'
                                            mb={{base:'12px', md:'0'}}
                                            controle='secondary'
                                            width={{md:'180px'}}
                                        >
                                            Done
                                        </Button>
                                        <Button
                                            onClick={()=>setFirstStep(true)}
                                            mr={{md:'20px'}}
                                            width={{md:'180px'}}
                                        >
                                            Back
                                        </Button>
                                    </Box>
                                </Box>
                        }
                        
                    </Form>
                )}
        </Formik>
)}

export default ModalAddsPet