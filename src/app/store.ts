import {RouterState} from '@angular/router';
import {ModalState} from './reducers/modal.reducer';
import {EventState} from './reducers/event.reducer';

export interface AppStore {
  router: RouterState;
  modal: ModalState;
  event: EventState;
}
