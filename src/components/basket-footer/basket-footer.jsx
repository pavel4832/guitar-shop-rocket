import React from 'react';
import MyInput from "../UI/my-input/my-input";
import MyButton from "../UI/my-button/my-button";

const BasketFooter = () => {
  return (
    <div className="basket__footer">
      <div className="basket__promo basket-promo">
        <h3 className="basket-promo__title">Промокод на скидку</h3>
        <p className="basket-promo__text">Введите свой промокод, если он у вас есть.</p>
        <div className="basket-promo__control">
          <MyInput
            inputClass={`basket-promo__input`}
            placeholder="GITARAHIT"
          />
          <MyButton inputClass={`basket-promo__btn`}>Применить купон</MyButton>
        </div>
      </div>
      <div className="basket__total">
        <div className="basket-promo__amount">
          <span className="basket-promo__comment">Всего: </span>
          <span className="basket-promo__comment">47 000 ₽</span>
        </div>
        <MyButton inputClass={`basket-promo__submit`}>Оформить заказ</MyButton>
      </div>
    </div>
  );
};

export default BasketFooter;
