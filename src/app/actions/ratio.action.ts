import ActionWithPayload from "../models/ActionWithPayload";
import {Time} from "@angular/common";
import {EventService} from "../services/event.service";
import {datetimeDiff} from 'datetime-diff';

export class RatioAction {

  static SET_TOTAL_HOURS = 'SET_TOTAL_HOURS';
  static SET_CURRENT_HOURS = 'SET_CURRENT_HOURS';

  // static setTotalHours(): ActionWithPayload {
  //   let totalHours: {hours: 0, minutes: 0};
  //   EventService.getEvents().subscribe(events => {
  //     const mapper = events.map(event => datetimeDiff(event.start, event.end))
  //       .map(event => {
  //         totalHours.hours += event.hours;
  //         totalHours.minutes += event.minutes;
  //       });
  //   });
  //   return {
  //     type: RatioAction.SET_TOTAL_HOURS,
  //     payload: totalHours
  //   };
  // }

  static setCurrentHours(currentHours: Time): ActionWithPayload {
    return {
      type: RatioAction.SET_CURRENT_HOURS,
      payload: currentHours
    };
  }
}
