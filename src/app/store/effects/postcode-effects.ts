import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { PostcodeService } from 'src/app/services/postcode.service';
import { 
    GetPostcodeFailure, 
    GetPostcodeSuccess, 
    GetNearestPostcodeSuccess,
    GetNearestPostcodeFailure,
    PostcodeActions, 
    PostcodeActionTypes, 
    GetNearestPostcode} from '../actions/postcode-actions';

@Injectable()
export class PostcodeEffects {
  constructor(
    private readonly actions$: Actions<PostcodeActions>,
    private readonly service: PostcodeService,
  ) {}

  @Effect()
  postcodeDetails$ = this.actions$.pipe(
    ofType(PostcodeActionTypes.GetPostcodeDetails),
    mergeMap(action =>
      this.service.getPostcodeDetails(action.payload).pipe(
        concatMap(response => [
          new GetPostcodeSuccess(response.result),
          new GetNearestPostcode(action.payload)
        ]),
        catchError(error => of(new GetPostcodeFailure(error)))
      )
    )
  )

  @Effect()
  nearestPostcodeDetails$ = this.actions$.pipe(
    ofType(PostcodeActionTypes.GetNearestPostcodeDetails),
    mergeMap(action =>
      this.service.getNearestPostcodeDetails(action.payload).pipe(
        map(response => new GetNearestPostcodeSuccess(response.result)),
        catchError(error => of(new GetNearestPostcodeFailure(error)))
      )
    )
  )
}