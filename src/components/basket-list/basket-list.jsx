import React from 'react';
import {useSelector} from 'react-redux';
import BasketCard from '../basket-card/basket-card';

const BasketList = () => {
  const {basketList} = useSelector((state) => state.DATA);

  return (
    <ul className="basket__list">
      {basketList.map((item) => (
        <BasketCard key={item.id} card={item} />
      ))}
    </ul>
  );
};

export default BasketList;
