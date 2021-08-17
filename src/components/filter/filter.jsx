import React from 'react';
import MyInput from "../UI/my-input/my-input";
import MyCheckbox from "../UI/my-checkbox/my-checkbox";

const Filter = () => {
  return (
    <div className="catalog__filter filter">
      <h2 className="filter__title">Фильтр</h2>
      <ul className="filter__list">
        <li className="filter__item">
          <h3 className="filter__field">Цена, ₽</h3>
          <div className="filter__price price">
            <MyInput className="price__input" />
            <div className="price__line"></div>
            <MyInput className="price__input" />
          </div>
        </li>
        <li className="filter__item">
          <h3 className="filter__field">Тип гитар</h3>
          <MyCheckbox id="acoustic">Акустические гитары</MyCheckbox>
          <MyCheckbox id="electric">Электрогитары</MyCheckbox>
          <MyCheckbox id="uku">Укулеле</MyCheckbox>
        </li>
        <li className="filter__item">
          <h3 className="filter__field">Количество струн</h3>
          <MyCheckbox id="4">4</MyCheckbox>
          <MyCheckbox id="6">6</MyCheckbox>
          <MyCheckbox id="7">7</MyCheckbox>
          <MyCheckbox id="12">12</MyCheckbox>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
