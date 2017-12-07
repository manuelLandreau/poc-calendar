import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import EventModel from "../models/EventModel";

@Injectable()
export class EventService {

  // Event[] - Fake data
  data: any[] = [
    {
      title: '',
      start: new Date('2017-12-05T14:30:00'),
      end: new Date('2017-12-06T14:00:00'),
      color: '#ae3a68',
      className: 'event-from-api',
      rendering: 'background',
      editable: false
    },
    {
      title: '',
      start: new Date('2017-12-07T08:15:00'),
      end: new Date('2017-12-08T18:00:00'),
      color: '#ff9d6c',
      className: 'event-from-api',
      rendering: 'background',
      editable: false
    },
    {
      title: '',
      start: new Date('2017-12-09T10:45:00'),
      end: new Date('2017-12-10T10:00:00'),
      color: '#a4e8cb',
      className: 'event-from-api',
      rendering: 'background',
      editable: false
    },
    {
      title: '',
      start: new Date('2017-12-10T10:00:00'),
      end: new Date('2017-12-10T18:00:00'),
      color: 'black',
      className: 'event-from-api',
      rendering: 'background',
      editable: false
    },
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

