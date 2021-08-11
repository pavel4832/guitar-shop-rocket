import * as actions from '../actions';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  menuType: ``,
};

const DATA = createReducer(initialState, (builder) => {
  builder.addCase(actions.changeMenu, (state, action) => {
    return {
      ...state,
      menuType: action.payload,
    };
  });
});

export {DATA};
