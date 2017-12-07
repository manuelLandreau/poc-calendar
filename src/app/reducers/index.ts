import {eventReducer} from './event.reducer';
import {modalReducer} from './modal.reducer';
import {routerReducer} from '@ngrx/router-store';

const reducers = {
  router: routerReducer,
  modal: modalReducer,
  event: eventReducer,
};

export default reducers;

