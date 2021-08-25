import React, {useState} from 'react';
import CatalogSort from '../catalog-sort/catalog-sort';
import CatalogList from '../catalog-list/catalog-list';
import CatalogPagination from '../catalog-pagination/catalog-pagination';
import PropTypes from "prop-types";

const CatalogBoard = (props) => {
  const {filteredAndSortedList} = props;
  const [page, setPage] = useState(1);

  return (
    <div className="catalog__board">
      <CatalogSort />
      <CatalogList filteredAndSortedList={filteredAndSortedList} page={page} />
      <CatalogPagination
        filteredAndSortedList={filteredAndSortedList}
        activePage={page}
        setPage={setPage}
      />
    </div>
  );
};

CatalogBoard.propTypes = {
  filteredAndSortedList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CatalogBoard;
