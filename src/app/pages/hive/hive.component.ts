import { Component } from '@angular/core';
import { TaskListComponent } from '@app/features/task-list';
import { AddTaskFormComponent } from '@app/features/add-task';

@Component({
  selector: 'hive-page',
  templateUrl: './hive.component.html',
  imports: [
    TaskListComponent,
    AddTaskFormComponent,
  ],
  styleUrl: './hive.component.scss',
})
export class HiveComponent {

}
