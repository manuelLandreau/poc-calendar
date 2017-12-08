import { Injectable } from '@angular/core';
import datetimeDiff from 'datetime-diff';
import EventModel from "../models/EventModel";

/**
 * RatioService
 */
@Injectable()
export class RatioService {

  total = {hours: 0, minutes: 0};
  current = {hours: 0, minutes: 0};

  /**
   * Constructor
   */
  constructor() { }

  /**
   *
   * @returns string
   */
  public calculateTotal(data: Array<EventModel>): string {
      let mapper = data.filter((event: EventModel) => !event.editable)
        .map((event: EventModel) => datetimeDiff(event.start, event.end))
        .map(total => {
          this.total.hours += total.hours;
          this.total.minutes += total.minutes;
        });
      this.total.hours += Math.floor(this.total.minutes / 60);
      this.total.minutes %= 60;
      return this.total.hours.toString() + 'h' + (this.total.minutes !== 0 ? this.total.minutes.toString() : '');
  }

  /**
   *
   * @returns string
   */
  public calculateCurrent(data: Array<EventModel>): string {
    let mapper = data.filter((event: EventModel) => event.editable)
      .map((event: EventModel) => datetimeDiff(event.start, event.end))
      .map(current => {
        this.current.hours += current.hours;
        this.current.minutes += current.minutes;
      });
    this.current.hours += this.current.minutes / 60;
    this.current.minutes %= 60;
    return this.current.hours.toString() + 'h' + (this.current.minutes !== 0 ? this.current.minutes.toString() : '');
  }
}
