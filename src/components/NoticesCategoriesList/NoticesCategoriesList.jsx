import React from 'react';
import { useEffect, useState} from 'react'
import NoticesCategoryItem from '../NoticesCategoryItem/NoticesCategoryItem'
import { SimpleGrid } from '@chakra-ui/react';
import {default as userPets} from './ListTest.json'
import getNoticesByCategory from 'components/NoticesCategoryItem/NoticesCategoryItem'
import {Spinner} from '@chakra-ui/react';


const NoticesCategoriesList = ({query}) => {
  const [pets, setPets] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let filteredPets = pets;

  if (query !== "") {
    filteredPets = pets.filter(({ title }) => {
      return title.toLowerCase().includes(query.toLowerCase())
    })
  }
  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);

      try {
        const data = await getNoticesByCategory();
        setPets((prevPets) => [...prevPets, ...data]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, []);

  // const filterPets = userPets.filter(pets => pets.condition === condition);
  return (
    <>
    { filteredPets && (
      <SimpleGrid
      as='ul'
      mx={'auto'}
      maxWidth={{base:'280px', md:'704px', xl: '1248px'}}
      gridTemplateColumns={{base:'1fr', md:'1fr 1fr', xl: '1fr 1fr 1fr 1fr'}}
      gap={'32px'}
      width={'full'}
      listStyleType={'none'}
      key={userPets.id}>
        {userPets.map(
          ({ id, favorite, avatar, title, breed, location, age, condition, price }) => (
            <NoticesCategoryItem
              key={id}
              avatar={avatar}
              favorite={favorite}
              title={title}
              breed={breed}
              location={location}
              age={age}
              price={price}
              condition={condition}
            />
          )
        )}
    </SimpleGrid>
    )}
    {error && <p>Something went wrong</p>}
    {loading && <Spinner/>}
    </>
  );
};

export default NoticesCategoriesList;
