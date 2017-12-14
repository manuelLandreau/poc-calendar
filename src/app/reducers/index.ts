import {ratioReducer} from './ratio.reducer';
import {routerReducer} from '@ngrx/router-store';
import {eventReducer} from "./event.reducer";

export const reducers = {
  router: routerReducer,
  event: eventReducer,
  ratio: ratioReducer,
};

