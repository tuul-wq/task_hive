import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationLayoutComponent } from '@app/components/layouts';
import { NavigationComponent } from '@app/features/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationLayoutComponent, NavigationComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
