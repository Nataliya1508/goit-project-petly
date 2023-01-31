import { useState } from 'react';
import PropTypes from 'prop-types';
import { CloseIcon, Search2Icon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

const NoticesSearch = onSubmit => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
    setFilteredData(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('What pet do you need?');
      return;
    }
    onSubmit(query);
  };

  const clearInput = () => {
    setFilteredData('');
  };
  console.log(filteredData);
  return (
    <Box>
      <Box onSubmit={handleSubmit}>
        <Box
          type="text"
          name="input"
          autocomplete="off"
          placeholder="Search"
          onChange={handleChange}
          value={filteredData}
        />
        <Box type="submit">
          {filteredData.length === 0 ? (
            <Search2Icon />
          ) : (
            <CloseIcon onClick={clearInput} />
          )}
        </Box>
      </Box>
    </Box>
  );
};
NoticesSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NoticesSearch;
