import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

const CustomModal = ({isOpen, onClose, title, children, ...rest}) => {
  return (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay bg={'rgba(17, 17, 17, 0.6);'} />
    <ModalContent
        w={['280px', null, '280px', '608px']}
        maxW={'none'}
        px={['20px', null, '20px', '80px']}
        py={'40px'}
        borderRadius={['20px', null, '20px', '40px']}
        {...rest}>
        {title && <ModalHeader
                      mx={'auto'}
                      mb={['20px', null, '20px', '40px']}
                      p={'0'}
                      fontSize={['2xl', null, '2xl', '4xl']}
                      fontWeight={'500'}
                      lineHeight={'short'}
                      color={'#111111'}
                          >{title}
                  </ModalHeader>}
        <ModalCloseButton
            width={['34px', null, '34px', '44px']}
            height={['34px', null, '34px', '44px']}
            top={'20px'}
            right={'20px'}
            bg={'#FDF7F2'}
            borderRadius={'50%'}
        />
        <ModalBody
            p={'0'}
                >{children}
        </ModalBody>
    </ModalContent>
  </Modal>
  )
}

export default CustomModal