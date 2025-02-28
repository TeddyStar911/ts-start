import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { BASE_FEATURE_KEY } from './store/base/base.reducer';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>,
): ActionReducer<any> {
  return localStorageSync({
    keys: [BASE_FEATURE_KEY],
    rehydrate: true,
    checkStorageAvailability: true,
  })(reducer);
}

export const metaReducers: MetaReducer<any, any>[] = [localStorageSyncReducer];
