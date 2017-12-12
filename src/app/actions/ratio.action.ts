import {ActionWithPayload} from '../models/ActionWithPayload';
import {datetimeDiff} from 'datetime-diff';
import {Injectable} from '@angular/core';

@Injectable()
export class RatioActions {

  constructor() { }

  static LOAD_TOTAL_HOURS = 'LOAD_TOTAL_HOURS';
  loadTotalHours(): ActionWithPayload {
    return {
      type: RatioActions.LOAD_TOTAL_HOURS
    };
  }

  static LOAD_CURRENT_HOURS = 'LOAD_CURRENT_HOURS';
  loadCurrentHours(): ActionWithPayload {
    return {
      type: RatioActions.LOAD_CURRENT_HOURS
    };
  }

  static SET_TOTAL_HOURS = 'SET_TOTAL_HOURS';
  setTotalHours(total): ActionWithPayload {
    return {
      type: RatioActions.SET_TOTAL_HOURS,
      payload: total
    };
  }

  static SET_CURRENT_HOURS = 'SET_CURRENT_HOURS';
  setCurrentHours(current): ActionWithPayload {
    return {
      type: RatioActions.SET_CURRENT_HOURS,
      payload: current
    };
  }
}
