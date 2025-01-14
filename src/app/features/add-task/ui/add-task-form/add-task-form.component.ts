import { Component } from '@angular/core';
import { ButtonComponent, InputComponent } from '@app/components/ui-kit';

@Component({
  selector: 'add-task-form',
  imports: [
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.scss'
})
export class AddTaskFormComponent {
  handleSubmit(event: Event) {
    event.preventDefault();
    console.log('123');
  }
}
