import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {redirectToRoute, setBasket} from '../../store/actions';
import {AppRoute} from "../../const";

const BasketIcon = () => {
  const {inBasket} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(setBasket(true));
    dispatch(redirectToRoute(AppRoute.BASKET));
  };

  return (
    <a href="#" className="side-menu__link link basket-icon" onClick={onClickHandler}>
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.3798 6.59316C14.3329 6.5283 14.2746 6.47622 14.209 6.44052C14.1434 6.40482 14.072 6.38633 13.9998 6.38634H10.9998V4.02272C10.9998 3.55256 10.8418 3.10167 10.5605 2.76922C10.2792 2.43677 9.89763 2.25 9.4998 2.25H6.4998C6.10198 2.25 5.72045 2.43677 5.43914 2.76922C5.15784 3.10167 4.9998 3.55256 4.9998 4.02272V6.38634H1.9998C1.92733 6.38537 1.85554 6.40303 1.78941 6.43811C1.72328 6.47318 1.6644 6.52483 1.61684 6.58947C1.56928 6.65411 1.53418 6.73019 1.51397 6.81246C1.49376 6.89472 1.48893 6.98119 1.4998 7.06588L2.4398 14.2454C2.47596 14.5272 2.59709 14.7841 2.78085 14.9687C2.96461 15.1533 3.19864 15.2531 3.4398 15.2499H12.5698C12.811 15.2531 13.045 15.1533 13.2288 14.9687C13.4125 14.7841 13.5336 14.5272 13.5698 14.2454L14.4998 7.06588C14.5098 6.98152 14.5043 6.8956 14.4836 6.814C14.4629 6.73241 14.4275 6.65707 14.3798 6.59316ZM5.9998 4.02272C5.9998 3.866 6.05248 3.7157 6.14625 3.60488C6.24002 3.49407 6.36719 3.43181 6.4998 3.43181H9.4998C9.63241 3.43181 9.75959 3.49407 9.85336 3.60488C9.94712 3.7157 9.9998 3.866 9.9998 4.02272V6.38634H5.9998V4.02272ZM12.5698 14.0681H3.4298L2.5848 7.56815H13.4148L12.5698 14.0681Z" fill="currentColor"/>
      </svg>
      <span className="basket-icon__text">{(inBasket === 0) ? `` : inBasket}</span>
    </a>
  );
};

export default BasketIcon;