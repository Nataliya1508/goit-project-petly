import { Button } from '@chakra-ui/react';
import React from 'react';

const AddNoticeButton = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      AddNoticeButton
    </Button>
  );
};

export default AddNoticeButton;
