import React from 'react';
import MyButton from '../UI/my-button/my-button';
import {popupCloseHandler} from '../../utils';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {redirectToRoute} from '../../store/actions';
import {AppRoute} from '../../const';

const AddComplete = (props) => {
  const {setActive} = props;

  const dispatch = useDispatch();

  return (
    <div className="popup__add-complete add-complete" onClick={(evt) => evt.stopPropagation()}>
      <MyButton
        inputClass={`add-complete__btn close__btn`}
        aria-label="Закрыть"
        onClick={() => popupCloseHandler(setActive)}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.77 14.835L9.00004 10.0575L4.23004 14.835L3.16504 13.77L7.94254 9.00004L3.16504 4.23004L4.23004 3.16504L9.00004 7.94254L13.77 3.17254L14.8275 4.23004L10.0575 9.00004L14.8275 13.77L13.77 14.835Z" fill="currentColor"/>
        </svg>
      </MyButton>
      <h2 className="add-complete__title">Товар успешно добавлен в корзину</h2>
      <div className="add-complete__wrapper">
        <MyButton
          inputClass={`add-complete__btn add-complete__btn--basket`}
          onClick={() => {
            dispatch(redirectToRoute(AppRoute.BASKET));
            popupCloseHandler(setActive);
          }}
        >Перейти в корзину</MyButton>
        <MyButton
          inputClass={`add-complete__btn add-complete__btn--continue`}
          onClick={() => popupCloseHandler(setActive)}
        >Продолжить покупки</MyButton>
      </div>
    </div>
  );
};

AddComplete.propTypes = {
  setActive: PropTypes.func.isRequired,
};

export default AddComplete;
