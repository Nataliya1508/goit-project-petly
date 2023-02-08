import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NoticesCategoryItem from '../NoticesCategoryItem/NoticesCategoryItem';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import {
  getNoticesByCategory,
  getFavorites,
  getMyNotice,
} from '../../redux/notices/notices-operations';
import {
  selectNoticesByCategory,
  getNoticesLoading,
  getNoticesError,
  getFavoriteNotices,
  getUserNotices,
  selectTotalCountNotices,
} from '../../redux/notices/notices-selectors';
import Loader from 'components/Loader/Loader';
import NoticesPagination from 'components/NoticesPagination/NoticesPagination';

const categoriesOjb = {
  sell: 'sell',
  'lost-found': 'lost-found',
  free: 'for-free',
};

const NoticesCategoriesList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const categories = useSelector(selectNoticesByCategory);
  const totalNotices = useSelector(selectTotalCountNotices);
  const favoriteNotices = useSelector(getFavoriteNotices);
  const ownNotices = useSelector(getUserNotices);
  const category = location.pathname.split('/')[2];

  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const query = `?page=${page === null ? 1 : page}`;

  const categoryForRender =
    category === 'sell' || category === 'lost-found' || category === 'for-free'
      ? categories
      : category === 'favorite'
      ? favoriteNotices
      : ownNotices;

  const isLoading = useSelector(getNoticesLoading);
  const error = useSelector(getNoticesError);

  useEffect(() => {
    if (category === categoriesOjb[category]) {
      dispatch(getNoticesByCategory(category + query));
    }
    if (category === 'favorite') {
      dispatch(getFavorites());
    }
    if (category === 'own') {
      dispatch(getMyNotice());
    }
  }, [dispatch, category, query]);

  return (
    <>
      {!isLoading ? (
        <>
          <SimpleGrid
            as="ul"
            mx={'auto'}
            maxWidth={{ base: '280px', md: '704px', xl: '1248px' }}
            gridTemplateColumns={{
              base: '1fr',
              md: '1fr 1fr',
              xl: '1fr 1fr 1fr 1fr',
            }}
            gap={'32px'}
            width={'full'}
            listStyleType={'none'}
          >
            <>
              {categoryForRender.length !== 0 ? (
                <>
                  {categoryForRender.map(
                    ({
                      _id,
                      photo,
                      title,
                      breed,
                      location,
                      birthdate,
                      price,
                      categoryName,
                      owner,
                    }) => (
                      <NoticesCategoryItem
                        key={_id}
                        id={_id}
                        photo={photo}
                        title={title}
                        breed={breed}
                        location={location}
                        birthdate={birthdate}
                        price={price}
                        categoryName={categoryName}
                        owner={owner}
                      />
                    )
                  )}
                </>
              ) : (
                <Box textAlign={'center'}>
                  <Heading>This Category is empty ^_^</Heading>
                </Box>
              )}
            </>
          </SimpleGrid>
        </>
      ) : (
        <Loader />
      )}
      {category !== 'favorite' && category !== 'own' && (
        <NoticesPagination total={totalNotices} />
      )}
      {error && <p>Something went wrong</p>}
    </>
  );
};

export default NoticesCategoriesList;
