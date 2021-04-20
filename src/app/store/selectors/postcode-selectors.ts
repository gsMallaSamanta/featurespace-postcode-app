import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostcodeState } from '../models/postcode-state';

export const getPostcodeState = createFeatureSelector<PostcodeState>('postcode');

export const getPostcodeDetails = createSelector(
    getPostcodeState,
    state => state ? state.postcodeDetails : null
);

export const getNearestPostcodeDetails = createSelector(
    getPostcodeState,
    state => state ? state.nearestPostcodeDetais : null
);

export const getPostcodeErrors = createSelector(
    getPostcodeState,
    state => state ? state.errors : null
  );