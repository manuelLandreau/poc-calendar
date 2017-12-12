import EventModel from '../models/EventModel';
import {ActionWithPayload} from '../models/ActionWithPayload';
import {EventActions} from "../actions/event.action";

export type EventState = {
  eventList: EventModel[],
  errors: any
};

const initialState = {
  eventList: [],
  errors: null
};

export function eventReducer(state = initialState, action: ActionWithPayload) {
  switch (action.type) {
    case EventActions.LOAD_EVENTS:
      return {...state};

    case EventActions.LOAD_EVENTS_SUCCESS:
      return {...state, eventList: action.payload};

    case EventActions.LOAD_EVENTS_FAILED:
      return {...state, errors: action.payload};
  }
  return state;
}
