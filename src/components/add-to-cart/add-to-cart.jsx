import React from 'react';
import PropTypes from 'prop-types';
import {popupCloseHandler, popupOpenHandler} from '../../utils';
import MyButton from '../UI/my-button/my-button';
import {GuitarType} from '../../const';
import {useDispatch, useSelector} from 'react-redux';
import {addBasketItem, changeQty} from "../../store/actions";

const AddToCart = (props) => {
  const {setActive, card, setComplete} = props;
  const {basketList} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  const addNewItemHandler = () => {
    let isSame = false;
    let newItem = Object.assign(
        {},
        card,
        {
          quantity: 1,
        }
    );
    basketList.forEach((item) => {
      if (item.id === newItem.id) {
        dispatch(changeQty({card: item, newQty: item.quantity + 1}));
        isSame = true;
      }
    });
    if (!isSame) {
      dispatch(addBasketItem(newItem));
    }
  };

  const addCompleteHandler = () => {
    setActive(false);
    popupOpenHandler(setComplete);
    addNewItemHandler();
  };

  return (
    <div className="popup__add-to-cart add-to-cart">
      <MyButton
        inputClass={`add-to-cart__btn close__btn`}
        aria-label="Закрыть"
        onClick={() => popupCloseHandler(setActive)}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.77 14.835L9.00004 10.0575L4.23004 14.835L3.16504 13.77L7.94254 9.00004L3.16504 4.23004L4.23004 3.16504L9.00004 7.94254L13.77 3.17254L14.8275 4.23004L10.0575 9.00004L14.8275 13.77L13.77 14.835Z" fill="currentColor"/>
        </svg>
      </MyButton>
      <h2 className="add-to-cart__title">Добавить товар в корзину</h2>
      <div className="add-to-cart__wrapper">
        <div className="add-to-cart__item">
          <img className="add-to-cart__image" src={card.image} alt="фото гитары" width="56" height="128"/>
          <div className="add-to-cart__description">
            <h2 className="add-to-cart__name basket__title">{`${GuitarType[card.type]} ${card.name}`}</h2>
            <p className="add-to-cart__text basket__text">{`Артикул: ${card.artNumber}`}</p>
            <p className="basket__text">{`Электрогитара, ${card.strings} струнная`}</p>
            <p className="add-to-cart__price basket__price">{`${card.price.toLocaleString(`ru-RU`)} ₽`}</p>
          </div>
        </div>
        <MyButton
          inputClass={`add-to-cart__btn`}
          onClick={addCompleteHandler}
        >Добавить в корзину</MyButton>
      </div>
    </div>
  );
};

AddToCart.propTypes = {
  setActive: PropTypes.func.isRequired,
  setComplete: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
};

export default AddToCart;
