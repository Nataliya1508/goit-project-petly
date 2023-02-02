import {FaPen} from 'react-icons/fa'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Box,
} from "@chakra-ui/react"

const UserDataItem = ({name}) => {
    return (
        <FormControl
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            width='100%'>
            <FormLabel
                m='0px'
                fontSize={{ sm: '12px', md: '18px' }}
                lineHeight={{ sm: "1.35" }}
                fontWeight={{ sm: '500' }}
                w={{ sm: '56px', md: '83px' }}>{name}
            </FormLabel>
            <Input
                fontSize={{ sm: '12px', md: '18px' }}
                lineHeight={{ sm: "1.35" }}
                fontWeight={{ sm: '500', md: '400' }}
                px='12px'
                w={{ sm: '159px', md: '216px' }}
                h={{ sm: '24px', md: '32px' }}
                placeholder="value"
            />
            
            <Box as='Button'  type='button' borderRadius='100%' p='0px' w='20px' h='20px' padding='5px' bg='#FDF7F2' ><FaPen fill={'#F59256'} size={'10px'} /></Box>
            
            
            
        </FormControl>)
};

export default UserDataItem;