import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LinkComponent } from '@app/components/ui-kit/link/link.component';

@Component({
  selector: 'navigation',
  imports: [
    RouterLink,
    LinkComponent,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
