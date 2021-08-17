import React from 'react';
import PropTypes from 'prop-types';

const CatalogCard = (props) => {
  const {card} = props;
  return (
    <div className="catalog__card card">
      <img src={card.image} alt="фото гитары" width="80" height="202"/>
      <div className="card__rating">

      </div>
      <div className="card__description"></div>
      <div className="card__control"></div>
    </div>
  );
};

CatalogCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CatalogCard;
