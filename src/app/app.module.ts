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
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CalendarPageComponent
  ],
  bootstrap: [AppComponent],
  providers: [EventService]
})

export class AppModule {}
