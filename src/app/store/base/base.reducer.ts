import { createReducer, on } from '@ngrx/store';
import * as BaseAction from './base.actions';
import { Base } from '../../core/interfaces/base.interface';

export const BASE_FEATURE_KEY = 'base';

export interface BaseState {
  testCount: number;
  baseItems: Base[];
}

export const initialState: BaseState = {
  testCount: 0,
  baseItems: [],
};

export const baseReducer = createReducer(
  initialState,
  on(BaseAction.homeTestCount, (state) => ({
    ...state,
    testCount: state.testCount + 1,
  })),
  on(BaseAction.baseItemsLoaded, (state, { baseItems }) => {
    return {
      ...state,
      baseItems,
    };
  }),
);
