import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'delete-modal',
  templateUrl: './delete-modal.component.html'
})
export class DeleteModalComponent {

  constructor(public activeModal: NgbActiveModal) {}

  confirm(confirmation: boolean) {
    this.activeModal.close(confirmation);
  }
}
