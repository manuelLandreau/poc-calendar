import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {FullCalendarModule} from 'ng-fullcalendar';
import {AppComponent} from './components/app.component';
import {EventService} from './services/event.service';
import {LoginComponent} from './pages/login/login.component';
import {RouterModule} from '@angular/router';
import {CalendarPageComponent} from './pages/calendar/calendar.component';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import {ProfileComponent} from './pages/profile/profile.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import reducers from './reducers/index';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DeleteModalComponent} from './components/delete-modal/delete-modal.component';
import {EditModalComponent} from './components/edit-modal/edit-modal.component';
import { RatioComponent } from './components/ratio/ratio.component';
import {HttpClientModule} from '@angular/common/http';
import {appRoutes} from './routes';
import {RatioService} from "./services/ratio.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule,
    NgbModule.forRoot(),
    BootstrapModalModule,
    StoreModule.forRoot(reducers),
    RouterModule.forRoot(appRoutes),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
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
    RatioService
  ]
})

export class AppModule {
}
