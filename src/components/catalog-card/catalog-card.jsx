import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {AppRoute, RATING_STARS} from '../../const';
import MyButton from '../UI/my-button/my-button';
import {useDispatch} from 'react-redux';
import {redirectToRoute} from '../../store/actions';
import Popup from '../UI/popup/popup';
import AddToCart from '../add-to-cart/add-to-cart';
import {popupOpenHandler} from '../../utils';
import AddComplete from '../add-complete/add-complete';

const CatalogCard = (props) => {
  const {card} = props;
  const [isAddToCart, setAddToCart] = useState(false);
  const [isComplete, setComplete] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="catalog__card card">
      <img src={card.image} className="card__image" alt="фото гитары" width="68" height="190"/>
      <div className="card__rating rating">
        <ul className="rating__list">
          {RATING_STARS.map((star) => (
            <li className="rating__item" key={star}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6415 4.13829L7.66615 3.70586L6.33608 1.00938C6.29975 0.935551 6.23998 0.875786 6.16615 0.839457C5.981 0.748051 5.756 0.824223 5.66342 1.00938L4.33334 3.70586L1.35795 4.13829C1.27592 4.15 1.20092 4.18868 1.1435 4.24727C1.07408 4.31862 1.03582 4.41461 1.03714 4.51416C1.03846 4.6137 1.07924 4.70864 1.15053 4.77813L3.30326 6.87696L2.79467 9.84063C2.78274 9.90957 2.79037 9.98048 2.81669 10.0453C2.84301 10.1101 2.88697 10.1663 2.94358 10.2074C3.00019 10.2485 3.06719 10.2729 3.13697 10.2779C3.20676 10.2829 3.27655 10.2682 3.33842 10.2356L5.99975 8.83633L8.66108 10.2356C8.73373 10.2742 8.81811 10.2871 8.89897 10.2731C9.10287 10.2379 9.23998 10.0445 9.20483 9.84063L8.69623 6.87696L10.849 4.77813C10.9076 4.72071 10.9462 4.64571 10.958 4.56368C10.9896 4.3586 10.8466 4.16875 10.6415 4.13829Z" fill="#FFD168"/>
              </svg>
            </li>
          ))}
        </ul>
        <span className="rating__number">{card.rating}</span>
      </div>
      <div className="card__description">
        <span className="card__text">{card.name}</span>
        <span className="card__text">{`${card.price.toLocaleString(`ru-RU`)} ₽`}</span>
      </div>
      <div className="card__control">
        <MyButton
          inputClass={`card__btn card__btn--more`}
          onClick={() => dispatch(redirectToRoute(AppRoute.PRODUCT_ITEM))}
        >Подробнее</MyButton>
        <MyButton
          inputClass={`card__btn card__btn--buy`}
          onClick={() => popupOpenHandler(setAddToCart)}
        >Купить</MyButton>
      </div>
      {(isAddToCart) && <Popup name={`catalog__popup`} active={isAddToCart} setActive={setAddToCart}>
        <AddToCart setActive={setAddToCart} card={card} setComplete={setComplete} />
      </Popup>}
      {(isComplete) && <Popup name={`catalog__popup`} active={isComplete} setActive={setComplete}>
        <AddComplete setActive={setComplete} />
      </Popup>}
    </div>
  );
};

CatalogCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CatalogCard;
