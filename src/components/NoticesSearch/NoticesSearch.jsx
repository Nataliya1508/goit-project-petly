import { useState } from 'react';
import { FilterInput } from 'shared/components';
import { ToastContainer, toast } from 'react-toastify';

const NoticesSearch = ({ searchFunction }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
    searchFunction(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast('What pet do you need?');
      return;
    }
    searchFunction(query);
  };

  const clearInput = () => {
    setQuery('');
    searchFunction('');
  };

  return (
    <>
    <FilterInput
        type="text"
        name={'search'}
        onChange={handleChange}
        handleSearch={handleSubmit}
        handleClear={clearInput}
        value={query}
        mb={'28px'}
      />
      <ToastContainer />
    </>
  );
};

export default NoticesSearch;
