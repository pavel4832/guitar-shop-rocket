import React from 'react';
import MyInput from "../UI/my-input/my-input";

const Filter = () => {
  return (
    <div className="catalog__filter filter">
      <h2 className="filter__title">Фильтр</h2>
      <ul className="filter__list">
        <li className="filter__item">
          <h3 className="filter__field">Цена, ₽</h3>
          <div className="filter__price price">
            <MyInput inputClass={`price__input`} />
            <div className="price__line"></div>
            <MyInput inputClass={`price__input`} />
          </div>
        </li>
        <li className="filter__item">
          <h3 className="filter__field">Тип гитар</h3>
        </li>
        <li className="filter__item">
          <h3 className="filter__field">Количество струн</h3>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
