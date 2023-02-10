import { useEffect, useMemo } from 'react';
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
  getNoticesLoading,
  getAllNotices,
} from '../../redux/notices/notices-selectors';
import NoticesPagination from 'components/NoticesPagination/NoticesPagination';
import Loader from 'components/Loader/Loader';

const categoriesOjb = ['sell', 'lost-found', 'for-free'];

const NoticesCategoriesList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const { ownNotices, favoriteNotices, categories, totalNotices } =
    useSelector(getAllNotices);
  const isLoading = useSelector(getNoticesLoading);
  // const { _id: userId, favorites } = useSelector(getUser);
  const category = location.pathname.split('/')[2];
  // console.log(favorites);
  const page = searchParams.get('page');

  useEffect(() => {
    setSearchParams({ page: page === null ? 1 : page });
  }, [page, setSearchParams]);

  const query = `?page=${page === null ? 1 : page}&limit=8`;

  const categoryForRender = useMemo(
    () =>
      categoriesOjb.includes(category)
        ? categories
        : category === 'favorite'
        ? favoriteNotices
        : ownNotices,
    [categories, category, favoriteNotices, ownNotices]
  );

  useEffect(() => {
    if (categoriesOjb.includes(category)) {
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
                        // userId={userId}
                        photo={photo}
                        title={title}
                        breed={breed}
                        location={location}
                        birthdate={birthdate}
                        price={price}
                        categoryName={categoryName}
                        owner={owner}
                        // favorites={favorites}
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
      {!isLoading && totalNotices > 8 && (
        <NoticesPagination total={totalNotices} currentPage={page} />
      )}
    </>
  );
};

export default NoticesCategoriesList;
