import { PostcodeActions, PostcodeActionTypes } from '../actions/postcode-actions';
import { initialPostcodeState, PostcodeState } from '../models/postcode-state';

export function postcodeReducer(
  state: PostcodeState = initialPostcodeState,
  action: PostcodeActions
): PostcodeState {
  switch (action.type) {
    case PostcodeActionTypes.GetPostcodeDetails:
      return {
        ...state,
        selectedPostcode: action.payload,
        errors: null
      };

    case PostcodeActionTypes.GetPostcodeDetailsSuccess:
      return {
        ...state,
        postcodeDetails: action.payload,
        errors: null
      };

    case PostcodeActionTypes.GetPostcodeDetailsFailure:
      return {
        ...state,
        errors: action.payload
      };

    case PostcodeActionTypes.GetNearestPostcodeDetails:
      return {
        ...state,
        selectedPostcode: action.payload,
        errors: null
      };
  
    case PostcodeActionTypes.GetNearestPostcodeDetailsSuccess:
      return {
        ...state,
        nearestPostcodeDetais: action.payload,
        errors: null
      };
  
    case PostcodeActionTypes.GetNearestPostcodeDetailsFailure:
      return {
        ...state,
        errors: action.payload
      };

    default:
      return state;

  }
}