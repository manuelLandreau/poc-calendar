import {Component} from '@angular/core';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {EventModel} from '../../models/EventModel';

export interface EditModel {
  event: EventModel;
}
@Component({
  selector: 'app-date',
  template: `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" (click)="close()">&times;</button>
          <h4 class="modal-title">Réglage précis</h4>
        </div>
        <div class="modal-body">
          <p>Début</p>
          <input type="datetime-local" [(ngModel)]="event.start">
          <p>Fin</p>
          <input type="datetime-local" [(ngModel)]="event.end">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
          <button type="button" class="btn btn-default" (click)="close()">Cancel</button>
        </div>
      </div>
    </div>`
})
export class ModalDateComponent extends DialogComponent<EditModel, EventModel> implements EditModel {

  event: EventModel;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  confirm() {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    this.event.start = new Date(this.event.start);
    this.event.end = new Date(this.event.end);
    this.result = this.event;
    this.close();
  }
}
