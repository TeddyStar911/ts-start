import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { BaseFacade } from './base.facade';
import * as BaseActions from './base.actions';
import { baseQuery } from './base.selector';
import { Base } from '../../core/interfaces/base.interface';
import {BASE_DATA} from "../../core/data/base.data";

describe('BaseFacade', () => {
  let facade: BaseFacade;
  let store: MockStore;
  const initialState = {
    testCount: 0,
    baseItems: [],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseFacade,
        provideMockStore({ initialState }),
      ],
    });

    store = TestBed.inject(MockStore);
    facade = TestBed.inject(BaseFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should select base data', (done: DoneFn) => {
    store.overrideSelector(baseQuery.selectBaseData, 5);
    facade.base$.subscribe((data) => {
      expect(data).toBe(5);
      done();
    });
  });

  it('should select base items', (done: DoneFn) => {
    const baseItems: Base[] = BASE_DATA;
    store.overrideSelector(baseQuery.selectBaseItems, baseItems);
    facade.baseItems$.subscribe((items) => {
      expect(items).toEqual(baseItems);
      done();
    });
  });

  it('should dispatch homeTestCount action', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    facade.setHome();
    expect(dispatchSpy).toHaveBeenCalledWith(BaseActions.homeTestCount());
  });

  it('should dispatch baseItemsLoad action', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    facade.loadBaseItems();
    expect(dispatchSpy).toHaveBeenCalledWith(BaseActions.baseItemsLoad());
  });
});
