import { WorkTime } from './WorkTime';
import {
  SimpleGrid,
  CardHeader,
  Card,
  Text,
  Box,
  Image,
  Link,
  Stack,
  CardBody,
} from '@chakra-ui/react';

export const OurFriendsList = ({ friends }) => {
  return (
    <SimpleGrid
      justifyItems={'center'}
      columns={{ base: 1, md: 2, xl: 3 }}
      spacing={{ base: '3', md: '8' }}
    >
      {friends.map(
        ({
          _id,
          title,
          url,
          addressUrl,
          address,
          imageUrl,
          workDays,
          phone,
          email,
        }) => (
          <Card
            bgColor={'#FFFFFF'}
            borderRadius={{base:'20px', md:'40px'}}
            boxShadow={'7px 4px 14px rgba(49, 21, 4, 0.07)'}
            key={_id}
            w={{ base: '280px', md: '336px', xl: '394px'}}
            py={{ base: '3', md: '4' }}
            px='1'
          >
            <CardHeader
              as={'h3'}
              p={0}
              textAlign={'center'}
              color={'#F59256'}
              fontWeight={'bold'}
              fontSize={{ base: 'xs', md: 'md', xl: 'xl' }}
              lineHeight={{ base: '1.33', md: 'short', xl: '1.35' }}
            >
              <Link
                position={'relative'}
                color={'#f59256'}
                href={url}
                target="_blank"
                rel="noreferrer"
                textDecoration='underline'
                textDecorationThickness='1px'
              >
                {title}
              </Link>
            </CardHeader>

            <Stack
              direction={{ base: 'column', sm: 'row' }}
              mt={{ base: '3', md: '4' }}
              spacing={{ base: '3', md: '3.5', xl: '4' }}
            >
              <Box 
              w={{ base: '110px', md: '120px', xl: '158px' }}
              h={{ base: '78px', md: '85px', xl: '112px' }}
              display='flex'
              justifyContent='center'
              >
                <Image m={0} src={imageUrl} alt={title} />
              </Box>
              <Box
              w={{ base: '150px', md: '194px', xl: '213px' }}
              h={{ base: 'full', md: 'full', xl: 'full' }}
              >
                <Stack>
                  <CardBody p={0}>
                    <Box
                      as="div"
                      display={'flex'}
                      flexDirection={'column'}
                      textAlign={'start'}
                      mb={{ base: '1', md: '2', xl: '3' }}
                      fontWeight={'medium'}
                      fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}
                      lineHeight={{ base: '1.33', md: '1.35', xl: 'short' }}
                      color={'#111111'}
                      position={'relative'}
                    >
                      Time:
                      {workDays ? <WorkTime workDays={workDays} /> : <hr />}
                    </Box>
                    <Box
                      as="div"
                      display={'flex'}
                      flexDirection={'column'}
                      textAlign={'start'}
                      mb={{ base: '1', md: '2', xl: '3' }}
                      fontWeight={'medium'}
                      fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}
                      lineHeight={{ base: '1.33', md: '1.35', xl: 'short' }}
                      color={'#111111'}
                      type="address"
                    >
                      Address:
                      <Link href={addressUrl} target="_blank" rel="noreferrer">
                        {address ? <span>{address}</span> : <hr />}
                      </Link>
                    </Box>
                    <Box
                      as="div"
                      display={'flex'}
                      flexDirection={'column'}
                      textAlign={'start'}
                      mb={{ base: '1', md: '2', xl: '3' }}
                      fontWeight={'medium'}
                      fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}
                      lineHeight={{ base: '1.33', md: '1.35', xl: 'short' }}
                      color={'#111111'}
                      type="email"
                    >
                      Email:
                      <Link href="mailto:{address}">
                        {email ? email : <Text />}{' '}
                      </Link>
                    </Box>
                    <Box
                      as="div"
                      display={'flex'}
                      flexDirection={'column'}
                      textAlign={'start'}
                      fontWeight={'medium'}
                      fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}
                      lineHeight={{ base: '1.33', md: '1.35', xl: 'short' }}
                      color={'#111111'}
                      type="phone"
                    >
                      Phone:
                      <Link href="tel:{phone}"> {phone ? phone : <hr />} </Link>
                    </Box>
                  </CardBody>
                </Stack>
              </Box>
            </Stack>
          </Card>
        )
      )}
    </SimpleGrid>
  );
};
