import React from 'react';
import { AddPetButton, Modal } from 'shared/components';
import { useDisclosure } from '@chakra-ui/react';
import { ModalAddsPet } from 'components/ModalAddsPet';



const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return <div>
    <AddPetButton onClick={onOpen}/>
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={'Add pet'}
    >
      <ModalAddsPet onClose={onClose}/>
    </Modal>
  </div>;
};

export default Home;
