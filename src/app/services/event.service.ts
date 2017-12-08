import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import EventModel from "../models/EventModel";
import {HttpClient} from "@angular/common/http";

/**
 * EventService
 */
@Injectable()
export class EventService {

  // Fake data
  data: EventModel[] = [
    {
      id: 1,
      title: '',
      start: new Date('2017-12-05T14:30:00'),
      end: new Date('2017-12-06T14:00:00'),
      color: '#ae3a68',
      className: 'event-from-api',
      rendering: 'background',
      editable: false
    },
    {
      id: 2,
      title: '',
      start: new Date('2017-12-07T08:15:00'),
      end: new Date('2017-12-08T18:00:00'),
      color: '#ff9d6c',
      className: 'event-from-api',
      rendering: 'background',
      editable: false
    },
    {
      id: 3,
      title: '',
      start: new Date('2017-12-09T10:45:00'),
      end: new Date('2017-12-10T10:00:00'),
      color: '#a4e8cb',
      className: 'event-from-api',
      rendering: 'background',
      editable: false
    },
    {
      id: 4,
      title: '',
      start: new Date('2017-12-10T10:00:00'),
      end: new Date('2017-12-10T18:00:00'),
      color: 'black',
      className: 'event-from-api',
      rendering: 'background',
      editable: false
    },
  ];

  /**
   * Contructor
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   *
   * @returns {any}
   */
  public getEvents(): Observable<EventModel[]> {
    // return this.http.get('api/events');
    return Observable.of(this.data);
  }

  /**
   *
   * @param event
   */
  public addEvent(event: EventModel): void {
    // this.http.post('api/events');
    this.data.push(event);
  }

  /**
   *
   * @param event
   */
  public updateEvent(event: EventModel): void {
    // this.http.put('api/events/id');
    this.data[event.id -1] = event;
  }

  /**
   *
   * @param event
   */
  public deleteEvent(event: EventModel): void {
    // this.http.delete('api/events/id');
    this.data.splice(event.id -1, event.id -1);
  }
}

