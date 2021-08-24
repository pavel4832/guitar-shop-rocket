import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_MENU: `data/changeMenu`,
  REDIRECT_TO_ROUTE: `data/redirectToRoute`,
  SET_BASKET: `data/setBasket`,
  CHANGE_QTY: `data/changeQty`,
  REMOVE_BASKET_ITEM: `data/removeBasketItem`,
};

export const changeMenu = createAction(ActionType.CHANGE_MENU, (newMenu) => {
  return {
    payload: newMenu,
  };
});

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});

export const setBasket = createAction(ActionType.SET_BASKET, (status) => {
  return {
    payload: status,
  };
});

export const changeQty = createAction(ActionType.CHANGE_QTY, (newQty) => {
  return {
    payload: newQty,
  };
});

export const removeBasketItem = createAction(ActionType.REMOVE_BASKET_ITEM, (item) => {
  return {
    payload: item,
  };
});
