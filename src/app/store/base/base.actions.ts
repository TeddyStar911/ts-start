import { createAction, props } from '@ngrx/store';
import { Base } from '../../core/interfaces/base.interface';

export const homeTestCount = createAction('[Base Action] Home Test Count');
export const baseItemsLoad = createAction('[Base API] Items Load');

export const baseItemsLoaded = createAction(
  '[Base API] Items Loaded Success',
  props<{ baseItems: Base[] }>(),
);
export const baseItemsLoadedError = createAction(
  '[Base API] Items Loaded Error',
);
