import UserDataItem from "components/UserDataItem/UserDataItem";

import {
    Box,
    Button,
    Heading,
    Image
} from "@chakra-ui/react"




const UserData = () => {
    return <Box>
        <Heading as='h2'>My information:</Heading>
        <Box>
            <Image src="" alt="user photo" />
            <Button>Edit photo</Button>
        </Box>
        <UserDataItem />
        <UserDataItem />
        <UserDataItem />
        <UserDataItem />
        <UserDataItem/>
    </Box>;
};

export default UserData;