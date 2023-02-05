import { Formik, Form } from "formik"
import { useMemo, useState } from "react"
import { nanoid } from "nanoid"
import moment from "moment/moment"
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

    function isDisabled(dirty, errors) {
        const {name, birthday, breed} = errors
        return !dirty || name !== undefined || birthday !== undefined || breed !== undefined
    }

    const handleSubmit = ({name, birthday, breed, photo, comments}, {resetForm}) => {
        const newPet = {
            name: name.trim(),
            birthday: moment(birthday, "YYYYY-MM-DD").format('DD.MM.YYYY'),
            breed: breed.trim(),
            photo,
            comments: comments.trim()
        }
        console.log(newPet)
        resetForm()
    }

    return (
        <Formik initialValues={addPetInitialState}
                validationSchema={addPetSchema}
                onSubmit={handleSubmit}
                validateOnChange={true}
                validateOnBlur={true}>
                {({errors, dirty}) => (
                    <Form autoComplete='off' encType="multipart/form-data">
                        {firstStep
                            ?   <>
                                    <FormikControl
                                        type='text'
                                        name='name'
                                        label={<>Name pet<Text color={'accent.accentOrange'}>*</Text></>}
                                        placeholder={'Type name pet'}
                                        id={nameId}
                                        width={'240px'}
                                        req={true}
                                    />
                                    <FormikControl
                                        type='date'
                                        name='birthday'
                                        label={<>Date of birthday<Text color={'accent.accentOrange'}>*</Text></>}
                                        id={birthdayId}
                                        width={'240px'}
                                    />
                                    <FormikControl
                                        type='text'
                                        name='breed'
                                        label={<>Breed<Text color={'accent.accentOrange'}>*</Text></>}
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
                                            isDisabled={isDisabled(dirty, errors)}
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
                                        display={'inline-flex'}
                                        fontSize={{base:'16px', md:'20px'}}
                                        fontWeight={'500'}
                                        lineHeight={{base:'short', md:'1.2'}}
                                        letterSpacing={'-0.01em'}
                                        mb={'20px'}    
                                    >
                                        Add photo and some comments{<Text color={'accent.accentOrange'}>*</Text>}
                                    </Text>
                                    <FormikControl
                                        control="file"
                                        id={photoId}
                                        name={'photo'}
                                        size={{base:'208px', md:'182px'}}
                                        borderRadius={{base:'20px', md:'40px'}}
                                        plusSize={{base:'30%', md:'40%'}}
                                    />
                                    <FormikControl
                                        control="textarea"
                                        name='comments'
                                        label={<>Comments<Text color={'accent.accentOrange'}>*</Text></>}
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