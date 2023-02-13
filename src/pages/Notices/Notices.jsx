import { useEffect, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
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
import { getFavorites, getMyNotice, getNoticesByCategory } from 'redux/notices/notices-operations';
import { getFilter } from 'redux/filter/filter-selector';


const Notices = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParams = searchParams.get('page');
  const page = pageParams === null ? 1 : pageParams;
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
    if (searchQuery === '') {
      if (categoryName === 'favorite') {
        dispatch(getFavorites());
        return
      }
      if (categoryName === 'own') {
        dispatch(getMyNotice());
      } else {
        dispatch(getNoticesByCategory({categoryName, page, searchQuery}));
      }      
    }
  }, [dispatch, categoryName, page, searchQuery]);

  const noticesPerPage = 8;
  const lastIndex = page * noticesPerPage;
  const startIndex = lastIndex - noticesPerPage;
  const paginatedNotices = useMemo(() => (noticesToPaginate) => noticesToPaginate.length <= 8 ? 
  noticesToPaginate : noticesToPaginate.slice(startIndex, lastIndex),[lastIndex, startIndex]); 

  const categoryForRender = useMemo(
    () =>
      categoryName === 'favorite'
      ? paginatedNotices(fiteredFavoriteNotices)
      : categoryName === 'own'
      ? paginatedNotices(fiteredUserNotices)
      : categories,
    [categories, categoryName, fiteredFavoriteNotices, fiteredUserNotices, paginatedNotices]
  );

  const totalList = useMemo(
    () =>
      categoryName === 'favorite'
      ? fiteredFavoriteNotices.length
      : categoryName === 'own'
      ? fiteredUserNotices.length
      : totalNotices,
    [categoryName, fiteredFavoriteNotices.length, fiteredUserNotices.length, totalNotices]
  );

  const searchOnSubmitFunction = () => {
      dispatch(getNoticesByCategory({categoryName, page, searchQuery}));    
  } 


  return (
    <Box bgColor={'#FDF7F2'} h={{base:"calc(100vh - 74px)", md:"calc(100vh - 96px)", xl:"calc(100vh - 88px)"}} >
      <Container>
        <Section pt={{base:'26px', md:'66px', xl:'39px'}}>
          <Heading
            as={'h1'}
            fontSize={{ base: '24px', md: '48px' }}
            fontWeight={'bold'}
            lineHeight={'short'}
            textAlign={'center'}
            mb={'40px'}
          >
            Find your favorite pet
          </Heading>
          <NoticesSearch submitFunction={searchOnSubmitFunction}/>
          <NoticesCategoriesNav />
          {!error ? (
            <>
              {!isLoading ? (
                <>
                  {categoryForRender.length !== 0 ? (
                    <NoticesCategoriesList notices={categoryForRender} />
                  ) : (
                    <NotFoundPage category={categoryName} />
                  )}
                </>
              ) : (
                <Loader />
              )}
            </>
          ) : (
            <Heading> Here is problem, try to reload the page</Heading>
          )}           
          {!isLoading && totalList > 8 && (
            <NoticesPagination total={totalList} currentPage={page} />
          )}
        </Section>
      </Container>
    </Box>
  );
};

export default Notices;
