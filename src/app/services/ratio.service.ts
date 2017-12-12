import { Injectable } from '@angular/core';
import datetimeDiff from 'datetime-diff';
import EventModel from "../models/EventModel";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {AppState} from "../store";

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
  constructor(private store: Store<AppState>) { }

  /**
   * TODO: Faire un truc plus efficace (calculateTotal)
   * @returns string
   */
  public calculateTotal(): Observable<string> {
    let result = '';
    this.store.select('event', 'eventList').subscribe(data => {
      let mapper = data.filter((event: EventModel) => !event.editable)
        .map((event: EventModel) => datetimeDiff(event.start, event.end))
        .map(total => {
          this.total.hours += Math.floor(total.hours);
          this.total.minutes += total.minutes;
        });
      this.total.hours += Math.floor(this.total.minutes / 60);
      this.total.minutes %= 60;
      result = this.total.hours.toString() + 'h' + (this.total.minutes !== 0 ? this.total.minutes.toString() : '');
    });
    console.log(result);
    return Observable.of(result);
  }

  /**
   * TODO: Faire un truc plus efficace (calculateCurrent)
   * @returns string
   */
  public calculateCurrent(): Observable<string> {
    let result = '';
    this.store.select('event', 'eventList').subscribe(data => {
      let mapper = data.filter((event: EventModel) => event.editable)
        .map((event: EventModel) => datetimeDiff(event.start, event.end))
        .map(current => {
          this.current.hours += Math.floor(current.hours);
          this.current.minutes += current.minutes;
        });
      this.current.hours += Math.floor(this.current.minutes / 60);
      this.current.minutes %= 60;
      result = this.current.hours.toString() + 'h' + (this.current.minutes !== 0 ? this.current.minutes.toString() : '');
    });
    return Observable.of(result);
  }
}
