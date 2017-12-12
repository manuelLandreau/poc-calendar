import {Component, OnInit} from '@angular/core';
import {AppState} from '../../store';
import {Store} from '@ngrx/store';
import * as RouterActions from '../../actions/router.action';

/**
 *
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
  }

  goBack() {
    this.store.dispatch(new RouterActions.Back());
  }
}
