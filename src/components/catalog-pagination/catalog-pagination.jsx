import React from 'react';
import {useSelector} from 'react-redux';
import {getPageCount, getPagesArray} from '../../utils';
import {PAGE_LIMIT} from '../../const';
import MyButton from '../UI/my-button/my-button';
import PropTypes from 'prop-types';

const CatalogPagination = (props) => {
  const {activePage, setPage} = props;
  const {filteredAndSortedList} = useSelector((state) => state.DATA);
  const totalCount = getPageCount(filteredAndSortedList.length, PAGE_LIMIT);
  const pageArray = getPagesArray(totalCount);

  const clickHandler = (page) => {
    setPage(page);
  };

  return (
    <div className="catalog__pagination pagination">
      <ul className="pagination__list">
        {pageArray.map((page) => (
          <li key={page} className="pagination__item">
            <MyButton
              inputClass={`pagination__button ${(page === activePage) && `active`}`}
              onClick={() => clickHandler(page)}
            >
              {page}
            </MyButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

CatalogPagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default CatalogPagination;
