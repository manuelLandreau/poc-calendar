import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {EventModel} from "../models/EventModel";

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
      start: getCurrentDate() + '-01',
      end: getCurrentDate() + '-02'
    },
    {
      id: 999,
      title: 'Repeating Event',
      start: getCurrentDate()
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

