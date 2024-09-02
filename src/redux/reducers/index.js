import { combineReducers } from 'redux';

const favouritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      if (!state.find(fav => fav._id === action.payload._id)) {
        return [...state, action.payload];
      }
      return state;

    case 'REMOVE_FAVOURITE':
      return state.filter(fav => fav._id !== action.payload._id);

    default:
      return state;
  }
};

const mainReducer = combineReducers({
  favourites: favouritesReducer,
});

export default mainReducer;
