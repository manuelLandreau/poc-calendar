import EventModel from '../models/EventModel';
import ActionWithPayload from '../models/ActionWithPayload';

export interface ModalState {
  events: EventModel[];
}

export function modalReducer(state: ModalState = {events: null}, action: ActionWithPayload) {
  switch (action.type) {
    case 'FETCH_EVENTS':
      return {...state, events: action.payload};
  }
  return state;
}
