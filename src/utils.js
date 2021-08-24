import {RADIX} from './const';

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
