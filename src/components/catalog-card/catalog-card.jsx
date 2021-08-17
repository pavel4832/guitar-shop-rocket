import React from 'react';
import PropTypes from 'prop-types';
import {RATING_STARS} from '../../const';
import MyButton from '../UI/my-button/my-button';

const CatalogCard = (props) => {
  const {card} = props;
  return (
    <div className="catalog__card card">
      <img src={card.image} className="card__image" alt="фото гитары" width="80" height="202"/>
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
        <MyButton inputClass={`card__btn card__btn--more`}>Подробнее</MyButton>
        <MyButton inputClass={`card__btn card__btn--buy`}>
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5H9.969L10.219 4H4V3H10.86C10.936 3 11.011 3.01733 11.0793 3.05067C11.1476 3.08401 11.2074 3.13248 11.2542 3.19239C11.3009 3.25231 11.3334 3.3221 11.3491 3.39645C11.3649 3.47081 11.3635 3.54778 11.345 3.6215L10.095 8.6215C10.0679 8.72962 10.0055 8.8256 9.9176 8.89417C9.82973 8.96275 9.72146 9 9.61 9H2.5C2.36739 9 2.24021 8.94732 2.14645 8.85355C2.05268 8.75978 2 8.63261 2 8.5V2.5H1V1.5H2.5C2.63261 1.5 2.75978 1.55268 2.85355 1.64645C2.94732 1.74021 3 1.86739 3 2V5ZM3 12C2.73478 12 2.48043 11.8946 2.29289 11.7071C2.10536 11.5196 2 11.2652 2 11C2 10.7348 2.10536 10.4804 2.29289 10.2929C2.48043 10.1054 2.73478 10 3 10C3.26522 10 3.51957 10.1054 3.70711 10.2929C3.89464 10.4804 4 10.7348 4 11C4 11.2652 3.89464 11.5196 3.70711 11.7071C3.51957 11.8946 3.26522 12 3 12ZM9 12C8.73478 12 8.48043 11.8946 8.29289 11.7071C8.10536 11.5196 8 11.2652 8 11C8 10.7348 8.10536 10.4804 8.29289 10.2929C8.48043 10.1054 8.73478 10 9 10C9.26522 10 9.51957 10.1054 9.70711 10.2929C9.89464 10.4804 10 10.7348 10 11C10 11.2652 9.89464 11.5196 9.70711 11.7071C9.51957 11.8946 9.26522 12 9 12Z" fill="white"/>
          </svg>
          Купить
        </MyButton>
      </div>
    </div>
  );
};

CatalogCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CatalogCard;
