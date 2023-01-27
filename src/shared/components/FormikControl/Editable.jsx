import {
    Box,
    FormControl,
    FormLabel,
    Editable,
    EditableInput,
    EditablePreview,
    FormErrorMessage,
    IconButton, 
    useEditableControls} from "@chakra-ui/react"
import { CheckIcon, EditIcon } from '@chakra-ui/icons'
import { Field } from 'formik';
  
const CustomEditable = ({label, name, id, defaultValue, mb='16px', ...rest}) => {

  function EditableControls() {
      const {
        isEditing,
        getSubmitButtonProps,
        getEditButtonProps,
      } = useEditableControls()
  
      return isEditing    ? <IconButton
                              size='xs'
                              bg='#FDF7F2'
                              color='#F59256'
                              borderRadius='50%'
                              icon={<CheckIcon />} {...getSubmitButtonProps()} />
                          : <IconButton
                              size='xs'
                              bg='#FDF7F2'
                              color='rgba(17, 17, 17, 0.6);'
                              borderRadius='50%'
                              icon={<EditIcon />} {...getEditButtonProps()} />         
    }

  return (
    <Box  w="252px" mb={mb}>
          <Field>
            {({ form }) => (
              <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                  <Editable
                      defaultValue={defaultValue}
                      display="flex"
                      alignItems="center">
                      <FormLabel
                          display="inline-flex"
                          htmlFor={id}
                          fontSize="12px"
                          alignItems='center'
                          m='0'
                          h='24px'
                          w='56px'
                          mr='8px'
                          >{label}
                      </FormLabel>
                      <EditablePreview
                          w='159px'
                          h='24px'
                          p="4px 18px"
                          mr='9px'
                          fontSize="12px"/>
                      <Field
                          as={EditableInput}
                          id={id}
                          name={name}
                          variant='filled'
                          h='24px'
                          w='159px'
                          p="4px 18px"
                          mr='9px'
                          fontSize="12px"
                          bg='#FDF7F2'
                          border= "1px solid rgba(245, 146, 86, 0.5)"
                          borderRadius='40px'
                          _placeholder={{ color: '#111111' }}
                          {...rest}
                          />
                      <EditableControls />
                      <FormErrorMessage
                          fontSize="12px">
                          {form.errors[name]}
                      </FormErrorMessage>
                  </Editable>
              </FormControl>
            )}
          </Field>
    </Box>
  )
}

export default CustomEditable