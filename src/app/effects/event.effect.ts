import {Injectable} from '@angular/core';
import {EventActions} from '../actions/event.action';
import {EventService} from "../services/event.service";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ActionWithPayload} from '../models/ActionWithPayload';

@Injectable()
export class EventEffects {

  constructor (
    private actions$: Actions<ActionWithPayload>,
    private eventActions: EventActions,
    private eventService: EventService
  ) {}

  @Effect() loadEvents$: Observable<ActionWithPayload> = this.actions$
    .ofType(EventActions.LOAD_EVENTS)
    .switchMap(() => this.eventService.getEvents())
    .switchMap(events => Observable.of(this.eventActions.loadEventsSuccess(events)));
    // .catch(err => Observable.of(this.eventActions.loadEventsFailed(err)));

  // @Effect() saveEvent$: Observable<ActionWithPayload> = this.actions$
  //   .ofType(EventActions.SAVE_EVENT)
  //   .map(update => update.payload)
  //   .switchMap(event => this.eventService.addEvent(event))
  //   .map(event => this.eventActions.saveEventSuccess(event));
  //
  // @Effect() addEvent$: Observable<ActionWithPayload> = this.actions$
  //   .ofType(EventActions.ADD_EVENT)
  //   .map(update => update.payload)
  //   .switchMap(event => this.eventService.addEvent(event))
  //   .map(event => this.eventActions.addEventSuccess(event));
  //
  // @Effect() deleteEvent$: Observable<ActionWithPayload> = this.actions$
  //   .ofType(EventActions.DELETE_EVENT)
  //   .map(update => update.payload)
  //   .switchMap(event => this.eventService.deleteEvent(event))
  //   .map(event => this.eventActions.deleteEventSuccess(event));
}
