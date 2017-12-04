import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {FullCalendarModule} from 'ng-fullcalendar';
import {AppComponent} from './components/app.component';
import {EventService} from './services/event.service';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarPageComponent } from './pages/calendar/calendar.component';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import {ModalComponent} from './components/modal/modal.component';
import {ModalDateComponent} from "./components/modal/modal-date.component";
import { ProfileComponent } from './pages/monCompte/profile.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'calendar',
    component: CalendarPageComponent,
  },
  {
    path: 'monCompte',
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
    HeaderComponent,
    FooterComponent,
    HomeComponent,
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
