import { Suspense, useEffect, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Heading, Box } from '@chakra-ui/react';

import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesPagination from 'components/NoticesPagination/NoticesPagination';
import { Container, Section } from 'shared/components';
import Loader from 'components/Loader/Loader';

import { getAllNotices, getFiltredFavoriteNotices, getFiltredUserNotices, getNoticesError, getNoticesLoading } from 'redux/notices/notices-selectors';
import { getFavorites, getMyNotice, getNoticesByCategory, getNoticesByCategoryWithQuery } from 'redux/notices/notices-operations';
import { getFilter } from 'redux/filter/filter-selector';


const Notices = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const categoryName = location.pathname.split('/')[2];
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');

  const searchQuery = useSelector(getFilter).toLowerCase();
  const { categories, totalNotices } = useSelector(getAllNotices);
  const fiteredFavoriteNotices = useSelector(getFiltredFavoriteNotices);
  const fiteredUserNotices = useSelector(getFiltredUserNotices);
  const isLoading = useSelector(getNoticesLoading);
  const error = useSelector(getNoticesError);

  useEffect(() => {
    setSearchParams({ page: page === null ? 1 : page });
  }, [page, setSearchParams]);

  useEffect(() => {
    if (searchQuery === '') {
      if (categoryName === 'favorite') {
        dispatch(getFavorites());
        return
      }
      if (categoryName === 'own') {
        dispatch(getMyNotice());
      } else {
        dispatch(getNoticesByCategory({categoryName, page}));
      }      
    }

  }, [dispatch, categoryName, page, searchQuery]);

  // const query = `?page=${page === null ? 1 : page}&limit=8`;

  const categoryForRender = useMemo(
    () =>
      categoryName === 'favorite'
      ? fiteredFavoriteNotices
      : categoryName === 'own'
      ? fiteredUserNotices
      : categories,
    [categories, categoryName, fiteredFavoriteNotices, fiteredUserNotices]
  );

  const searchOnSubmitFunction = () => {
    if (categoryName === 'own') {
      dispatch(getMyNotice());
    } 
    if (categoryName === 'favorite') {
      dispatch(getFavorites());
    } else {
      dispatch(getNoticesByCategoryWithQuery({categoryName, searchQuery}));
    }
    
  } 

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
          <NoticesSearch submitFunction={searchOnSubmitFunction}/>
          <NoticesCategoriesNav />
          <Suspense fallback={null}>
            {isLoading && <Loader />}            
            {categoryForRender.length !== 0 ? <NoticesCategoriesList notices={categoryForRender}/> 
            : <Box textAlign={'center'}>
                <Heading>This Category is empty ^_^</Heading>
              </Box> } 
            {error && <Heading>Here is problem, try to reload the page</Heading>}
            {!isLoading && totalNotices > 8 && (
              <NoticesPagination total={totalNotices} currentPage={page} />
            )}
          </Suspense>
        </Section>
      </Container>
    </Box>
  );
};

export default Notices;
