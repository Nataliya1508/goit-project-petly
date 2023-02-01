import React from 'react';
import NoticesCategoryItem from '../NoticesCategoryItem/NoticesCategoryItem'
import { SimpleGrid } from '@chakra-ui/react';
import {default as userPets} from './ListTest.json'

const NoticesCategoriesList = () => {
  // const filterPets = userPets.filter(pets => pets.condition === condition);
  return (
    <SimpleGrid
      as='ul'
      mx={'auto'}
      maxWidth={'280px'}
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
  );
};

export default NoticesCategoriesList;
