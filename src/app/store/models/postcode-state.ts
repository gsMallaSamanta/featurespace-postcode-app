import { HttpErrorResponse } from '@angular/common/http';
import { PostcodeResponsePayload } from './postcode-response-payload';

export interface PostcodeState {
  selectedPostcode: string;
  postcodeDetails: PostcodeResponsePayload;
  nearestPostcodeDetais: PostcodeResponsePayload[],
  errors: HttpErrorResponse;
}

export const initialPostcodeState: PostcodeState = {
  selectedPostcode: '',
  postcodeDetails: null,
  nearestPostcodeDetais: [],
  errors: null
};