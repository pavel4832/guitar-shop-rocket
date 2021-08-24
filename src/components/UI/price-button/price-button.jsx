import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MyButton from '../my-button/my-button';
import MyInput from '../my-input/my-input';
import {useDispatch} from 'react-redux';
import {changeQty} from '../../../store/actions';
import Popup from "../popup/popup";
import RemoveFromBasket from "../../remove-from-basket/remove-from-basket";

const PriceButton = ({inputClass, card, ...props}) => {
  const [isQty, setQty] = useState(card.quantity);
  const [isRemove, setRemove] = useState(false);

  const dispatch = useDispatch();

  const decreaseHandler = () => {
    const newQty = isQty - 1;
    if ((isQty - 1) > 0) {
      setQty(newQty);
      dispatch(changeQty({card, newQty}));
    } else {
      setRemove(true);
    }
  };

  const increaseHandler = () => {
    const newQty = isQty + 1;
    setQty(isQty + 1);
    dispatch(changeQty({card, newQty}));
  };

  return (
    <div className={`${inputClass} price-control`}>
      <MyButton
        inputClass={`price-control__btn increase`}
        aria-label="Уменьшить"
        onClick={decreaseHandler}
      >
        <svg width="8" height="1" viewBox="0 0 8 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="8" y1="0.5" y2="0.5" stroke="currentColor"/>
        </svg>
      </MyButton>
      <MyInput
        id={`qty-${card.id}`}
        inputClass={`price-control__input`}
        value={isQty}
        readOnly={true}
        {...props}
      />
      <label htmlFor={`qty-${card.id}`} className="visually-hidden">Количество</label>
      <MyButton
        inputClass={`price-control__btn decrease`}
        aria-label="Увеличить"
        onClick={increaseHandler}
      >
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="8" y1="4.11816" y2="4.11816" stroke="currentColor"/>
          <line x1="3.8457" y1="8" x2="3.8457" stroke="currentColor"/>
        </svg>
      </MyButton>
      {(isRemove) && <Popup name={`basket__popup`} active={isRemove} setActive={setRemove}>
        <RemoveFromBasket setActive={setRemove} card={card} />
      </Popup>}
    </div>
  );
};

PriceButton.propTypes = {
  inputClass: PropTypes.string.isRequired,
  card: PropTypes.object.isRequired,
};

export default PriceButton;
