import { SEARCH, CLEAR } from './search-types';

export const setSearchValue = searchVal => ({
  type: SEARCH,
  payload: searchVal
});

export const clearSearchValue = (searchVal) => ({
  type: CLEAR,
  payload: null
});