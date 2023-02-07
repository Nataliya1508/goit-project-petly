import { Box, Button, Flex, Heading, Text, useDisclosure } from "@chakra-ui/react";
import PetsList from "components/PetsList/PetsList";
import {Modal} from "shared/components/Modal"
import {ModalAddsPet} from 'components/ModalAddsPet'
import { BsFillPlusCircleFill } from 'react-icons/bs'

const PetsData = ({ pets }) => {
    const { onOpen, onClose, isOpen } = useDisclosure()
    return (
        <Box ml={{xl:'32px'}}>
            <Flex
                direction='baseline'
                justifyContent='space-between'
                pt={{ base: '40px', md: '20px', xl: '0px' }}
                mb={{ base: '26px', md: '22px', xl: '24px' }}>
                <Heading
                    as='h2'
                    my='auto'
                    fontSize={{ base: '20px', md: '28px' }}
                    lineHeight={{ base: "1.35" }}
                    fontWeight={{ base: '500' }}>
                    My pets:
                </Heading>
                <Button
                    onClick={onOpen}
                    rightIcon={<BsFillPlusCircleFill size='40px' fill='#F59256' m='0px' />}
                    bg='transparent'
                    fontSize={{ base: '20px', md: '28px' }}
                    color='black'
                    lineHeight={{ base: "1.35" }}
                    fontWeight={{ base: '500' }}
                    type="button"
                    px='0px'
                    _hover={{ color: 'accent.accentOrange' }}
                    transitionProperty={'color'}
                    transitionDuration={'250ms'}
                    transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}>
                    <Text mr='7px'>Add pet</Text>
                </Button>
            </Flex>
            <PetsList/>
            <Modal isOpen={isOpen} onClose={onClose} title={"Add pet"} >
                <ModalAddsPet/>
            </Modal>
        </Box>
    )
};

export default PetsData;