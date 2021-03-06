export const AppRoute = {
  ROOT: `/`,
  BASKET: `/basket`,
  SHOPS: `/shops`,
  ABOUT: `/about`,
  SERVICES: `/services`,
  ORDER: `/order`,
  PRODUCT_ITEM: `/product-item`
};

export const MenuType = {
  CATALOG: `catalog`,
  SHOPS: `shops`,
  ABOUT: `about`,
  SERVICES: `services`,
};

export const MAIN_MENU = [
  {
    type: `catalog`,
    link: `ROOT`,
    name: `Каталог`
  },
  {
    type: `shops`,
    link: `SHOPS`,
    name: `Где купить?`
  },
  {
    type: `about`,
    link: `ABOUT`,
    name: `О компании`
  },
  {
    type: `services`,
    link: `SERVICES`,
    name: `Cервис-центры`
  },
];

export const RATING_STARS = [1, 2, 3, 4, 5];

export const PAGE_LIMIT = 9;

export const GuitarType = {
  electric: `Электрогитара`,
  acoustic: `Акустическая гитара`,
  uku: `Укулеле`
};

export const PromoType = {
  GITARAHIT: `GITARAHIT`,
  SUPERGITARA: `SUPERGITARA`,
  GITARA2020: `GITARA2020`,
};

export const PromoDiscount = {
  GITARAHIT: 0.1,
  SUPERGITARA: 700,
  GITARA2020: 0.3,
  MAX_DISCOUNT: 3500,
};

export const RADIX = 10;

export const KeyName = {
  ESC: `Escape`
};

export const SortType = {
  NONE: ``,
  BY_PRICE: `byPrice`,
  BY_RATING: `byRating`,
};

export const SortDirection = {
  NONE: ``,
  UP: `up`,
  DOWN: `down`,
};

export const StringQuantity = {
  FOUR: 4,
  SIX: 6,
  SEVEN: 7,
  TWELVE: 12,
};

export const NumberStringForFilter = {
  fourStrings: 4,
  sixStrings: 6,
  sevenStrings: 7,
  twelveStrings: 12,
};

export const FilterByType = {
  ACOUSTIC: `acoustic`,
  ELECTRIC: `electric`,
  UKU: `uku`,
};

export const PAGINATION_DIVIDER = `...`;

export const MAX_ACTIVE_PAGE = 2;

export const MAX_PAGINATION_BUTTON = 3;
