import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  @Input() task: object;
  stateText: string = 'Click to mark Complete';
  state: boolean = false;
  stateTitle: string = 'Incomplete';

  constructor() { }

  ngOnInit() {
  }

  toggleStatus() {
    this.state = this.state ? false : true;
    this.stateTitle = this.state ? 'Complete' : 'Incomplete';
    this.stateText = this.state ? 'Click to mark Incomplete' : 'Click to mark Complete';
  }

}
