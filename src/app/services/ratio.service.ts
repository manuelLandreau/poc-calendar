import {Injectable} from '@angular/core';
import datetimeDiff from 'datetime-diff';
import EventModel from '../models/EventModel';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {EventState} from "../reducers/event.reducer";
import {AppState} from "../store";

/**
 * RatioService
 */
@Injectable()
export class RatioService {

  /**
   * Constructor
   */
  constructor(private store: Store<AppState>) {
  }

  /**
   *
   * @returns Observable<string>
   */
  public calculateTotal(): Observable<string> {
    let result = '';
    let hours = 0;
    let minutes = 0;
    this.store.select('event', 'eventList').subscribe(data => {
      data
        .filter((event: EventModel) => event.rendering === 'background')
        .map((event: EventModel) => minutes += datetimeDiff(event.start, event.end).minutes);

      hours += Math.floor(minutes / 60);
      minutes %= 60;
      result = hours.toString() + 'h' + (minutes !== 0 ? minutes.toString() : '');
    });
    return Observable.of(result);
  }

  /**
   *
   * @returns Observable<string>
   */
  public calculateCurrent(): Observable<string> {
    let result = '';
    let hours = 0;
    let minutes = 0;
    this.store.select('event', 'eventList').subscribe(data => {
      data
        .filter((event: EventModel) => event.rendering !== 'background')
        .map((event: EventModel) => minutes += datetimeDiff(event.start, event.end).minutes);

      hours += Math.floor(minutes / 60);
      minutes %= 60;
      result = hours.toString() + 'h' + (minutes !== 0 ? minutes.toString() : '');
    });
    return Observable.of(result);
  }
}
