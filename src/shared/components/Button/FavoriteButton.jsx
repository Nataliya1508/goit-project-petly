import { Button, Image } from '@chakra-ui/react'
import heart from './heart.svg'
import heartFull from './heartFull.svg'

const FavoriteButton = ({favorite, ...rest}) => {
  return (
    <Button
        type={'button'}
        position={'absolute'}
        top={'12px'}
        right={'12px'}
        width={'44px'}
        height={'44px'}
        p={'0'}
        backgroundColor={'rgba(255, 255, 255, 0.6)'}
        backdropFilter={'blur(2px)'}
        borderRadius={'50%'}
        {...rest}
            ><Image
              src={favorite ? heartFull : heart}
              width={'28px'}
              height={'28px'}/>
    </Button>
  )
}

export default FavoriteButton