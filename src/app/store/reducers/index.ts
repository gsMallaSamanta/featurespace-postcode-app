import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../models/app-state';
import { postcodeReducer } from './postcode-reducers';

export const reducers: ActionReducerMap<AppState, any> = {
  postcode: postcodeReducer
};