import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() value: string = '';

  @Output() onInput = new EventEmitter<string>();

  handleInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this.onInput.emit(inputElement.value);
  }
}
