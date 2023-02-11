import { Suspense, useEffect, useMemo, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Heading, Box } from '@chakra-ui/react';

import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesPagination from 'components/NoticesPagination/NoticesPagination';
import { Container, Section } from 'shared/components';
import Loader from 'components/Loader/Loader';
import NotFoundPage from '../../pages/NotFoundPet/NotFoundPet';

import { getAllNotices, getFiltredFavoriteNotices, getFiltredUserNotices, getNoticesError, getNoticesLoading } from 'redux/notices/notices-selectors';
import { getFavorites, getMyNotice, getNoticesByCategory, getNoticesByCategoryWithQuery } from 'redux/notices/notices-operations';
import { getFilter } from 'redux/filter/filter-selector';


const Notices = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const categoryName = location.pathname.split('/')[2];
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParams = searchParams.get('page');
  const page = pageParams === null ? 1 : pageParams;
  const [totalList, setTotalList] = useState(0);

  const searchQuery = useSelector(getFilter).toLowerCase();
  const { categories, totalNotices } = useSelector(getAllNotices);
  const fiteredFavoriteNotices = useSelector(getFiltredFavoriteNotices);
  const fiteredUserNotices = useSelector(getFiltredUserNotices);
  const isLoading = useSelector(getNoticesLoading);
  const error = useSelector(getNoticesError);

  useEffect(() => {
    const params = searchQuery !== "" ? { page: page === null ? 1 : page, query: searchQuery} : { page: page === null ? 1 : page, } 
    setSearchParams(params);
  }, [page, searchQuery, setSearchParams]);

  useEffect(() => {
    const selectedCategory = () => {
      if (categoryName === 'favorite') {
        return setTotalList(fiteredFavoriteNotices.length);
      }
      if (categoryName === 'own') {
        return setTotalList(fiteredUserNotices.length);
      }
      return setTotalList(totalNotices);
    };
    selectedCategory();
  }, [
    categoryName,
    fiteredFavoriteNotices.length,
    fiteredUserNotices.length,
    totalNotices,
    totalList,
  ]);

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
            {error && <Heading> Here is problem, try to reload the page</Heading>}
            {isLoading ? <Loader /> 
            :            
            categoryForRender.length !== 0 ? <NoticesCategoriesList notices={categoryForRender}/> 
            : <NotFoundPage category={categoryName} /> }            
            {!isLoading && totalNotices > 8 && (
              <NoticesPagination total={totalList} currentPage={page} />
            )}
          </Suspense>
        </Section>
      </Container>
    </Box>
  );
};

export default Notices;
