import {Action} from '@ngrx/store';

export default class ActionWithPayload implements Action {
  type: string;
  payload?: any;
}
