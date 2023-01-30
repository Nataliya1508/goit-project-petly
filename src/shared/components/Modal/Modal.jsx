import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

const CustomModal = ({isOpen, onClose, title, children}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay bg='rgba(17, 17, 17, 0.6);' />
    <ModalContent
        width='280px'
        p='40px 20px'>
        <ModalHeader
            m='0 auto 28px auto'
            p='0'
            fontSize='24px'
            fontWeight='500'
            color='#111111'
                >{title}
        </ModalHeader>
        <ModalCloseButton
            width='34px'
            height='34px'
            bg='#FDF7F2'
            borderRadius='50%'
        />
        <ModalBody
            p='0'
                >{children}
        </ModalBody>
    </ModalContent>
  </Modal>
  )
}

export default CustomModal