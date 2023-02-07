import { FaPen, FaCheck } from 'react-icons/fa';
import { FormControl, FormLabel, Input, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/auth/auth-operations';




const UserDataItem = ({ nameInput, valueInput, type }) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState(valueInput)
  const [conditionInput, setConditionInput] = useState(true)
  const handleValueChange = e => {
    setValue(e.target.value)
  }

  const onBtnClick = () => {
    setConditionInput(!conditionInput)
    if (value !== valueInput) {
      const data = {
        [nameInput.toLowerCase()] : value
      }
      dispatch(updateUser(data))
    }
  }

  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      mb="8px"
    >
      <FormLabel
        m="0px"
        fontSize={{ base: '12px', md: '18px' }}
        lineHeight={{ base: '1.35' }}
        fontWeight={{ base: '600' }}
        w={{ base: '56px', md: '83px' }}
      >
        {nameInput}:
      </FormLabel>
      <Input
        fontSize={{ base: '12px', md: '18px' }}
        lineHeight={{ base: '1.35' }}
        fontWeight={{ base: '500', md: '400' }}
        name={nameInput}
        type={type}
        placeholder=''
        required="true.sting"
        px="12px"
        w={{ base: '159px', md: '220px' }}
        h={{ base: '24px', md: '32px' }}
        bgColor={conditionInput ? 'accent.white' : 'accent.background'}
        outline='none'
        focusBorderColor='rgba(245, 146, 86, 0.5)'
        border= "1px solid rgba(245, 146, 86, 0.5)" 
        borderRadius="40px"
        value={value ?? ""}
        onChange={handleValueChange}
        disabled={conditionInput}
        _disabled={{opacity:"1.0", border:'1px solid transparent'}}
        _hover={{ border:'1px solid rgba(245, 146, 86, 0.5)' }}
        
        pointerEvents={conditionInput ? 'none' : 'text'}
      />

      <Box
        as='button'
        onClick={onBtnClick}
        display='flex'
        alignItems='center'
        justifyContent='center'
        type='button'
        borderRadius="100%"
        p="0px"
        w={{ base: '20px', md: '32px' }}
        h={{ base: '20px', md: '32px' }}
        padding="5px"
        bg='accent.background'
        color='accent.grey'
        _active={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))', color: '#F59256' }}
        _hover={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))', color: '#F59256' }}
        transitionProperty={'filter, color'}
        transitionDuration={'250ms'}
        transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
      >
        {conditionInput ?  <FaPen color="inherit" h={{ base: '10px', md: '15px' }} w={{ base: '10px', md: '15px' }} /> : 
        <FaCheck color='#F59256' h={{ base: '10px', md: '15px' }} w={{ base: '10px', md: '15px' }} />}
      </Box>
    </FormControl>
  );
};

export default UserDataItem;
