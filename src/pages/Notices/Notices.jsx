import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { Container, Section } from 'shared/components';
import { Heading, Box } from '@chakra-ui/react';

const Notices = () => {
  const [, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const category = location.pathname;

  useEffect(() => {
    if (category === '/notices') navigate('sell');
  }, [category, navigate]);

  return (
    <Box bgColor={'#FDF7F2'} h={'100vh'}>
       <Container>
        <Section>
          <Heading
            as={'h1'}
            fontSize={{ base: '24px', md: '48px' }}
            fontWeight={'bold'}
            lineHeight={'short'}
            textAlign={'center'}
            mb={7}
          >
            Find your favorite pet
          </Heading>
          <NoticesSearch setSearchQuery={setSearchQuery} />
          <NoticesCategoriesNav />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Section>
      </Container>
      </Box>
  );
};

export default Notices;
