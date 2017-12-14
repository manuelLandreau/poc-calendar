import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import EventModel from '../models/EventModel';
import {HttpClient} from '@angular/common/http';

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
      start: new Date('2017-12-11T08:00:00'),
      end: new Date('2017-12-11T10:00:00'),
      color: '#ae3a68',
      className: 'event-from-api',
      rendering: 'background',
      editable: false
    },
    {
      id: 2,
      title: '',
      start: new Date('2017-12-13T08:00:00'),
      end: new Date('2017-12-13T13:00:00'),
      color: '#ff9d6c',
      className: 'event-from-api',
      rendering: 'background',
      editable: false
    },
    {
      id: 3,
      title: '',
      start: new Date('2017-12-12T08:00:00'),
      end: new Date('2017-12-12T09:30:00'),
      color: '#a4e8cb',
      className: 'event-from-api',
      rendering: 'background',
      editable: false
    },
    {
      id: 4,
      title: '',
      start: new Date('2017-12-12T09:30:00'),
      end: new Date('2017-12-12T12:30:00'),
      color: '#ff9d6c',
      className: 'event-from-api',
      rendering: 'background',
      editable: false
    },
    {
      id: 5,
      title: '',
      start: new Date('2017-12-12T14:00:00'),
      end: new Date('2017-12-12T18:00:00'),
      color: 'black',
      className: 'event-from-api',
      rendering: 'background',
      editable: false
    },
    {
      id: 6,
      title: '',
      start: new Date('2017-12-14T09:00:00'),
      end: new Date('2017-12-14T10:15:00'),
      color: '#a4e8cb',
      className: 'event-from-api',
      rendering: 'background',
      editable: false
    },
    {
      id: 7,
      title: '',
      start: new Date('2017-12-14T10:15:00'),
      end: new Date('2017-12-14T12:30:00'),
      color: '#ff9d6c',
      className: 'event-from-api',
      rendering: 'background',
      editable: false
    },
    {
      id: 8,
      title: '',
      start: new Date('2017-12-15T08:30:00'),
      end: new Date('2017-12-15T18:00:00'),
      color: 'black',
      className: 'event-from-api',
      rendering: 'background',
      editable: false
    },
    {
      id: 9,
      title: '',
      start: new Date('2017-12-12T08:00:00'),
      end: new Date('2017-12-12T12:30:00'),
      color: '#304163',
      className: 'event-from-api-valide',
      rendering: '',
      editable: false
    },
    {
      id: 10,
      title: '',
      start: new Date('2017-12-13T08:00:00'),
      end: new Date('2017-12-13T12:30:00'),
      color: '#304163',
      className: 'event-from-api-valide',
      rendering: '',
      editable: false
    },
    {
      id: 11,
      title: '',
      start: new Date('2017-12-15T08:30:00'),
      end: new Date('2017-12-15T11:00:00'),
      color: '#304163',
      className: 'event-from-api-valide',
      rendering: '',
      editable: false
    },
  ];

  /**
   * Contructor
   * @param http
   */
  constructor(private http: HttpClient) {
  }

  /**
   *
   * @returns {any}
   */
  public getEvents(): Observable<EventModel[]> {
    // return this.http.get('api/events');
    return Observable.of(this.data);
  }

  // /**
  //  *
  //  * @returns Observable<EventModel>
  //  */
  // public getEvent(): Observable<EventModel> {
  //   // return this.http.get('api/events');
  // }

  /**
   *
   * @param event
   * @returns Observable<EventModel>
   */
  public addEvent(event: EventModel): Observable<EventModel> {
    // this.http.post('api/events');
    this.data.push(event);
    return Observable.of(event);
  }

  /**
   *
   * @param event
   * @returns Observable<EventModel>
   */
  public updateEvent(event: EventModel): Observable<EventModel> {
    // this.http.put('api/events/id');
    this.data[event.id - 1] = event;
    return Observable.of(event);
  }

  /**
   *
   * @param event
   * @returns Observable<EventModel>
   */
  public deleteEvent(event: EventModel): Observable<EventModel> {
    // this.http.delete('api/events/id');
    this.data.splice(event.id - 1, event.id - 1);
    return Observable.of(event);
  }
}

