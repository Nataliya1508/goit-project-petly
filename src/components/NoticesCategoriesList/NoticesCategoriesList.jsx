import NoticesCategoryItem from '../NoticesCategoryItem/NoticesCategoryItem';
import { SimpleGrid } from '@chakra-ui/react';



const NoticesCategoriesList = ({notices}) => {

  return (
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
          {notices.map(
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
      </SimpleGrid>
    </>
  );
};

export default NoticesCategoriesList;
