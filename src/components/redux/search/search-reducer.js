import { SEARCH, CLEAR } from './search-types';
import shopData from '../../../pages/shopdata';

const INITIAL_STATE = {
  shopData,
  searchVal: '',
  filtered: shopData
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH:
      const { payload } = action

      const filtered = state.shopData.reduce((r, { id, title, routeName, items }) => {
        let o = items.filter(({ name }) => name.toLowerCase().includes(payload.toLowerCase()));
        if (o && o.length)
          r.push({ id, title, routeName, items: [...o] });
        return r;
      }, []);

      return {
        ...state,
        searchVal: payload,
        filtered
      };

    case CLEAR:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default searchReducer;