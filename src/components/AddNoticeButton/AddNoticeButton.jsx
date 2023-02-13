import { Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { ToastContainer, toast } from 'react-toastify';
import ModalAddNotice from 'components/ModalAddNotice/ModalAddNotice';

const AddNoticeButton = () => {
  const [showModal, setShowModal] = useState(false);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleClick = () => {
    if (!isLoggedIn) {
      toast('Please log in!');
    }
    setShowModal(true);
  };

  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button type="button" onClick={handleClick} aria-label="add pet">
          Add pet
        </Button>
        <IconButton
          aria-label="Add to friends"
          onClick={handleClick}
          icon={<AddIcon />}
        />
      </ButtonGroup>
      <ToastContainer />
      {showModal && <ModalAddNotice setShowModal={setShowModal} />}
    </>
  );
};

export default AddNoticeButton;
