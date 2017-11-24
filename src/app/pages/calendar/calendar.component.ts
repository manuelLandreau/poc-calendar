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
        // Drag'n'drop & edition
        editable: true,
        selectLongPressDelay: 1,
        eventLongPressDelay: 1,
        longPressDelay: 1,
        selectable: true, // permet la creation d'event
        themeSystem: 'bootstrap3', // pas de bootstrap 4 - choix: standard, bootstrap3, jquery-ui
        height: 'auto', // !important
        // customButtons: { // Custom button
        //   back: {
        //     text: 'Retour',
        //     click: () => this.ucCalendar.fullCalendar('changeView', 'month')
        //   }
        // },
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month agendaWeek'
        },
        defaultView: 'agendaWeek',
        views: {
          agendaWeek: {
            eventLimit: 2,
            titleFormat: 'MMMM YYYY'
          },
          day: {
            titleFormat: 'MMMM YYYY'
          }
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
          // Vue mois
          if (this.flag && view.name === 'month') {
            const newEventMonth = new EventModel('Souhait', new Date(start._i));
            newEventMonth.end = new Date(end._i);
            this.ucCalendar.fullCalendar('renderEvent', newEventMonth, true);
          } else // Vue Semaine "agenda"
            if (this.flag && view.name === 'agendaWeek') {
            const newEventWeek = new EventModel('Souhait', new Date(start._d));
            newEventWeek.end = new Date(end._d);
            // heure - 1 parceque decalage ???
            newEventWeek.start.setHours(newEventWeek.start.getHours() - 1);
            newEventWeek.end.setHours(newEventWeek.end.getHours() - 1);
            newEventWeek.color = '#09b0a2';
            this.ucCalendar.fullCalendar('renderEvent', newEventWeek, true);
          }
          this.flag = true;
        },
        events: data,
      };
    });
  }

  // Permet une action après un clic sur un event (ici ouvir la popup de suppression)
  eventClick(model: any) {
    this.displayEvent = model;
    console.log(model);
    this.showConfirm();
  }

  // Permet la suppression d'un event après confirmation
  deleteEvent() {
    this.ucCalendar.fullCalendar('removeEvents', this.displayEvent.event._id);
    // this.eventService.deleteEvent();
    this.ucCalendar.fullCalendar('refetchEvents');
  }

  // Gère la modal // https://github.com/ankosoftware/ng2-bootstrap-modal
  showConfirm() {
    const disposable = this.dialogService.addDialog(ModalComponent, {
      title: 'Confirm title',
      message: 'Confirm message'})
      .subscribe(isConfirmed => {
        // We get dialog result
        if (isConfirmed) {
          this.deleteEvent();
        }
      });
    setTimeout(() => {
      disposable.unsubscribe();
    }, 10000);
  }
}
