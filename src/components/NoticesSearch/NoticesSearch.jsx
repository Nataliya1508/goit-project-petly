import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { FilterInput } from 'shared/components';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selector';
import { setFilter } from 'redux/filter/filter-slice';


const NoticesSearch = ({submitFunction}) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(getFilter);
  const [isSubmited, setIsSubmited] = useState(false);
  const { categoryName } = useParams();
  const location = useLocation().pathname;

  useEffect(()=>{
    if (searchQuery==='') {
      setIsSubmited(false);
    }
  },[searchQuery]);

  useEffect(()=>{
    dispatch(setFilter(""));
    setIsSubmited(false);
  },[dispatch, location]);

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast('What pet do you need?');
      return;    }

    submitFunction();
    setIsSubmited(true); 
  };

  const clearInput = () => {
    dispatch(setFilter(""));
    setIsSubmited(false);
  };

  return (
      <FilterInput
        type="text"
        name={'search'}
        onChange={handleChange}
        handleSearch={handleSubmit}
        handleClear={clearInput}
        value={searchQuery}
        isSubmited={isSubmited}
        mb={'28px'}
        category={categoryName}
      />
  );
};

export default NoticesSearch;
