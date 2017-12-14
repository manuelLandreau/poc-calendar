import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {FullCalendarModule} from 'ng-fullcalendar';
import {AppComponent} from './components/app.component';
import {EventService} from './services/event.service';
import {LoginComponent} from './pages/login/login.component';
import {RouterModule} from '@angular/router';
import {CalendarPageComponent} from './pages/calendar/calendar.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ActionReducer, MetaReducer, StoreModule} from '@ngrx/store';
import {reducers} from './reducers/index';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DeleteModalComponent} from './components/delete-modal/delete-modal.component';
import {EditModalComponent} from './components/edit-modal/edit-modal.component';
import {RatioComponent} from './components/ratio/ratio.component';
import {HttpClientModule} from '@angular/common/http';
import {appRoutes} from './routes';
import {RatioService} from './services/ratio.service';
import {EventActions} from './actions/event.action';
import {EventEffects} from './effects/event.effect';
import {EffectsModule} from '@ngrx/effects';
import {RatioActions} from './actions/ratio.action';
import {RatioEffects} from './effects/ratio.effect';
import {RouterEffects} from './effects/router.effect';

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  }
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule,
    NgbModule.forRoot(),
    StoreModule.forRoot(reducers, {metaReducers}),
    RouterModule.forRoot(appRoutes),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([
      EventEffects,
      RatioEffects,
      RouterEffects
    ]),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25
    // })
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    CalendarPageComponent,
    DeleteModalComponent,
    EditModalComponent,
    RatioComponent,
  ],
  entryComponents: [
    DeleteModalComponent,
    EditModalComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    EventService,
    EventActions,
    RatioService,
    RatioActions
  ]
})

export class AppModule {
}
