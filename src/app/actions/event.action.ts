import ActionWithPayload from "../models/ActionWithPayload";
import {EventSourceModel} from "../models/EventSourceModel";

export class EventAction {

  static FETCH_EVENTS = 'FETCH_EVENTS';

  static fetchEventSource(events: EventSourceModel): ActionWithPayload {
    return {
      type: EventAction.FETCH_EVENTS,
      payload: events
    };
  }
}
