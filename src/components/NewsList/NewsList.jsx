import { Box, SimpleGrid, Heading, Text, Link } from "@chakra-ui/react";
	
export const NewsList = ({news}) => {
	
    // const editDate = (date) => {
	// 	return date.split('-').reverse().join("/")
	// }
	
		return (
            <SimpleGrid 
            justifyItems={'center'} 
            mt={['40px']} 
            columns={[1, 1, 1, 2, 3]} 
            spacing={['48px', '48px', '48px', '60px', '60px']} 
            p={2}
            >
                {news.map(({ _id, title, description, date, url }) =>(
                <Box 
                position={'relative'}
                maxWidth={['330px', null, null, null, null, '394px']}
                p={2}
                _before={{
                    content: '" "',
                    position: 'absolute',
                    top: '-4px',
                    left: '0',
                    w: '85%',
                    height: '4px',
                    bg: 'linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)',
                    borderRadius: '40px',
                }}
                 _hover={{
                shadow: 'md',
                }}
                key={_id}>
                <Heading 
                noOfLines={2} 
                as="h3" 
                length={60}
                fontSize='24px'
                lineHeight='1.375'
                letterSpacing='-0.01em'>
                    {title}
                </Heading>
				<Text 
                noOfLines={8} 
                mt={'16px'}
                fontSize={'16px'}
                lineHeight='1.375'
                overflow='hidden'
                color={'#111321'}>
                    {description}
                </Text>
					<Box 
                    display={'flex'}
                    justifyContent='space-between'
                    alignItems={'center'}
                    mt={['20px', '20px', '20px', '20px', '40px']}>
						<Text
                        fontSize={'16px'}
                        color={'rgba(17, 17, 17, 0.6)'}
                        lineHeight='1.375'>
                            {date}
                        </Text>
						<Link
                        position={'relative'}
                        fontSize='16px'
                        lineHeight='1.375'
                        color={'#F59256'}
                        bgColor={'transparent'} 
                        as="a" href={url} target="_blank" rel="noreferrer">Read more</Link>
					</Box>
				</Box>
                ))}
            </SimpleGrid>
       )
    }
     
