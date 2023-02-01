import { Outlet } from 'react-router-dom'
import {Box, LinkBox, Link} from '@chakra-ui/react';

const NoticesCategoriesNav = () => {
  return (
    <Box>
        <LinkBox mb={'30px'}>
            <Link to={"sell"}>sell</Link>
            <Link to={"lost-found"}>lost/found</Link>
            <Link to={"free"}>in good hand</Link>
        </LinkBox>
        <Outlet />
    </Box>
  )
}

export default NoticesCategoriesNav