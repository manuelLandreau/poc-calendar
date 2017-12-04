import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {EventModel} from '../models/EventModel';

// Placer dans utils/dateUtils.ts par exemple
// renommer
function getCurrentDate(): string {
  const dateObj = new Date();
  return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
}

@Injectable()
export class EventService {

  data: any = [
    {
      title: 'Long Event',
      start: new Date('2017-12-05T14:45:48'),
      end: new Date('2017-12-06T14:00:48'),
      color: '',
      className: 'event-from-api'
    },
    {
      id: 999,
      title: 'Repeating Event',
      start: getCurrentDate(),
      color: '',
      className: 'event-from-api'
    }
  ];

  public getEvents(): Observable<any> {
    return Observable.of(this.data);
  }

  public addEvent(event: EventModel): void {
    this.data.push(event.start); // todo
  }

  public updateEvent(event: EventModel): void {
    this.data.push(event.start); // todo
  }

  public deleteEvent(event: EventModel): void {
    this.data.push(event.start); // todo
  }
}

