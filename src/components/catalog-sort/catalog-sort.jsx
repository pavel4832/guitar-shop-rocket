import React from 'react';
import MyButton from "../UI/my-button/my-button";

const CatalogSort = () => {
  return (
    <div className="catalog__sort sort">
      <h2 className="sort__title">Сортировать:</h2>
      <ul className="sort__list">
        <li className="sort__item">
          <a href="#" className="sort__link active">по цене</a>
        </li>
        <li className="sort__item">
          <a href="#" className="sort__link">по популярности</a>
        </li>
      </ul>
      <div className="sort__control">
        <MyButton inputClass={`sort__btn sort__btn--increase active`}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.58301 15.667H17.4163L10.9997 5.58366L4.58301 15.667Z" fill="currentColor"/>
          </svg>
        </MyButton>
        <MyButton inputClass={`sort__btn sort__btn--decrease`}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.417 5.33301L4.58366 5.33301L11.0003 15.4163L17.417 5.33301Z" fill="currentColor"/>
          </svg>
        </MyButton>
      </div>

    </div>
  );
};

export default CatalogSort;
