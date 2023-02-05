import { useState, useEffect } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Container from '../../shared/components/Box/Container';
import Section from '../../shared/components/Box/Section';
import { NewsList } from 'components/NewsList/NewsList';
import { getNews } from './getNews';
import { NewsSearch } from 'components/NewsSearch/NewsSearch';
import Loader from 'components/Loader/Loader';

const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        setIsLoading(true);
        const response = await getNews();
        sortByDate(response);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
    fetch();
  }, []);

  const searchNews = async query => {
    const searchQuery = query.toLowerCase();
    const response = await getNews();
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
        <Section pt={['54px', '54px', '54px', '94px', '60px']}>
          <Heading
            as="h2"
            size="3xl"
            fontSize={['24px', '24px', '24px', '48px']}
            textAlign={'center'}
            // mt={['54px', '54px', '54px', '94px', '60px']}
            mb={['28px', '28px', '28px', '40px']}
          >
            News
          </Heading>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <NewsSearch searchFunction={searchNews} />
              <NewsList news={news} />
            </>
          )}
          {news.length === 0 && !isLoading && (
            <Text textAlign="center">
              There are not news according to your request. Please try again.
            </Text>
          )}
        </Section>
      </Container>
    </Box>
  );
};

export default News;
