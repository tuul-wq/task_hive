import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationLayoutComponent } from './layouts/navigation-layout/navigation-layout.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationLayoutComponent, NavigationComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
