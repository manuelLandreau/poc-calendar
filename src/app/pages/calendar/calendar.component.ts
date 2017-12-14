import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Options} from 'fullcalendar';
import {EventService} from '../../services/event.service';
import {CalendarComponent} from 'ng-fullcalendar';
import EventModel from '../../models/EventModel';
import {EditModalComponent} from '../../components/edit-modal/edit-modal.component';
import {DeleteModalComponent} from '../../components/delete-modal/delete-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RatioService} from '../../services/ratio.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import {EventActions} from '../../actions/event.action';
import * as RouterActions from '../../actions/router.action';
import {RatioActions} from '../../actions/ratio.action';
import {Observable} from 'rxjs/Observable';
import {EventState} from "../../reducers/event.reducer";
import { createSelector } from '@ngrx/store';

/**
 * CalendarPageComponent
 */
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarPageComponent implements OnInit {

  calendarOptions: Options = null;
  totalHours: Observable<string>;
  currentHours: Observable<string>;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  /**
   * Contructor
   * @param eventService
   * @param modalService
   * @param ratioActions
   * @param eventActions
   * @param store
   */
  constructor(protected eventService: EventService,
              private modalService: NgbModal,
              private ratioActions: RatioActions,
              private eventActions: EventActions,
              private store: Store<AppState>) {
    // get all events dispach (ngrx)
    this.store.dispatch(this.eventActions.loadEvents());
  }

  ngOnInit() {
    this.store.select('event', 'eventList').subscribe(events => {

      // Initialisation du ratio des heures
      this.store.dispatch(this.ratioActions.loadTotalHours());
      this.store.dispatch(this.ratioActions.loadCurrentHours());

      // Configuration general cf. doc fullcalendar
      this.calendarOptions = {
        // Cache l'indicateur de la date d'aujourd'hui
        nowIndicator: false,

        // Comparaison provisoire avec l'attribut rendering pour differencier les types d'event
        eventOverlap: stillEvent => stillEvent.rendering === 'background',
        selectOverlap: stillEvent => stillEvent.rendering === 'background',

        // Interval de graduation de l'heure
        slotLabelInterval: '00:15',

        // Drag'n'drop & edition
        editable: true,

        // Reglage du rapport scroll/Draw event
        selectLongPressDelay: 100,
        eventLongPressDelay: 100,
        longPressDelay: 1,

        // Permet la creation d'event
        selectable: true,

        themeSystem: 'standard',
        height: 'auto', // !important
        locale: 'fr',

        header: {
          left: '',
          center: 'prev,title,next',
          right: '', // 'month agendaWeek today'
        },

        defaultView: 'agendaWeek',

        dayNamesShort: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],

        views: {
          agendaWeek: {
            eventLimit: 2,
            titleFormat: 'D MMM YYYY',
            slotDuration: '00:15:00',
            slotLabelFormat: 'H:mm',
            minTime: '08:00:00',
            maxTime: '20:00:00',
            allDaySlot: false,
            columnFormat: 'ddd \n D',
          },
          day: {
            titleFormat: 'MMMM YYYY'
          }
        },

        buttonText: {
          today: 'Aujourd\'hui',
          month: 'Mois',
          week: 'Semaine'
        },

        // Active la vue 'agenda day'
        // dayClick: this.switchDayView,
        select: this.createNewEvent.bind(this),

        // Données du back/api/service
        events // ES6 Synthax
      };

      // Initialise le ratio heures semaine / heures souhaitées
      this.totalHours = this.store.select('ratio', 'totalHours');
      this.currentHours = this.store.select('ratio', 'currentHours');
    });
  }

  /**
   * calendarOptions select callback
   * @param start
   * @param end
   * @param jsEvent
   * @param view
   */
  createNewEvent(start, end, jsEvent, view) {
    if (view.name === 'agendaWeek') {
      let newEvent: EventModel;
      newEvent = new EventModel('choix', new Date(start._d));
      newEvent.end = new Date(end._d);

      // heure - 1 parceque décalage
      newEvent.start.setHours(newEvent.start.getHours() - 1);
      newEvent.end.setHours(newEvent.end.getHours() - 1);

      newEvent.color = '#97a0b1';
      newEvent.className = 'event-souhait';
      newEvent.editable = true;

      // Déclenchement de la modal de validation heures
      this.openModal(EditModalComponent, newEvent, 'edit');
    } else return;
  }

  /**
   *
   * @param date
   * @param allDay
   */
  switchDayView(date, allDay) {
    if (allDay) {
      const dayDate = new Date(date._i);
      // Clicked to the entire day
      this.ucCalendar.fullCalendar('changeView', 'agendaDay'/* or 'basicDay' */);
      this.ucCalendar.fullCalendar('gotoDate', dayDate.getFullYear(), dayDate.getMonth(), dayDate.getDate());
    }
  }

  /**
   * Permet une action après un clic sur un event (ici ouvir la popup de suppression)
   * @param event: EventModel
   */
  eventClick(event) {
    this.openModal(DeleteModalComponent, event, 'delete');
  }

  /**
   *
   * @param event
   */
  updateEvent(event: EventModel) {
    this.eventService.updateEvent(event);
  }

  /**
   *
   * @param modal
   * @param event
   * @param type
   */
  openModal(modal, event, type): void {
    const modalRef = this.modalService.open(modal);
    modalRef.componentInstance.event = event;
    modalRef.result.then(editedEvent => {
      if (type === 'edit') {
        this.ucCalendar.fullCalendar('renderEvent', editedEvent, true);
        this.eventService.addEvent(editedEvent);
        // Refresh Ratio
        this.store.dispatch(this.ratioActions.loadCurrentHours());
      } else if (type === 'delete') {
        this.ucCalendar.fullCalendar('removeEvents', event._id);
        this.eventService.deleteEvent(event);
        // Refresh Ratio
        this.store.dispatch(this.ratioActions.loadCurrentHours());
      }
    });
  }

  goToProfile() {
    this.store.dispatch(new RouterActions.Go({path: ['/profile']}));
  }
}
