import {LoginComponent} from './pages/login/login.component';
import {CalendarPageComponent} from './pages/calendar/calendar.component';
import {ProfileComponent} from './pages/profile/profile.component';

export const appRoutes = [
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
