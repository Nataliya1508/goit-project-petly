import { Button, Icon } from '@chakra-ui/react'
import { AiOutlineHeart } from "react-icons/ai"

const FavoriteButton = ({...rest}) => {
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
            ><Icon as={AiOutlineHeart} width={'28px'} height={'28px'} fill={'accent.100'}/>
    </Button>
  )
}

export default FavoriteButton