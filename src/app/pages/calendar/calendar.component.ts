import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Options} from 'fullcalendar';
import {EventService} from '../../services/event.service';
import {EventModel} from '../../models/EventModel';
import {CalendarComponent} from 'ng-fullcalendar';
import {DialogService} from 'ng2-bootstrap-modal';
import {ModalComponent} from '../../components/modal/modal.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarPageComponent implements OnInit {

  calendarOptions: Options;
  flag = true; // Permet d'entrer dans le detail journée sans créer d'event sur la vue mois
  displayEvent: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(protected eventService: EventService, private dialogService: DialogService) {
    // Reception des données existante par ce service + service modal
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      this.calendarOptions = {
        nowIndicator: false,
        slotLabelInterval : '00:15',
        // Drag'n'drop & edition
        editable: true,
        selectLongPressDelay: 1,
        eventLongPressDelay: 1,
        longPressDelay: 1,
        selectable: true, // permet la creation d'event
        themeSystem: 'bootstrap3', // pas de bootstrap 4 - choix: standard, bootstrap3, jquery-ui
        height: 'auto', // !important
        locale: 'fr',
        themeButtonIcons: {
          prev: 'glyphicon glyphicon-arrow-left',
          next: 'glyphicon glyphicon-arrow-right',
        },
        header: {
          left: 'prev',
          center: 'title',
          right: 'next', // 'month agendaWeek today'
        },
        defaultView: 'agendaWeek',
        dayNamesShort: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
        views: {
          agendaWeek: {
            eventLimit: 2,
            titleFormat: 'DD MMMM YYYY',
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
        // Active la vue "agenda day" après clic (d'où l'attribut flag)
        // dayClick: (date, allDay, jsEvent, view) => {
        //   if (allDay) {
        //     this.flag = false;
        //     this.dayDate = new Date(date._i);
        //     // Clicked to the entire day
        //     this.ucCalendar.fullCalendar('changeView', 'agendaDay'/* or 'basicDay' */);
        //     this.ucCalendar.fullCalendar('gotoDate', this.dayDate.getFullYear(), this.dayDate.getMonth(), this.dayDate.getDate());
        //   }
        // },
        select: (start, end, jsEvent, view) => {
          let newEvent: EventModel;
          // Vue mois
          if (this.flag && view.name === 'month') {
            newEvent = new EventModel('choix', new Date(start._i));
            newEvent.end = new Date(end._i);
            this.ucCalendar.fullCalendar('renderEvent', newEvent, true);
          } else // Vue Semaine "agenda"
          if (this.flag && view.name === 'agendaWeek') {
            newEvent = new EventModel('choix', new Date(start._d));
            newEvent.end = new Date(end._d);
            // heure - 1 parceque decalage ???
            newEvent.start.setHours(newEvent.start.getHours() - 1);
            newEvent.end.setHours(newEvent.end.getHours() - 1);
            newEvent.color = '#97a0b1';
            newEvent.className = 'event-souhait';
            newEvent.overlap = true;
            this.ucCalendar.fullCalendar('renderEvent', newEvent, true);
            // this.eventService.addEvent();
          }
          this.flag = true;
          /* ICI TU PEUX DECLENCHER UNE AUTRE MODAL */
          this.showDateModal(newEvent);
        },
        events: data
      };
    });
  }

  // Permet une action après un clic sur un event (ici ouvir la popup de suppression)
  eventClick(model: any) {
    this.displayEvent = model;
    this.showConfirmRemove();
  }

  // Permet la suppression d'un event après confirmation
  deleteEvent() {
    this.ucCalendar.fullCalendar('removeEvents', this.displayEvent.event._id);
    // this.eventService.deleteEvent();
    this.ucCalendar.fullCalendar('refetchEvents');
  }

  // Gère la modal // https://github.com/ankosoftware/ng2-bootstrap-modal
  showConfirmRemove() {
    const disposable = this.dialogService.addDialog(ModalComponent, {
      title: 'Confirmation',
      message: 'Voulez-vous supprimer votre souhait?'
    })
      .subscribe(isConfirmed => {
        // We get dialog result
        if (isConfirmed) {
          this.deleteEvent();
        }
      });
    setTimeout(() => {
      disposable.unsubscribe();
    }, 100000);
  }

  // Gère la modal // https://github.com/ankosoftware/ng2-bootstrap-modal
  showDateModal(event: EventModel) {
    const disposable = this.dialogService.addDialog(ModalComponent, {
      title: 'Reglage dates',
      message: 'Reglez les dates'
    })
      .subscribe(isConfirmed => {
        // We get dialog result
        if (isConfirmed) {
          this.updateEvent(event);
        }
      });
    setTimeout(() => {
      disposable.unsubscribe();
    }, 100000);
  }

  updateEvent(event: EventModel) {
    // TODO ici il faudra mettre à jour l'évènement en question avec les nouvelles dates
    event.start = new Date;
    event.end = new Date;
    this.ucCalendar.fullCalendar('updateEvent');
  }
}
