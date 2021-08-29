import React from 'react';
import MyButton from '../UI/my-button/my-button';
import {useDispatch, useSelector} from 'react-redux';
import {changeSortType, changeSortDirection} from '../../store/actions';
import {SortDirection, SortType} from '../../const';
import PropTypes from "prop-types";

const CatalogSort = (props) => {
  const {setPage} = props;
  const {sortType, sortDirection} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  const onTypeChangeHandler = (evt, type) => {
    evt.preventDefault();
    if (sortDirection === SortDirection.NONE) {
      dispatch(changeSortDirection(SortDirection.UP));
    }
    dispatch(changeSortType(type));
    setPage(1);
  };

  const onDirectionChangeHandler = (type) => {
    if (sortType === SortType.NONE) {
      dispatch(changeSortType(SortType.BY_PRICE));
    }
    dispatch(changeSortDirection(type));
  };

  return (
    <div className="catalog__sort sort">
      <h2 className="sort__title">Сортировать:</h2>
      <ul className="sort__list">
        <li className="sort__item">
          <a
            href="#"
            className={`sort__link ${(sortType === SortType.BY_PRICE) && `active`}`}
            onClick={(evt) => onTypeChangeHandler(evt, SortType.BY_PRICE)}
          >по цене</a>
        </li>
        <li className="sort__item">
          <a
            href="#"
            className={`sort__link ${(sortType === SortType.BY_RATING) && `active`}`}
            onClick={(evt) => onTypeChangeHandler(evt, SortType.BY_RATING)}
          >по популярности</a>
        </li>
      </ul>
      <div className="sort__control">
        <MyButton
          inputClass={`sort__btn sort__btn--increase ${(sortDirection === SortDirection.UP) && `active`}`}
          onClick={() => onDirectionChangeHandler(SortDirection.UP)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.58301 15.667H17.4163L10.9997 5.58366L4.58301 15.667Z" fill="currentColor"/>
          </svg>
        </MyButton>
        <MyButton
          inputClass={`sort__btn sort__btn--decrease ${(sortDirection === SortDirection.DOWN) && `active`}`}
          onClick={() => onDirectionChangeHandler(SortDirection.DOWN)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.417 5.33301L4.58366 5.33301L11.0003 15.4163L17.417 5.33301Z" fill="currentColor"/>
          </svg>
        </MyButton>
      </div>

    </div>
  );
};

CatalogSort.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default CatalogSort;
