import {Component, OnInit} from '@angular/core';
import * as RouterActions from '../../actions/router.action';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';

/**
 *
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  goToCalendar() {
    this.store.dispatch(new RouterActions.Go({path: ['/calendar']}));
  }

}
