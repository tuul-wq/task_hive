import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'ui-link',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input() href?: string;
  @Input() routerLink?: string;
  @Input() target?: '_self' | '_blank';
  @Input() disabled: boolean = false;

  handleClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
    }
  }
}
