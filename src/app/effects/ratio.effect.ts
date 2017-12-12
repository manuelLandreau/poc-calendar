import {Injectable} from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ActionWithPayload} from '../models/ActionWithPayload';
import {RatioActions} from "../actions/ratio.action";
import {RatioService} from "../services/ratio.service";

@Injectable()
export class RatioEffects {

  constructor(private actions$: Actions<ActionWithPayload>,
              private ratioService: RatioService,
              private ratioActions: RatioActions) {
  }

  @Effect() loadTotalRatio$: Observable<ActionWithPayload> = this.actions$
    .ofType(RatioActions.LOAD_TOTAL_HOURS)
    .switchMap(() => {
    console.log('test test ');
    return this.ratioService.calculateTotal()
    })
    .switchMap(total => Observable.of(this.ratioActions.setTotalHours(total)));

  @Effect() loadCurrentRatio$: Observable<ActionWithPayload> = this.actions$
    .ofType(RatioActions.LOAD_CURRENT_HOURS)
    .switchMap(() => this.ratioService.calculateCurrent())
    .switchMap(total => Observable.of(this.ratioActions.setCurrentHours(total)));
}
