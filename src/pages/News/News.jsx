import { useState, useEffect } from 'react';
import { Box, Heading, Spinner } from '@chakra-ui/react';
import Container from '../../shared/components/Box/Container';
import Section from '../../shared/components/Box/Section';
import { NewsList } from 'components/NewsList/NewsList';
import { getNews } from './getNews';
import { NewsSearch } from 'components/NewsSearch/NewsSearch';



const News = () => {
	const [news, setNews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetch() {
			try {
				const response = await getNews({});
		    sortByDate(response)
			} catch (error) {
				console.log(error);
			}
		}
		fetch();
	}, []);


	const searchNews = async query => {
		const searchQuery = query.toLowerCase();
		const response = await getNews({});
		const foundNews = response.filter(
			news =>
				news.title.toLowerCase().includes(searchQuery) ||
				news.description.toLowerCase().includes(searchQuery)
		);
		sortByDate(foundNews);
	};

	const sortByDate = array => {
		const addDateForSort = array.map(news => {
			return { ...news, dateForSort: Date.parse(new Date(news.date)) };
		});

		const sortedByDateNews = addDateForSort.sort(
			(a, b) => b.dateForSort - a.dateForSort
		);

		setNews(sortedByDateNews);
		setIsLoading(false);
	};

	return (
    <Box bgColor={'#FDF7F2'}>
    <Container>
		<Section pt={['54px', '54px', '54px', '94px', '60px']} >
			<Heading 
			as='h2' 
			size='3xl' 
			fontSize={['24px', '24px', '24px', '48px']} 
			textAlign={'center'}
			// mt={['54px', '54px', '54px', '94px', '60px']} 
			mb={['28px', '28px', '28px', '40px']}
			>News</Heading>
			{isLoading ? (
				<Spinner
				thickness='4px'
				speed='0.85s'
				emptyColor='#F59256;'
				color='#F5F5F5'
				size='xl' />
			) : (	
				<>
			<NewsSearch searchFunction={searchNews} />
			<NewsList news={news} />	
			</>
			)}
			
		</Section>
    </Container>
    </Box>
	);
};

export default News;
