import {ActionWithPayload} from '../models/ActionWithPayload';
import {datetimeDiff} from 'datetime-diff';
import {Injectable} from '@angular/core';

@Injectable()
export class RatioActions {

  static LOAD_TOTAL_HOURS = 'LOAD_TOTAL_HOURS';
  static LOAD_CURRENT_HOURS = 'LOAD_CURRENT_HOURS';
  static SET_TOTAL_HOURS = 'SET_TOTAL_HOURS';
  static SET_CURRENT_HOURS = 'SET_CURRENT_HOURS';

  constructor() {
  }

  loadTotalHours(): ActionWithPayload {
    return {
      type: RatioActions.LOAD_TOTAL_HOURS
    };
  }

  loadCurrentHours(): ActionWithPayload {
    return {
      type: RatioActions.LOAD_CURRENT_HOURS
    };
  }

  setTotalHours(total): ActionWithPayload {
    return {
      type: RatioActions.SET_TOTAL_HOURS,
      payload: total
    };
  }

  setCurrentHours(current): ActionWithPayload {
    return {
      type: RatioActions.SET_CURRENT_HOURS,
      payload: current
    };
  }
}
