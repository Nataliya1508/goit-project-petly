import { useEffect, useMemo, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NoticesCategoryItem from '../NoticesCategoryItem/NoticesCategoryItem';
import NotFoundPage from '../../pages/NotFoundPet/NotFoundPet';
import { SimpleGrid } from '@chakra-ui/react';
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
  const [totalList, setTotalList] = useState(0);
  const { ownNotices, favoriteNotices, categories, totalNotices } =
    useSelector(getAllNotices);
  const isLoading = useSelector(getNoticesLoading);

  const category = location.pathname.split('/')[2];
  const page = searchParams.get('page');
  const query = `?page=${page === null ? 1 : page}&limit=8`;

  useEffect(() => {
    const selectedCategory = () => {
      if (category === 'favorite') {
        return setTotalList(favoriteNotices.length);
      }
      if (category === 'own') {
        return setTotalList(ownNotices.length);
      }
      return setTotalList(totalNotices);
    };
    selectedCategory();
  }, [
    category,
    favoriteNotices.length,
    ownNotices.length,
    totalNotices,
    totalList,
  ]);

  useEffect(() => {
    setSearchParams({ page: page === null ? 1 : page });
  }, [page, setSearchParams]);

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
          {categoryForRender.length !== 0 ? (
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
            </SimpleGrid>
          ) : (
            <NotFoundPage category={category} />
          )}
        </>
      ) : (
        <Loader />
      )}
      {!isLoading && totalList > 8 && (
        <NoticesPagination total={totalList} currentPage={page} />
      )}
    </>
  );
};

export default NoticesCategoriesList;
