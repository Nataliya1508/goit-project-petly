import { useState} from 'react';
import { Search, SearchForm, FormButton, FormInput } from "components/NoticesSearch/NoticesSearch"
import PropTypes from "prop-types"
import { CloseIcon } from '@chakra-ui/icon'

import SearchIcon from ""
const NoticesSearch = (onSubmit) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
    setFilteredData(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(query.trim() === "") {
      alert("What pet do you need?");
      return;
    }
    onSubmit(query);
  }

  const clearInput = () => {
    setFilteredData("");
  }
  console.log(filteredData);
  return (
    <Search>
      <SearchForm onSubmit={handleSubmit}>
        <FormInput
      type="text"
      name="input"
      autocomplete="off"
      placeholder="Search"
      onChange={handleChange}
      value={filteredData}
      />
        <FormButton type="submit">
{filteredData.length === 0 ?
<SearchIcon /> : <CloseIcon onClick={clearInput} />
}
        </FormButton>
      </SearchForm>
    </Search>
  )
}
NoticesSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default NoticesSearch;