import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { PostcodeResponsePayload } from '../models/postcode-response-payload';

export enum PostcodeActionTypes {
  GetPostcodeDetails = '[Postcode] Get Postcode',
  GetPostcodeDetailsSuccess = '[Postcode] Get Postcode Success',
  GetPostcodeDetailsFailure = '[Postcode] Get Postcode Failure',

  GetNearestPostcodeDetails = '[Postcode] Get Nearest Postcode',
  GetNearestPostcodeDetailsSuccess = '[Postcode] Get Nearest Postcode Success',
  GetNearestPostcodeDetailsFailure = '[Postcode] Get Nearest Postcode Failure',
}

export class GetPostcode implements Action {
  readonly type = PostcodeActionTypes.GetPostcodeDetails;

  constructor(public payload: string) {}
}

export class GetPostcodeSuccess implements Action {
  readonly type = PostcodeActionTypes.GetPostcodeDetailsSuccess;

  constructor(public payload: PostcodeResponsePayload) {}
}

export class GetPostcodeFailure implements Action {
  readonly type = PostcodeActionTypes.GetPostcodeDetailsFailure;

  constructor(public payload: HttpErrorResponse) {}
}

export class GetNearestPostcode implements Action {
  readonly type = PostcodeActionTypes.GetNearestPostcodeDetails;

  constructor(public payload: string) {}
}

export class GetNearestPostcodeSuccess implements Action {
  readonly type = PostcodeActionTypes.GetNearestPostcodeDetailsSuccess;

  constructor(public payload: PostcodeResponsePayload[]) {}
}

export class GetNearestPostcodeFailure implements Action {
  readonly type = PostcodeActionTypes.GetNearestPostcodeDetailsFailure;

  constructor(public payload: HttpErrorResponse) {}
}

export type PostcodeActions =
 | GetPostcode
 | GetPostcodeSuccess
 | GetPostcodeFailure
 | GetNearestPostcode
 | GetNearestPostcodeSuccess
 | GetNearestPostcodeFailure;