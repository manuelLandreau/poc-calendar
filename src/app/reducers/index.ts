import {ratioReducer} from './ratio.reducer';
import {routerReducer} from '@ngrx/router-store';
import {eventReducer} from "./event.reducer";

const reducers = {
  router: routerReducer,
  event: eventReducer,
  ratio: ratioReducer,
};

export default reducers;

