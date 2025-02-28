import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromBase from './base.reducer';
import * as BaseActions from './base.actions';
import { baseQuery } from './base.selector';
import { Observable } from 'rxjs';
import { Base } from '../../core/interfaces/base.interface';

@Injectable()
export class BaseFacade {
  base$: Observable<number>;
  baseItems$: Observable<Base[]>;
  constructor(protected store: Store<fromBase.BaseState>) {
    this.store = store;
    this.base$ = this.store.select(baseQuery.selectBaseData);
    this.baseItems$ = this.store.select(baseQuery.selectBaseItems);
  }

  setHome(): void {
    this.store.dispatch(BaseActions.homeTestCount());
  }

  loadBaseItems(): void {
    this.store.dispatch(BaseActions.baseItemsLoad());
  }
}
