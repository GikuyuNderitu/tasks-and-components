import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent implements OnInit {

  tasks: object[] = [
    {title: 'First Task'},
    {title: 'Second Task'},
    {title: 'Third Task'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
