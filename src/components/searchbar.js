import React from 'react';
import FormInput from './form-input';
import { connect } from 'react-redux';
import { setSearchValue, clearSearchValue } from './redux/search/search-actions';

const SearchBar = ({ searchVal, setSearchValue, clearSearchValue }) => {

  const handleOnChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <FormInput
      type='text'
      name='search'
      value={searchVal}
      onChange={handleOnChange}
      placeholder="Type to Search"
      clearInput={clearSearchValue}
      search
    />
  )
}

const mapStateToProps = state => ({
  searchVal: state.search.searchVal
});

const mapDispatchToProps = dispatch => ({
  setSearchValue: searchVal => dispatch(setSearchValue(searchVal)),
  clearSearchValue: () => dispatch(clearSearchValue())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);