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

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'calendar',
    component: CalendarPageComponent,
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
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CalendarPageComponent
  ],
  entryComponents: [
    ModalComponent
  ],
  bootstrap: [AppComponent],
  providers: [EventService]
})

export class AppModule {}