import {Component} from '@angular/core';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';

export interface ConfirmModel {
  title: string;
  message: string;
}
@Component({
  selector: 'app-date',
  template: `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" (click)="close()">&times;</button>
          <h4 class="modal-title">{{title }}</h4>
        </div>
        <div class="modal-body">
          <p>{{message}}</p>
          <input type="datetime-local">
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>`
})
export class ModalDateComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

  title: string;
  message: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  confirm() {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    this.result = true;
    this.close();
  }
}
