import { AddPetButton, Modal } from 'shared/components';
import { useDisclosure } from '@chakra-ui/react';
import { ModalAddsPet } from 'components/ModalAddsPet';
import { ModalAddNotice } from 'components/ModalAddNotice';

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <AddPetButton onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} title={'Add pet'}>
        <ModalAddNotice onClose={onClose} />
      </Modal>
    </>
  );
};

export default Home;
