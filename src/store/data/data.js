import * as actions from '../actions';
import {createReducer} from '@reduxjs/toolkit';
import {GUITAR_LIST, BASKET_LIST} from '../../mock/mock';

const initialState = {
  guitarList: GUITAR_LIST,
  filteredAndSortedList: GUITAR_LIST,
  basketList: BASKET_LIST,
  menuType: ``,
  inBasket: 0,
  fullGuitarList: GUITAR_LIST,
  onBasket: false,
};

const DATA = createReducer(initialState, (builder) => {
  builder.addCase(actions.changeMenu, (state, action) => {
    return {
      ...state,
      menuType: action.payload,
    };
  });
  builder.addCase(actions.setBasket, (state, action) => {
    return {
      ...state,
      onBasket: action.payload,
    };
  });
});

export {DATA};
