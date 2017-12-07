import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import EventModel from "../../models/EventModel";

@Component({
  selector: 'edit-modal',
  templateUrl: './edit-modal.component.html'
})
export class EditModalComponent implements OnInit {

  @Input() event: EventModel;
  start = {hour: null, minute: null};
  end = {hour: null, minute: null};

  constructor(public activeModal: NgbActiveModal) {}

  confirm() {
    this.event.start.setHours(this.start.hour);
    this.event.start.setMinutes(this.start.minute);
    this.event.end.setHours(this.end.hour);
    this.event.end.setMinutes(this.end.minute);
    this.activeModal.close(this.event);
  }

  ngOnInit() {
    this.start.hour = this.event.start.getHours();
    this.start.minute = this.event.start.getMinutes();
    this.end.hour = this.event.end.getHours();
    this.end.minute = this.event.end.getMinutes();
  }
}

