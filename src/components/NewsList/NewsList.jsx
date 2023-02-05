import { Box, SimpleGrid, Heading, Text, Link } from '@chakra-ui/react';

export const NewsList = ({ news }) => {
  return (
    <SimpleGrid
      justifyItems={'center'}
      mt={'60px'}
      columns={{base: 1, md: 2, lg: 3}}
      spacing={{base: '12', md: '60px'}}
      p={2}
    >
      {news.map(({ _id, title, description, date, url }) => (
        <Box
          position={'relative'}
          maxWidth={{base: '330px', lg: '394px'}}
          p={2}
          transitionProperty={'box-shadow'}
          transitionDuration={'250ms'}
          transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
          _before={{
            content: '" "',
            position: 'absolute',
            top: '-1',
            left: '0',
            w: '85%',
            h: '1',
            bg: 'linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)',
            borderRadius: '10',
          }}
          _hover={{
            shadow: 'md',
            }}
          key={_id}
        >
          <Heading
            noOfLines={2}
            as="h3"
            length={60}
            fontSize={'2xl'}
            lineHeight={'short'}
            letterSpacing="-0.01em"
          >
            {title}
          </Heading>
          <Text
            noOfLines={5}
            mt={'4'}
            fontSize={'md'}
            lineHeight={'short'}
            overflow={'hidden'}
            color={'#111321'}
          >
            {description}
          </Text>
          <Box
            display={'flex'}
            justifyContent="space-between"
            alignItems={'center'}
            mt={{base: '5', lg: '10'}}
          >
            <Text
              fontSize={'md'}
              color={'rgba(17, 17, 17, 0.6)'}
              lineHeight={'short'}
            >
              {date?.split("-").reverse().join("/")}
            </Text>
            <Link
              position={'relative'}
              fontSize={'md'}
              lineHeight={'short'}
              color={'#F59256'}
              bgColor={'transparent'}
              as="a"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </Link>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};
