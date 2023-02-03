import { Outlet } from 'react-router-dom'
import { FilterLink } from 'shared/components'
import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from 'redux/auth/auth-selectors'

const NoticesCategoriesNav = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)
  return (
    <Box>
        <Box
          as={'nav'}
          maxW={{base:'280px', md:'474px', xl: '802px'}}
          display={'flex'}
          flexWrap={'wrap'}
          gap={{base:'12px', md:'16px 12px', xl: '12px'}}
          mb={{base:'30px', md:'60px'}}
          mr={'auto'}
          ml={{base:'auto', md:'0'}}>
            <FilterLink to={"/notices/lost-found"}>lost/found</FilterLink>
            <FilterLink to={"/notices/free"}>in good hand</FilterLink>
            <FilterLink to={"/notices/sell"}>sell</FilterLink>
              {isLoggedIn && (
              <> 
              <FilterLink to={"/notices/favorite"}>favorite ads</FilterLink> 
              <FilterLink to={"/notices/own"}>my ads</FilterLink> 
              </>
              )}
        </Box>
        <Outlet />
    </Box>
  )
}

export default NoticesCategoriesNav