import * as actions from '../actions';
import {createReducer} from '@reduxjs/toolkit';
import {GUITAR_LIST} from '../../mock/mock';
import {SortDirection, SortType} from '../../const';

const initialState = {
  guitarList: GUITAR_LIST,
  sortType: SortType.NONE,
  sortDirection: SortDirection.NONE,
  filters: {
    minPrice: ``,
    maxPrice: ``,
    acoustic: false,
    electric: false,
    uku: false,
    fourStrings: false,
    sixStrings: false,
    sevenStrings: false,
    twelveStrings: false,
  },
  basketList: [],
  menuType: ``,
};

const removeElement = (target, element) => {
  return target.filter((item) => item.id !== element.id);
};

const getNewBasketList = (target, card, qty) => {
  let newArr = target.slice();
  const foundIndex = newArr.findIndex((item) => item.id === card.id);
  newArr[foundIndex] = Object.assign(
      {},
      newArr[foundIndex],
      {
        quantity: qty,
      }
  );
  return newArr;
};

const DATA = createReducer(initialState, (builder) => {
  builder.addCase(actions.changeMenu, (state, action) => {
    return {
      ...state,
      menuType: action.payload,
    };
  });
  builder.addCase(actions.changeSortType, (state, action) => {
    return {
      ...state,
      sortType: action.payload,
    };
  });
  builder.addCase(actions.changeSortDirection, (state, action) => {
    return {
      ...state,
      sortDirection: action.payload,
    };
  });
  builder.addCase(actions.setFilters, (state, action) => {
    return {
      ...state,
      filters: action.payload,
    };
  });
  builder.addCase(actions.addBasketItem, (state, action) => {
    return {
      ...state,
      basketList: [...state.basketList, action.payload],
    };
  });
  builder.addCase(actions.changeQty, (state, action) => {
    return {
      ...state,
      basketList: getNewBasketList(state.basketList, action.payload.card, action.payload.newQty),
    };
  });
  builder.addCase(actions.removeBasketItem, (state, action) => {
    return {
      ...state,
      basketList: removeElement(state.basketList, action.payload),
    };
  });
});

export {DATA};
