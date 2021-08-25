import React, {useState} from 'react';
import MyInput from '../UI/my-input/my-input';
import MyButton from '../UI/my-button/my-button';
import {useDispatch, useSelector} from 'react-redux';
import {PromoDiscount, PromoType, AppRoute} from '../../const';
import {redirectToRoute} from '../../store/actions';

const BasketFooter = () => {
  const {basketList} = useSelector((state) => state.DATA);
  const [isPromo, setPromo] = useState(``);
  const [isDiscount, setDiscount] = useState(0);

  const dispatch = useDispatch();

  const getDiscount = () => {
    if (isPromo) {
      switch (isPromo) {
        case PromoType.GITARAHIT:
          setDiscount(getTotalPrice() * PromoDiscount.GITARAHIT);
          break;
        case PromoType.SUPERGITARA:
          setDiscount(PromoDiscount.SUPERGITARA);
          break;
        case PromoType.GITARA2020:
          let newDiscount = getTotalPrice() * PromoDiscount.GITARA2020;
          if (newDiscount > PromoDiscount.MAX_DISCOUNT) {
            newDiscount = PromoDiscount.MAX_DISCOUNT;
          }
          setDiscount(newDiscount);
          break;
        default:
          setDiscount(0);
          break;
      }
    }
  };

  const getTotalPrice = () => {
    let newPrice = 0;
    basketList.forEach((item) => {
      newPrice = newPrice + item.price * item.quantity;
    });
    return newPrice - isDiscount;
  };

  return (
    <div className="basket__footer">
      <div className="basket__promo basket-promo">
        <h3 className="basket-promo__title">Промокод на скидку</h3>
        <p className="basket-promo__text">Введите свой промокод, если он у вас есть.</p>
        <div className="basket-promo__control">
          <MyInput
            value={isPromo}
            inputClass={`basket-promo__input`}
            onChange={(evt) => setPromo(evt.target.value.toUpperCase())}
          />
          <MyButton
            inputClass={`basket-promo__btn`}
            onClick={getDiscount}
          >Применить купон</MyButton>
        </div>
      </div>
      <div className="basket__total">
        <div className="basket-promo__amount">
          <span className="basket-promo__comment">Всего: </span>
          <span className="basket-promo__comment">{`${getTotalPrice().toLocaleString(`ru-RU`)} ₽`}</span>
        </div>
        <MyButton
          inputClass={`basket-promo__submit`}
          onClick={() => dispatch(redirectToRoute(AppRoute.ORDER))}
        >Оформить заказ</MyButton>
      </div>
    </div>
  );
};

export default BasketFooter;
