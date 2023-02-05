import { Button, Image } from '@chakra-ui/react'
import heart from './heart.svg'
import heartFull from './heartFull.svg'

const FavoriteButton = ({favorite, ...rest}) => {
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
        {...rest}
            ><Image
              src={favorite ? heartFull : heart}
              width={7}
              height={7}/>
    </Button>
  )
}

export default FavoriteButton