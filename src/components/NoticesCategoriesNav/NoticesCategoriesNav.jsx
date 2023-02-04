import { Outlet } from 'react-router-dom'
import { FilterLink, AddPetButton, Modal } from 'shared/components'
import { Box, useDisclosure } from '@chakra-ui/react'
import { ModalAddNotice } from 'components/ModalAddNotice'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from 'redux/auth/auth-selectors'
import { toast } from 'react-toastify';

const NoticesCategoriesNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleClick = () => {
    if (!isLoggedIn) {
    toast("Please log in!")}
    onOpen(true)
  }

  return (
    <Box maxWidth={{base:'280px', md:'704px', xl: '1248px'}} mx={'auto'}>
        <Box mb={{base:'30px', md:'60px'}} display={"flex"}>
          <Box
            as={'nav'}
            maxW={{base:'280px', md:'474px', xl: '802px'}}
            display={'flex'}
            flexWrap={'wrap'}
            gap={{base:'12px', md:'16px 12px', xl: '12px'}}
            mr={'auto'}
            ml={{base:'auto', md:'0'}}>
              <FilterLink to={"lost-found"}>lost/found</FilterLink>
              <FilterLink to={"free"}>in good hand</FilterLink>
              <FilterLink to={"sell"}>sell</FilterLink>
              <FilterLink to={"favorite"}>favorite ads</FilterLink>
              <FilterLink to={"own"}>my ads</FilterLink>
          </Box>
          <Box
          display={'flex'} 
          flexDir={'row'}
          alignItems={'center'} 
          >
          <Box 
                size={{w:'74px', h:'27px'}}
                textAlign={'center'}
                fontStyle= {"normal"}
                fontWeight={ "500"}
                fontSize= {'20px'}
                lineHeight= {'27px'}
                mr={'12px'}
                color='#111111'
          >Add pet</Box>
          <AddPetButton
            onClick={handleClick}
            size={{base:'80px', md:'44px'}}
            position={{base:'fixed', md:'static'}}
            top={'455px'}
            right={'20px'}
            zIndex={'2'}
          />
          </Box>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={'Add pet'}
          >
            <ModalAddNotice onClose={onClose}/>
          </Modal>
        </Box>
        <Outlet />
    </Box>
  )
}

export default NoticesCategoriesNav