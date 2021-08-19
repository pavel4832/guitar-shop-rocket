import React from 'react';
import PropTypes from "prop-types";
import MyButton from "../UI/my-button/my-button";
import {GuitarType} from "../../const";
import PriceButton from "../UI/price-button/price-button";

const BasketCard = (props) => {
  const {card} = props;
  return (
    <li className="basket__item">
      <MyButton inputClass={`basket__btn close__btn`}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.77 14.835L9.00004 10.0575L4.23004 14.835L3.16504 13.77L7.94254 9.00004L3.16504 4.23004L4.23004 3.16504L9.00004 7.94254L13.77 3.17254L14.8275 4.23004L10.0575 9.00004L14.8275 13.77L13.77 14.835Z" fill="currentColor"/>
        </svg>
      </MyButton>
      <img className="basket__image" src={card.image} alt="фото гитары" width="48" height="124"/>
      <div className="basket__description">
        <h3 className="basket__title">{`${GuitarType[card.type]} ${card.name}`}</h3>
        <p className="basket__text">{`Артикул: ${card.artNumber}`}</p>
        <p className="basket__text">{`Электрогитара, ${card.strings} струнная`}</p>
      </div>
      <p className="basket__price">{`${card.price.toLocaleString(`ru-RU`)} ₽`}</p>
      <PriceButton inputClass={`basket__price-control`} />
      <p className="basket__amount">{`${card.price.toLocaleString(`ru-RU`)} ₽`}</p>
    </li>
  );
};

BasketCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default BasketCard;
