import {FilterByType, PAGINATION_DIVIDER, RADIX, SortDirection, SortType, StringQuantity} from './const';

export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalPages) => {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
};

export const getRenderedArray = (target, page) => {
  let result = [];
  if (target.length === 0) {
    return [];
  }
  if (target.length === 1) {
    return result;
  }
  if (page === target[0]) {
    result = [target[0], target[page], PAGINATION_DIVIDER, target[target.length - 1]];
  } else if (page === target[target.length - 1]) {
    result = [target[0], PAGINATION_DIVIDER, target[target.length - 2], target[target.length - 1]];
  } else if (page === target[0] + 1) {
    result = [target[0], target[page - 1], PAGINATION_DIVIDER, target[target.length - 1]];
  } else if (page === target[target.length - 2]) {
    result = [target[0], PAGINATION_DIVIDER, target[page - 1], target[target.length - 1]];
  } else {
    result = [target[0], PAGINATION_DIVIDER, target[page - 1], PAGINATION_DIVIDER, target[target.length - 1]];
  }
  return result;
};

export const popupOpenHandler = (setAction) => {
  const scrollY = window.pageYOffset;
  const screenWidth = document.body.clientWidth;
  document.body.style.position = `fixed`;
  document.body.style.minWidth = `${screenWidth}px`;
  document.body.style.top = `-${scrollY}px`;
  setAction(true);
};

export const popupCloseHandler = (setAction) => {
  const scrollY = document.body.style.top;
  document.body.style.position = ``;
  window.scrollTo(0, parseInt(scrollY || `0`, RADIX) * -1);
  setAction(false);
};

export const getFilteredArray = (target, filters) => {
  const arrayForFilter = target.slice();
  let priceFilteredArray = [];
  let acousticArray = [];
  let electricArray = [];
  let ukuArray = [];
  let fourArray = [];
  let sixArray = [];
  let sevenArray = [];
  let twelveArray = [];

  priceFilteredArray = arrayForFilter.filter((item) => (item.price >= filters.minPrice && item.price <= filters.maxPrice));

  let typeFilteredArray = priceFilteredArray.slice();

  if (filters.acoustic) {
    acousticArray = priceFilteredArray.filter((item) => item.type === FilterByType.ACOUSTIC);
  }
  if (filters.electric) {
    electricArray = priceFilteredArray.filter((item) => item.type === FilterByType.ELECTRIC);
  }
  if (filters.uku) {
    ukuArray = priceFilteredArray.filter((item) => item.type === FilterByType.UKU);
  }

  if (acousticArray.length !== 0 || electricArray.length !== 0 || ukuArray.length !== 0) {
    typeFilteredArray = [...acousticArray, ...electricArray, ...ukuArray];
  }

  let stringFilteredArray = typeFilteredArray.slice();

  if (filters.fourStrings) {
    fourArray = typeFilteredArray.filter((item) => item.strings === StringQuantity.FOUR);
  }

  if (filters.sixStrings) {
    sixArray = typeFilteredArray.filter((item) => item.strings === StringQuantity.SIX);
  }

  if (filters.sevenStrings) {
    sevenArray = typeFilteredArray.filter((item) => item.strings === StringQuantity.SEVEN);
  }

  if (filters.twelveStrings) {
    twelveArray = typeFilteredArray.filter((item) => item.strings === StringQuantity.TWELVE);
  }

  if (fourArray.length !== 0 || sixArray.length !== 0 || sevenArray.length !== 0 || twelveArray.length !== 0) {
    stringFilteredArray = [...fourArray, ...sixArray, ...sevenArray, ...twelveArray];
  }

  return stringFilteredArray;
};

export const getSortedArray = (target, sortType, sortDirection, filters) => {
  const arrayForSort = target.slice();
  let newSortArray = [];

  if (sortType === SortType.NONE && sortDirection === SortDirection.NONE) {
    return getFilteredArray(arrayForSort, filters);
  }
  switch (sortType) {
    case SortType.BY_PRICE:
      switch (sortDirection) {
        case SortDirection.UP:
          newSortArray = arrayForSort.sort((a, b) => a.price - b.price);
          break;
        case SortDirection.DOWN:
          newSortArray = arrayForSort.sort((a, b) => b.price - a.price);
          break;
      }
      break;
    case SortType.BY_RATING:
      switch (sortDirection) {
        case SortDirection.UP:
          newSortArray = arrayForSort.sort((a, b) => a.rating - b.rating);
          break;
        case SortDirection.DOWN:
          newSortArray = arrayForSort.sort((a, b) => b.rating - a.rating);
          break;
      }
      break;
  }

  return getFilteredArray(newSortArray, filters);
};

export const getMinPrice = (target) => {
  let newPrice = target[0].price;
  target.forEach((item) => {
    if (item.price < newPrice) {
      newPrice = item.price;
    }
  });
  return newPrice;
};

export const getMaxPrice = (target) => {
  let newPrice = target[0].price;
  target.forEach((item) => {
    if (item.price > newPrice) {
      newPrice = item.price;
    }
  });
  return newPrice;
};
