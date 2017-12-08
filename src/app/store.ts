import {RouterState} from '@angular/router';
import {RatioState} from './reducers/ratio.reducer';
import {EventState} from './reducers/event.reducer';

export interface AppStore {
  router: RouterState;
  modal: RatioState;
  event: EventState;
}
