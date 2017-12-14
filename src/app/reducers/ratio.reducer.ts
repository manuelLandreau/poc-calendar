import {ActionWithPayload} from '../models/ActionWithPayload';
import {RatioActions} from '../actions/ratio.action';

export interface RatioState {
  totalHours: string;
  currentHours: string;
}

export function ratioReducer(state: RatioState = {
  totalHours: null,
  currentHours: null
}, action: ActionWithPayload) {
  switch (action.type) {
    case RatioActions.LOAD_TOTAL_HOURS:
      return {...state};

    case RatioActions.LOAD_CURRENT_HOURS:
      return {...state};

    case RatioActions.SET_TOTAL_HOURS:
      return {...state, totalHours: action.payload};

    case RatioActions.SET_CURRENT_HOURS:
      return {...state, currentHours: action.payload};
  }
  return state;
}
