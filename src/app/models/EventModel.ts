export default class EventModel {

  constructor(title: string, start: Date) {
    this.title = title;
    this.start = start;
  }

  id: number;
  title: string;
  // allDay: boolean;
  start: Date;
  end: Date;
  // url: string;
  className: string|Array<any>;
  editable: boolean;
  // startEditable: boolean;
  // durationEditable: boolean;
  // resourceEditable: boolean;
  rendering: string; // "background", or "inverse-background"
  // overlap: boolean;
  // constraint: any;
  // source: any; // Event Source Object
  color: string;
  // backgroundColor: string;
  // borderColor: string;
  // textColor: string;
}
