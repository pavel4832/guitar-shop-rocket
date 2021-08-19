import React from 'react';
import BasketList from '../basket-list/basket-list';
import BasketFooter from '../basket-footer/basket-footer';

const BasketBoard = () => {
  return (
    <div className="basket__board">
      <BasketList />
      <BasketFooter />
    </div>
  );
};

export default BasketBoard;
