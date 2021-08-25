import React, {useEffect, useState} from 'react';
import MyInput from '../UI/my-input/my-input';
import MyCheckbox from '../UI/my-checkbox/my-checkbox';
import {getMaxPrice, getMinPrice} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {setFilters} from '../../store/actions';
import {RADIX, StringQuantity} from '../../const';
import PropTypes from 'prop-types';

const Filter = (props) => {
  const {filteredAndSortedList} = props;
  const {guitarList, filters} = useSelector((state) => state.DATA);
  const [isMinPrice, setMinPrice] = useState(getMinPrice(guitarList));
  const [isMaxPrice, setMaxPrice] = useState(getMaxPrice(guitarList));
  const [isAcoustic, setAcoustic] = useState(false);
  const [isElectric, setElectric] = useState(false);
  const [isUku, setUku] = useState(false);
  const [isFour, setFour] = useState(false);
  const [isSix, setSix] = useState(false);
  const [isSeven, setSeven] = useState(false);
  const [isTwelve, setTwelve] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilters(
        Object.assign(
            {},
            filters,
            {
              minPrice: parseInt(isMinPrice, RADIX),
              maxPrice: parseInt(isMaxPrice, RADIX),
              acoustic: isAcoustic,
              electric: isElectric,
              uku: isUku,
              fourStrings: isFour,
              sixStrings: isSix,
              sevenStrings: isSeven,
              twelveStrings: isTwelve,
            }
        )
    ));
  }, [isMinPrice, isMaxPrice, isAcoustic, isElectric, isUku, isFour, isSix, isSeven, isTwelve]);

  const checkDisableString = (target, string) => {
    let isString = true;
    target.forEach((item) => {
      if (item.strings === string) {
        isString = false;
      }
    });
    return isString;
  };

  const checkMinPriceHandler = (evt) => {
    let newMinPrice = evt.target.value;
    if (newMinPrice < getMinPrice(guitarList)) {
      newMinPrice = getMinPrice(guitarList);
    }
    if (newMinPrice > filters.maxPrice) {
      newMinPrice = filters.maxPrice;
    }
    setMinPrice(newMinPrice);
  };

  const checkMaxPriceHandler = (evt) => {
    let newMaxPrice = evt.target.value;
    if (newMaxPrice > getMaxPrice(guitarList)) {
      newMaxPrice = getMaxPrice(guitarList);
    }
    if (newMaxPrice < filters.minPrice) {
      newMaxPrice = filters.minPrice;
    }
    setMaxPrice(newMaxPrice);
  };

  return (
    <div className="catalog__filter filter">
      <h2 className="filter__title">Фильтр</h2>
      <ul className="filter__list">
        <li className="filter__item">
          <h3 className="filter__field">Цена, ₽</h3>
          <div className="filter__price price">
            <MyInput
              type={`number`}
              min={`0`}
              inputClass={`price__input`}
              value={isMinPrice}
              onChange={(evt) => setMinPrice(evt.target.value)}
              onBlur={(evt) => checkMinPriceHandler(evt)}
            />
            <div className="price__line"></div>
            <MyInput
              type={`number`}
              min={`0`}
              inputClass={`price__input`}
              value={isMaxPrice}
              onChange={(evt) => setMaxPrice(evt.target.value)}
              onBlur={(evt) => checkMaxPriceHandler(evt)}
            />
          </div>
        </li>
        <li className="filter__item">
          <h3 className="filter__field">Тип гитар</h3>
          <MyCheckbox
            id="acoustic"
            onChange={() => setAcoustic(!isAcoustic)}
          >Акустические гитары</MyCheckbox>
          <MyCheckbox
            id="electric"
            onChange={() => setElectric(!isElectric)}
          >Электрогитары</MyCheckbox>
          <MyCheckbox
            id="uku"
            onChange={() => setUku(!isUku)}
          >Укулеле</MyCheckbox>
        </li>
        <li className="filter__item">
          <h3 className="filter__field">Количество струн</h3>
          <MyCheckbox
            id="4"
            disabled={checkDisableString(filteredAndSortedList, StringQuantity.FOUR)}
            onChange={() => setFour(!isFour)}
          >4</MyCheckbox>
          <MyCheckbox
            id="6"
            disabled={checkDisableString(filteredAndSortedList, StringQuantity.SIX)}
            onChange={() => setSix(!isSix)}
          >6</MyCheckbox>
          <MyCheckbox
            id="7"
            disabled={checkDisableString(filteredAndSortedList, StringQuantity.SEVEN)}
            onChange={() => setSeven(!isSeven)}
          >7</MyCheckbox>
          <MyCheckbox
            id="12"
            disabled={checkDisableString(filteredAndSortedList, StringQuantity.TWELVE)}
            onChange={() => setTwelve(!isTwelve)}
          >12</MyCheckbox>
        </li>
      </ul>
    </div>
  );
};

Filter.propTypes = {
  filteredAndSortedList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Filter;
