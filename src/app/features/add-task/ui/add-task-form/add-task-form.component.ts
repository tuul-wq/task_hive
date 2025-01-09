import { Component } from '@angular/core';
import { InputComponent } from '@app/components/ui-kit';

@Component({
  selector: 'add-task-form',
  imports: [
    InputComponent,
  ],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.scss'
})
export class AddTaskFormComponent {

}
