import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
// import NoticesCategoriesList from "components/NoticesCategoriesList/NoticesCategoriesList";
// import NoticesCategoryItem from "components/NoticesCategoryItem/NoticesCategoryItem";
// import AddNoticeButton from "components/AddNoticeButton/AddNoticeButton";

const Notices = () => {
  return (
    <>
      <h1>Find your favorite pet</h1>
      <NoticesSearch />
      <NoticesCategoriesNav />
      {/* <NoticesCategoriesList /> */}
      {/* <NoticesCategoryItem /> */}
      {/* <AddNoticeButton />  */}
    </>
  );
};

export default Notices;
