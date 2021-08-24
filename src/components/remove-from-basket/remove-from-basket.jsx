import React from 'react';
import MyButton from '../UI/my-button/my-button';
import {popupCloseHandler} from '../../utils';
import {GuitarType} from '../../const';
import PropTypes from 'prop-types';
import {removeBasketItem} from '../../store/actions';
import {useDispatch} from 'react-redux';

const RemoveFromBasket = (props) => {
  const {setActive, card} = props;

  const dispatch = useDispatch();

  const removeItemHandler = (element) => {
    dispatch(removeBasketItem(element));
    popupCloseHandler(setActive);
  };

  return (
    <div className="popup__remove-from-cart remove-from-cart">
      <MyButton
        inputClass={`remove-from-cart__btn close__btn`}
        aria-label="Закрыть"
        onClick={() => popupCloseHandler(setActive)}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.77 14.835L9.00004 10.0575L4.23004 14.835L3.16504 13.77L7.94254 9.00004L3.16504 4.23004L4.23004 3.16504L9.00004 7.94254L13.77 3.17254L14.8275 4.23004L10.0575 9.00004L14.8275 13.77L13.77 14.835Z" fill="currentColor"/>
        </svg>
      </MyButton>
      <h2 className="remove-from-cart__title">Удалить этот товар? </h2>
      <div className="remove-from-cart__wrapper">
        <div className="remove-from-cart__item">
          <img className="remove-from-cart__image" src={card.image} alt="фото гитары" width="56" height="128"/>
          <div className="remove-from-cart__description">
            <h2 className="remove-from-cart__name basket__title">{`${GuitarType[card.type]} ${card.name}`}</h2>
            <p className="remove-from-cart__text basket__text">{`Артикул: ${card.artNumber}`}</p>
            <p className="basket__text">{`Электрогитара, ${card.strings} струнная`}</p>
            <p className="remove-from-cart__price basket__price">{`${card.price.toLocaleString(`ru-RU`)} ₽`}</p>
          </div>
        </div>
        <div className="remove-from-cart__control">
          <MyButton
            inputClass={`remove-from-cart__btn remove-from-cart__btn--basket`}
            onClick={() => removeItemHandler(card)}
          >Удалить товар</MyButton>
          <MyButton
            inputClass={`remove-from-cart__btn remove-from-cart__btn--continue`}
            onClick={() => popupCloseHandler(setActive)}
          >Продолжить покупки</MyButton>
        </div>
      </div>
    </div>
  );
};

RemoveFromBasket.propTypes = {
  setActive: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
};

export default RemoveFromBasket;
