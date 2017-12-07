import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Options} from 'fullcalendar';
import {EventService} from '../../services/event.service';
import {CalendarComponent} from 'ng-fullcalendar';
import datetimeDiff from 'datetime-diff';
import EventModel from '../../models/EventModel';
import {EditModalComponent} from "../../components/edit-modal/edit-modal.component";
import {DeleteModalComponent} from "../../components/delete-modal/delete-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarPageComponent implements OnInit {

  calendarOptions: Options;
  displayEvent: any;
  weekHours: 0;
  wishHours: 0;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(protected eventService: EventService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      this.calendarOptions = {
        // Cache l'indicateur de la date d'aujourd'hui
        nowIndicator: false,

        eventOverlap: stillEvent => !stillEvent.editable,
        selectOverlap: (stillEvent) => !stillEvent.editable,

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

        // Pas de bootstrap 4 - choix: standard, bootstrap3, jquery-ui
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

        // Active la vue "agenda day"
        // dayClick: this.switchDayView,
        select: (start, end, jsEvent, view) => {
          let newEvent: EventModel;

          if (view.name === 'agendaWeek') {
            newEvent = new EventModel('choix', new Date(start._d));
            newEvent.end = new Date(end._d);

            // heure - 1 parceque decalage
            newEvent.start.setHours(newEvent.start.getHours() - 1);
            newEvent.end.setHours(newEvent.end.getHours() - 1);

            newEvent.color = '#97a0b1';
            newEvent.className = 'event-souhait';
            newEvent.editable = true;

            // API Post
            // this.eventService.addEvent();

            // Déclenchement de la modal de validation heures
            this.openModal(EditModalComponent, newEvent);
          }
        },

        // Données du back/api/service
        events: data
      };
      this.calculateWeekHours(data);
    });
  }

  switchDayView(date, allDay) {
    if (allDay) {
      const dayDate = new Date(date._i);
      // Clicked to the entire day
      this.ucCalendar.fullCalendar('changeView', 'agendaDay'/* or 'basicDay' */);
      this.ucCalendar.fullCalendar('gotoDate', dayDate.getFullYear(), dayDate.getMonth(), dayDate.getDate());
    }
  }

  // Permet une action après un clic sur un event (ici ouvir la popup de suppression)
  eventClick(model: any) {
    this.displayEvent = model;
    this.openModal(DeleteModalComponent);
  }

  calculateWeekHours(data: any) {
    const maper = data.map(event => {
      this.weekHours += datetimeDiff(event.start, event.end).hours;
    });
  }

  openModal(modal, event = null) {
    const modalRef = this.modalService.open(modal);
    modalRef.componentInstance.event = event;
    modalRef.result.then(result => {
      if (event !== null) {
        this.ucCalendar.fullCalendar('renderEvent', result, true)
      } else {
        this.ucCalendar.fullCalendar('removeEvents', this.displayEvent.event._id);
        // this.eventService.deleteEvent();
        this.ucCalendar.fullCalendar('refetchEvents');
      }
    });
  }
}
