import { Routes } from '@angular/router';
import { NotFound404Component } from './components/not-found-404/not-found-404.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '++', component: NotFound404Component },
];
