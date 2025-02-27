import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BASE_FEATURE_KEY, BaseState } from './base.reducer';

export const selectBaseState =
  createFeatureSelector<BaseState>(BASE_FEATURE_KEY);

export const selectBaseData = createSelector(
  selectBaseState,
  (state) => state.testCount,
);
export const selectBaseItems = createSelector(
  selectBaseState,
  (state) => state.baseItems,
);

export const baseQuery = {
  selectBaseData,
  selectBaseItems,
};
