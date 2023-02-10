import { Flex, Box } from '@chakra-ui/layout';
import ReactPaginate from 'react-paginate';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NoticesPagination = ({ total, currentPage }) => {
  const [isMobile] = useMediaQuery('(max-width: 767px)');

  const [, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(0)

  useEffect(() => {
    if (total === null) {
      return
    }
    setPage(currentPage)
  }, [total, currentPage])

  const noticesPerPage = 8;
  const pageCount = Math.ceil(total / noticesPerPage);

  const changePage = ({ selected }) => {
    setSearchParams({ page: selected + 1 });
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Flex justify="center">
      <Box
        as={ReactPaginate}
        previousLabel="Prev"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={changePage}
        forcePage={page - 1}
        pageRangeDisplayed={isMobile ? 0 : 2}
        marginPagesDisplayed={isMobile ? 0 : 2}
        renderOnZeroPageCount={null}
        containerClassName="paginationList"
        pageClassName="paginationButton"
        pageLinkClassName="paginationLink"
        previousClassName="paginationButton prevButton"
        previousLinkClassName="paginationLink extremeButtonsLink prevButtonLink"
        nextClassName="paginationButton nextButton"
        nextLinkClassName="paginationLink extremeButtonsLink nextButtonLink"
        breakClassName="paginationBreak"
        __css={{
          '&': {
            display: 'flex',
            listStyle: 'none',
            pt: '60px',
          },
          '.paginationButton': {
            display: 'flex',
            justify: 'center',
            align: 'center',
            w: '40px',
            h: '40px',
            mr: '10px',
            bg: '#FFFFFF',
            borderRadius: '50%',
          },
          '.paginationButton:nth-last-of-type(-n + 2)': {
            mr: '0',
          },
          '.paginationButton:not(.disabled):hover': {
            bg: 'accent.accentOrange',
            color: '#FFFFFF',
          },
          '.paginationLink': {
            w: '40px',
            h: '40px',
            textAlign: 'center',
            p: '10px',
            pb: '10px',
            fontSize: '14px',
            lineHeight: '1.3',
            border: '2px solid',
            borderColor: 'accent.accentOrange',
            borderRadius: '50%',
          },
          '.prevButton': {
            w: '60px',
            mr: '15px',
            borderRadius: '10px',
          },
          '.nextButton': {
            w: '60px',
            ml: '15px',
            borderRadius: '10px',
          },
          '.extremeButtonsLink': {
            w: '60px',
            px: '10px',
            py: '10px',
            borderRadius: '10px',
          },
          '.paginationBreak': {
            display: 'flex',
            alignItems: 'center',
            mr: '10px',
            fontWeight: '500',
            fontSize: '20px',
          },
          '.selected': {
            bg: 'accent.accentOrange',
            color: '#FFFFFF',
          },
          '.disabled > a': {
            borderColor: '#bfbfbf',
            bg: '#f3f3f3',
            color: '#bfbfbf',
          },
          '.disabled:hover > a': {
            cursor: 'default',
          },
        }}
      />
    </Flex>
  );
};

export default NoticesPagination;
