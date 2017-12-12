import {ActionWithPayload} from '../models/ActionWithPayload';
import {Injectable} from '@angular/core';

@Injectable()
export class EventActions {

  constructor() {}

  static LOAD_EVENTS = 'LOAD_EVENTS';
  loadEvents(): ActionWithPayload {
    return {
      type: EventActions.LOAD_EVENTS
    };
  }

  static LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS';
  loadEventsSuccess(events): ActionWithPayload {
    return {
      type: EventActions.LOAD_EVENTS_SUCCESS,
      payload: events
    };
  }

  static LOAD_EVENTS_FAILED = 'LOAD_EVENTS_FAILED';
  loadEventsFailed(errors): ActionWithPayload {
    return {
      type: EventActions.LOAD_EVENTS_FAILED,
      payload: errors
    };
  }

  static GET_EVENT = 'GET_EVENT';
  getEvent(id): ActionWithPayload {
    return {
      type: EventActions.GET_EVENT,
      payload: id
    };
  }

  static GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
  getEventsSuccess(event): ActionWithPayload {
    return {
      type: EventActions.GET_EVENTS_SUCCESS,
      payload: event
    };
  }

  static RESET_BLANK_EVENT = 'RESET_BLANK_EVENT';
  resetBlankEvent(): ActionWithPayload {
    return {
      type: EventActions.RESET_BLANK_EVENT
    };
  }

  static SAVE_EVENT = 'SAVE_EVENT';
  saveEvent(event): ActionWithPayload {
    return {
      type: EventActions.SAVE_EVENT,
      payload: event
    };
  }

  static SAVE_EVENT_SUCCESS = 'SAVE_EVENT_SUCCESS';
  saveEventSuccess(event): ActionWithPayload {
    return {
      type: EventActions.SAVE_EVENT_SUCCESS,
      payload: event
    };
  }

  static ADD_EVENT = 'ADD_EVENT';
  addEvent(event): ActionWithPayload {
    return {
      type: EventActions.ADD_EVENT,
      payload: event
    };
  }

  static ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
  addEventSuccess(event): ActionWithPayload {
    return {
      type: EventActions.ADD_EVENT_SUCCESS,
      payload: event
    };
  }

  static DELETE_EVENT = 'DELETE_EVENT';
  deleteEvent(event): ActionWithPayload {
    return {
      type: EventActions.DELETE_EVENT,
      payload: event
    };
  }

  static DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS';
  deleteEventSuccess(event): ActionWithPayload {
    return {
      type: EventActions.DELETE_EVENT_SUCCESS,
      payload: event
    };
  }
}
