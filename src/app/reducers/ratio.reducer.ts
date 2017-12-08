import ActionWithPayload from '../models/ActionWithPayload';
import {Time} from '@angular/common';
import {RatioAction} from "../actions/ratio.action";

export interface RatioState {
  totalHours;
  currentHours;
}

export function ratioReducer(state: RatioState = {
  totalHours: {hours: 0, minutes: 0},
  currentHours: {hours: 0, minutes: 0}
  }, action: ActionWithPayload) {
  switch (action.type) {
    case RatioAction.SET_TOTAL_HOURS:
      return {...state, totalHours: action.payload};

    case RatioAction.SET_CURRENT_HOURS:
      return {...state, currentHours: action.payload};
  }
  return state;
}
