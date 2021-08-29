import React from 'react';
import {getPageCount, getPagesArray, getRenderedArray} from '../../utils';
import {PAGE_LIMIT, PAGINATION_DIVIDER} from '../../const';
import MyButton from '../UI/my-button/my-button';
import PropTypes from 'prop-types';

const CatalogPagination = (props) => {
  const {filteredAndSortedList, activePage, setPage} = props;
  const totalCount = getPageCount(filteredAndSortedList.length, PAGE_LIMIT);
  const pageArray = getPagesArray(totalCount);
  const renderedArray = getRenderedArray(pageArray, activePage);

  const backClickHandler = () => {
    setPage(activePage - 1);
  };

  const forwardClickHandler = () => {
    setPage(activePage + 1);
  };

  const clickHandler = (page) => {
    setPage(page);
  };

  return (
    <div className="catalog__pagination pagination">
      {(activePage > 1) &&
      <MyButton
        inputClass={`pagination__control back-btn`}
        onClick={backClickHandler}
      >Назад</MyButton>
      }
      <ul className="pagination__list">
        {renderedArray.map((page) => (
          <li key={page} className="pagination__item">
            <MyButton
              inputClass={`pagination__button ${(page === activePage) && `active`}`}
              onClick={() => clickHandler(page)}
              disabled={page === PAGINATION_DIVIDER}
            >
              {page}
            </MyButton>
          </li>
        ))}
      </ul>
      {(activePage < totalCount) &&
      <MyButton
        inputClass={`pagination__control forward-btn`}
        onClick={forwardClickHandler}
      >Далее</MyButton>
      }
    </div>
  );
};

CatalogPagination.propTypes = {
  filteredAndSortedList: PropTypes.arrayOf(PropTypes.object).isRequired,
  activePage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default CatalogPagination;
