import {Routes} from "@angular/router";
import {LoginComponent} from "./pages/login/login.component";
import {CalendarPageComponent} from "./pages/calendar/calendar.component";
import {ProfileComponent} from "./pages/profile/profile.component";

export const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'calendar',
    component: CalendarPageComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];
