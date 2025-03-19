import { baseReducer, initialState } from './base.reducer';
import * as BaseAction from './base.actions';
import { Base } from '../../core/interfaces/base.interface';
import {BASE_DATA} from "../../core/data/base.data";

describe('BaseReducer', () => {
  it('should return the initial state', () => {
    const state = baseReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  it('should increment testCount on homeTestCount action', () => {
    const action = BaseAction.homeTestCount();
    const state = baseReducer(initialState, action);
    expect(state.testCount).toBe(1);
  });

  it('should load baseItems on baseItemsLoaded action', () => {
    const baseItems: Base[] = BASE_DATA;
    const action = BaseAction.baseItemsLoaded({ baseItems });
    const state = baseReducer(initialState, action);
    expect(state.baseItems).toEqual(baseItems);
  });
});
