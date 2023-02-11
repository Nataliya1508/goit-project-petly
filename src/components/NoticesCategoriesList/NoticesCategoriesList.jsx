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


const NoticesCategoriesList = ({notices}) => {

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
      {!isLoading && totalNotices > 8 && (
        <NoticesPagination total={totalNotices} currentPage={page} />
      )}
    </>
  );
};

export default NoticesCategoriesList;
