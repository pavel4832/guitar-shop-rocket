export const AppRoute = {
  ROOT: `/`,
  BASKET: `/basket`,
  SHOPS: `/shops`,
  ABOUT: `/about`,
  SERVICES: `/services`,
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
