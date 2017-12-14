import {RouterState} from '@angular/router';
import {RatioState} from './reducers/ratio.reducer';
import {EventState} from './reducers/event.reducer';

export interface AppState {
  router: RouterState;
  event: EventState;
  ratio: RatioState;
}
