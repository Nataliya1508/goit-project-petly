import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import NoticesCategoryItem from '../NoticesCategoryItem/NoticesCategoryItem';
import { SimpleGrid } from '@chakra-ui/react';

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
} from '../../redux/notices/notices-selectors';

import { getUser, getIsLoggedIn } from '../../redux/auth/auth-selectors';

//import { default as userPets } from './ListTest.json';
//import getNoticesByCategory from 'components/NoticesCategoryItem/NoticesCategoryItem';
import { Spinner } from '@chakra-ui/react';

const categoriesOjb = {
  sell: 'sell',
  'lost-found': 'lost-found',
  free: 'free',
};

const NoticesCategoriesList = () => {
  // const [pets, setPets] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // let filteredPets = pets;

  // if (query !== '') {
  //   filteredPets = pets.filter(({ title }) => {
  //     return title.toLowerCase().includes(query.toLowerCase());
  //   });
  // }
  // useEffect(() => {
  //   const fetchPets = async () => {
  //     setLoading(true);

  //     try {
  //       const data = await getNoticesByCategory();
  //       setPets(prevPets => [...prevPets, ...data]);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchPets();
  // }, []);
  // const filterPets = userPets.filter(pets => pets.condition === condition);
  const dispatch = useDispatch();
  const location = useLocation();

  const categories = useSelector(selectNoticesByCategory);
  const isLoading = useSelector(getNoticesLoading);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);
  const error = useSelector(getNoticesError);
  const favorite = useSelector(getFavoriteNotices);

  const category = location.pathname.split('/')[2];

  const [search] = useSearchParams();
  const query = search.get('name');

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
      {/* {filteredPets && ( */}
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
        key={categories._id}
      >
        {categories.map(
          ({
            _id,
            favorite,
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
              photo={photo}
              favorite={favorite}
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
      </SimpleGrid>
      {/* )} */}
      {error && <p>Something went wrong</p>}
      {isLoading && <Spinner />}
    </>
  );
};

export default NoticesCategoriesList;
