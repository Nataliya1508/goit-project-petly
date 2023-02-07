import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NoticesCategoryItem from '../NoticesCategoryItem/NoticesCategoryItem';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import {
  getNoticesByCategory,
  getFavorites,
  deleteMyNotice,
  getMyNotice,
} from '../../redux/notices/notices-operations';
import {
  selectNoticesByCategory,
  getNoticesLoading,
  getNoticesError,
  getFavoriteNotices,
  getUserNotices,
} from '../../redux/notices/notices-selectors';
import Loader from 'components/Loader/Loader';

const categoriesOjb = {
  sell: 'sell',
  'lost-found': 'lost-found',
  free: 'free',
};

const NoticesCategoriesList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const categories = useSelector(selectNoticesByCategory);
  const favoriteNotices = useSelector(getFavoriteNotices);
  const ownNotices = useSelector(getUserNotices);
  const category = location.pathname.split('/')[2];

  const categoryForRender =
    category === 'sell' || category === 'lost-found' || category === 'free'
      ? categories
      : category === 'favorite'
      ? favoriteNotices
      : ownNotices;

  const isLoading = useSelector(getNoticesLoading);
  const error = useSelector(getNoticesError);

  useEffect(() => {
    if (category === categoriesOjb[category]) {
      dispatch(getNoticesByCategory(category));
    }
    if (category === 'favorite') {
      dispatch(getFavorites());
    }
    if (category === 'own') {
      dispatch(getMyNotice());
    }
  }, [dispatch, category]);

  return (
    <>
      {!isLoading ? (
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
                    owner,
                    photo,
                    title,
                    breed,
                    location,
                    birthdate,
                    price,
                    categoryName,
                  }) => (
                    <NoticesCategoryItem
                      key={_id}
                      id={_id}
                      owner={owner}
                      photo={photo}
                      title={title}
                      breed={breed}
                      location={location}
                      birthdate={birthdate}
                      price={price}
                      categoryName={categoryName}
                      deleteMyNotice={deleteMyNotice}
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
      ) : (
        <Loader />
      )}
      {error && <p>Something went wrong</p>}
    </>
  );
};

export default NoticesCategoriesList;
