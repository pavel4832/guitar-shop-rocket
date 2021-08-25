import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_MENU: `data/changeMenu`,
  CHANGE_SORT_TYPE: `data/changeSortType`,
  CHANGE_SORT_DIRECTION: `data/changeSortDirection`,
  SET_FILTERS: `data/setFilters`,
  REDIRECT_TO_ROUTE: `data/redirectToRoute`,
  SET_BASKET: `data/setBasket`,
  CHANGE_QTY: `data/changeQty`,
  ADD_BASKET_ITEM: `data/addBasketItem`,
  REMOVE_BASKET_ITEM: `data/removeBasketItem`,
};

export const changeMenu = createAction(ActionType.CHANGE_MENU, (newMenu) => {
  return {
    payload: newMenu,
  };
});

export const changeSortType = createAction(ActionType.CHANGE_SORT_TYPE, (type) => {
  return {
    payload: type,
  };
});

export const changeSortDirection = createAction(ActionType.CHANGE_SORT_DIRECTION, (direction) => {
  return {
    payload: direction,
  };
});

export const setFilters = createAction(ActionType.SET_FILTERS, (filters) => {
  return {
    payload: filters,
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

export const addBasketItem = createAction(ActionType.ADD_BASKET_ITEM, (item) => {
  return {
    payload: item,
  };
});

export const removeBasketItem = createAction(ActionType.REMOVE_BASKET_ITEM, (item) => {
  return {
    payload: item,
  };
});
