import { useState } from 'react';
import PropTypes from 'prop-types';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { Box, Button, Input, IconButton } from '@chakra-ui/react';

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

  return (
    <Box>
      <form onSubmit={handleSubmit} autocomplete="off">
        <Input
          type="text"
          name="input"
          placeholder="Search"
          onChange={handleChange}
          value={filteredData}
        />
        <Button type="submit">
          {filteredData.length === 0 ? (
            <IconButton aria-label="Search database" icon={<SearchIcon />} />
          ) : (
            <CloseIcon onClick={clearInput} />
          )}
        </Button>
      </form>
    </Box>
  );
};

NoticesSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NoticesSearch;
