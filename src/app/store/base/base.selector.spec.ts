import { selectBaseState, selectBaseData, selectBaseItems } from './base.selector';
import { BaseState } from './base.reducer';
import {BASE_DATA} from "../../core/data/base.data";

describe('Base Selectors', () => {
  const initialState: BaseState = {
    testCount: 5,
    baseItems: BASE_DATA,
  };

  it('should select the feature state', () => {
    const result = selectBaseState.projector(initialState);
    expect(result).toEqual(initialState);
  });

  it('should select the testCount', () => {
    const result = selectBaseData.projector(initialState);
    expect(result).toEqual(5);
  });

  it('should select the baseItems', () => {
    const result = selectBaseItems.projector(initialState);
    expect(result).toEqual(BASE_DATA);
  });
});
