import * as actions from '../actions';
import {createReducer} from '@reduxjs/toolkit';
import {GUITAR_LIST, BASKET_LIST} from '../../mock/mock';

const initialState = {
  guitarList: GUITAR_LIST,
  filteredAndSortedList: GUITAR_LIST,
  basketList: BASKET_LIST,
  menuType: ``,
  fullGuitarList: GUITAR_LIST,
  onBasket: false,
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
  builder.addCase(actions.setBasket, (state, action) => {
    return {
      ...state,
      onBasket: action.payload,
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
