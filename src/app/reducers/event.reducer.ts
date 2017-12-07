import EventModel from '../models/EventModel';
import ActionWithPayload from '../models/ActionWithPayload';

export interface EventState {
  events: EventModel[];
}

export function eventReducer(state: EventState = {events: null}, action: ActionWithPayload) {
  switch (action.type) {
    case 'FETCH_EVENTS':
      return {...state, events: action.payload};
  }
  return state;
}
