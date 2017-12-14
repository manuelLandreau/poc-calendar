import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ratio',
  templateUrl: './ratio.component.html',
  styleUrls: ['./ratio.component.scss']
})
export class RatioComponent {

  @Input() totalHours: number;
  @Input() currentHours: number;

  constructor() {
  }
}
