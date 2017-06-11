import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponentComponent } from './task-component/task-component.component';
import { TaskListComponent } from './task-component/task-list/task-list.component';
import { TaskNewComponent } from './task-component/task-new/task-new.component';
import { TaskDetailsComponent } from './task-component/task-list/task-details/task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponentComponent,
    TaskListComponent,
    TaskNewComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
