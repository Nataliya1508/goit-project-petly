import { Button, Image } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import heart from './heart.svg';
import heartFull from './heartFull.svg';

const FavoriteButton = ({ noticeId, toggleFav, ...rest }) => {
  const { favorites } = useSelector(getUser);

  return (
    <Button
      type={'button'}
      position={'absolute'}
      top={3}
      right={3}
      width={'44px'}
      height={'44px'}
      p={'0'}
      backgroundColor={'#ffffff99'}
      backdropFilter={'blur(2px)'}
      borderRadius={'50%'}
      onClick={toggleFav}
      {...rest}
    >
      <Image
        src={favorites?.includes(noticeId) ? heartFull : heart}
        width={7}
        height={7}
      />
    </Button>
  );
};

export default FavoriteButton;
