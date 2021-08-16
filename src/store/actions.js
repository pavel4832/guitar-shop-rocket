import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_MENU: `data/changeMenu`,
  REDIRECT_TO_ROUTE: `data/redirectToRoute`,
  SET_BASKET: `data/setBasket`,
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
