import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {FullCalendarModule} from 'ng-fullcalendar';
import {AppComponent} from './components/app.component';
import {EventService} from './services/event.service';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarPageComponent } from './pages/calendar/calendar.component';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import {ModalComponent} from './components/modal/modal.component';
import {ModalDateComponent} from './components/modal/modal-date.component';
import { ProfileComponent } from './pages/profile/profile.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  { path: 'calendar',
    component: CalendarPageComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
},
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FullCalendarModule,
    BootstrapModalModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    ModalComponent,
    ModalDateComponent,
    LoginComponent,
    ProfileComponent,
    CalendarPageComponent,
  ],
  entryComponents: [
    ModalComponent,
    ModalDateComponent
  ],
  bootstrap: [AppComponent],
  providers: [EventService]
})

export class AppModule {}
