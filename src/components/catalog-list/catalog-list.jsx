import React from 'react';
import CatalogCard from "../catalog-card/catalog-card";
import PropTypes from "prop-types";
import {PAGE_LIMIT} from "../../const";

const CatalogList = (props) => {
  const {filteredAndSortedList, page} = props;
  const renderArray = filteredAndSortedList.slice((page - 1) * PAGE_LIMIT, (page * PAGE_LIMIT));

  return (
    <div className="catalog__list">
      {renderArray.map((item) => (
        <CatalogCard key={item.id} card={item} />
      ))}
    </div>
  );
};

CatalogList.propTypes = {
  filteredAndSortedList: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.number.isRequired,
};

export default CatalogList;
