import PropTypes from 'prop-types'
import { Button, Image } from '@chakra-ui/react';
import { heart, heartFull } from 'media';

const FavoriteButton = ({ toggleFav, isFavorite, ...rest }) => {
  return (
    <Button
      type={'button'}
      position={'absolute'}
      aria-label='Add to favorite'
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
      <Image src={isFavorite ? heartFull : heart} width={7} height={7} />
    </Button>
  );
};

export default FavoriteButton;

FavoriteButton.propTypes = {
  toggleFav: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
}
