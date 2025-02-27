import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { BaseService } from '../core/services/base/base.service';
import * as BaseActions from './base.actions';

@Injectable()
export class BaseEffects {
  private actions$ = inject(Actions);
  private baseService = inject(BaseService);

  loadBaseItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BaseActions.baseItemsLoad),
      exhaustMap(() =>
        this.baseService.getAll().pipe(
          map((items) => BaseActions.baseItemsLoaded({ baseItems: items })),
          catchError(() => of(BaseActions.baseItemsLoadedError())),
        ),
      ),
    ),
  );
}
