import {ActionWithPayload} from '../models/ActionWithPayload';
import {Injectable} from '@angular/core';

@Injectable()
export class EventActions {

  static LOAD_EVENTS = 'LOAD_EVENTS';
  static LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS';
  static LOAD_EVENTS_FAILED = 'LOAD_EVENTS_FAILED';
  static GET_EVENT = 'GET_EVENT';
  static GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
  static SAVE_EVENT = 'SAVE_EVENT';
  static SAVE_EVENT_SUCCESS = 'SAVE_EVENT_SUCCESS';
  static ADD_EVENT = 'ADD_EVENT';
  static ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
  static DELETE_EVENT = 'DELETE_EVENT';
  static DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS';

  loadEvents(): ActionWithPayload {
    return {
      type: EventActions.LOAD_EVENTS
    };
  }

  loadEventsSuccess(events): ActionWithPayload {
    return {
      type: EventActions.LOAD_EVENTS_SUCCESS,
      payload: events
    };
  }

  loadEventsFailed(errors): ActionWithPayload {
    return {
      type: EventActions.LOAD_EVENTS_FAILED,
      payload: errors
    };
  }

  getEvent(id): ActionWithPayload {
    return {
      type: EventActions.GET_EVENT,
      payload: id
    };
  }

  getEventsSuccess(event): ActionWithPayload {
    return {
      type: EventActions.GET_EVENTS_SUCCESS,
      payload: event
    };
  }

  saveEvent(event): ActionWithPayload {
    return {
      type: EventActions.SAVE_EVENT,
      payload: event
    };
  }

  saveEventSuccess(event): ActionWithPayload {
    return {
      type: EventActions.SAVE_EVENT_SUCCESS,
      payload: event
    };
  }

  addEvent(event): ActionWithPayload {
    return {
      type: EventActions.ADD_EVENT,
      payload: event
    };
  }

  addEventSuccess(event): ActionWithPayload {
    return {
      type: EventActions.ADD_EVENT_SUCCESS,
      payload: event
    };
  }

  deleteEvent(event): ActionWithPayload {
    return {
      type: EventActions.DELETE_EVENT,
      payload: event
    };
  }

  deleteEventSuccess(event): ActionWithPayload {
    return {
      type: EventActions.DELETE_EVENT_SUCCESS,
      payload: event
    };
  }
}
