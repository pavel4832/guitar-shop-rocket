import React, {useEffect, useState} from 'react';
import MyInput from '../UI/my-input/my-input';
import MyCheckbox from '../UI/my-checkbox/my-checkbox';
import {getMaxPrice, getMinPrice, getSortedArray} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {setFilters} from '../../store/actions';
import {FilterByType, RADIX, StringQuantity} from '../../const';

const Filter = () => {
  const {guitarList, filters, sortType, sortDirection} = useSelector((state) => state.DATA);
  const [isMinPrice, setMinPrice] = useState(getMinPrice(guitarList));
  const [isMaxPrice, setMaxPrice] = useState(getMaxPrice(guitarList));
  const [isAcoustic, setAcoustic] = useState(false);
  const [isElectric, setElectric] = useState(false);
  const [isUku, setUku] = useState(false);
  const [isFour, setFour] = useState(false);
  const [isSix, setSix] = useState(false);
  const [isSeven, setSeven] = useState(false);
  const [isTwelve, setTwelve] = useState(false);

  let filteredAndSortedList = getSortedArray(guitarList, sortType, sortDirection, filters);

  const dispatch = useDispatch();

  useEffect(() => {
    let newFilters = {
      minPrice: parseInt(isMinPrice, RADIX),
      maxPrice: parseInt(isMaxPrice, RADIX),
      acoustic: isAcoustic,
      electric: isElectric,
      uku: isUku,
      fourStrings: isFour,
      sixStrings: isSix,
      sevenStrings: isSeven,
      twelveStrings: isTwelve,
    };
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
    filteredAndSortedList = getSortedArray(filteredAndSortedList, sortType, sortDirection, newFilters);
  }, [isMinPrice, isMaxPrice, isAcoustic, isElectric, isUku, isFour, isSix, isSeven, isTwelve]);

  const checkDisableType = (type) => {
    let isType = true;
    filteredAndSortedList.forEach((item) => {
      if (item.type === type) {
        isType = false;
      }
    });
    return isType;
  };

  const checkDisableString = (string) => {
    let isString = true;
    filteredAndSortedList.forEach((item) => {
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
    if (newMaxPrice === ``) {
      newMaxPrice = getMaxPrice(guitarList);
    }
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
              id="minPrice"
              type={`number`}
              min={`0`}
              inputClass={`price__input my-input`}
              value={isMinPrice}
              onClick={() => setMinPrice(``)}
              onChange={(evt) => setMinPrice(evt.target.value)}
              onBlur={(evt) => checkMinPriceHandler(evt)}
            />
            <label htmlFor="minPrice" className="price__label visually-hidden">Минимальная цена</label>
            <div className="price__line"></div>
            <MyInput
              id="maxPrice"
              type={`number`}
              min={`0`}
              inputClass={`price__input my-input`}
              value={isMaxPrice}
              onClick={() => setMaxPrice(``)}
              onChange={(evt) => setMaxPrice(evt.target.value)}
              onBlur={(evt) => checkMaxPriceHandler(evt)}
            />
            <label htmlFor="maxPrice" className="price__label visually-hidden">Максимальная цена</label>
          </div>
        </li>
        <li className="filter__item">
          <h3 className="filter__field">Тип гитар</h3>
          <MyCheckbox
            id="acoustic"
            disabled={checkDisableType(FilterByType.ACOUSTIC)}
            onChange={() => setAcoustic(!isAcoustic)}
          >Акустические гитары</MyCheckbox>
          <MyCheckbox
            id="electric"
            disabled={checkDisableType(FilterByType.ELECTRIC)}
            onChange={() => setElectric(!isElectric)}
          >Электрогитары</MyCheckbox>
          <MyCheckbox
            id="uku"
            disabled={checkDisableType(FilterByType.UKU)}
            onChange={() => setUku(!isUku)}
          >Укулеле</MyCheckbox>
        </li>
        <li className="filter__item">
          <h3 className="filter__field">Количество струн</h3>
          <MyCheckbox
            id="4"
            disabled={checkDisableString(StringQuantity.FOUR)}
            onChange={() => setFour(!isFour)}
          >4</MyCheckbox>
          <MyCheckbox
            id="6"
            disabled={checkDisableString(StringQuantity.SIX)}
            onChange={() => setSix(!isSix)}
          >6</MyCheckbox>
          <MyCheckbox
            id="7"
            disabled={checkDisableString(StringQuantity.SEVEN)}
            onChange={() => setSeven(!isSeven)}
          >7</MyCheckbox>
          <MyCheckbox
            id="12"
            disabled={checkDisableString(StringQuantity.TWELVE)}
            onChange={() => setTwelve(!isTwelve)}
          >12</MyCheckbox>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
