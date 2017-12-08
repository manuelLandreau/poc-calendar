import {eventReducer} from './event.reducer';
import {ratioReducer} from './ratio.reducer';
import {routerReducer} from '@ngrx/router-store';

const reducers = {
  router: routerReducer,
  modal: ratioReducer,
  event: eventReducer,
};

export default reducers;

