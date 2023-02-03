import { IconButton } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

const AddPetButton = ({onClick, ...rest}) => {
  return (
    <IconButton
        type={'button'}
        onClick={onClick}
        aria-label='Add pet'
        w={'40px'}
        h={'40px'}
        borderRadius={'50%'}
        backgroundColor={'accent.100'}
        icon={<AddIcon color={'white'}/>}
        _hover={{backgroundColor: '#FF6101'}}
        _focus={{backgroundColor: '#FF6101'}}
        {...rest}>
    </IconButton>
  )
}

export default AddPetButton