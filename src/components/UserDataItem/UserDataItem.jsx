import {
    FormControl,
    FormLabel,
    Input,
    Button,
} from "@chakra-ui/react"

const UserDataItem = () => {
    return <FormControl display='flex'
    alignItems='center'
    justifyContent='center'
    width='100%'>
        <FormLabel>info</FormLabel>
        <Input placeholder="value" />
        <Button type='button'>toggleButton</Button>
    </FormControl>;
};

export default UserDataItem;