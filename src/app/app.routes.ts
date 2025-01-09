import { Routes } from '@angular/router';
import { HiveComponent, NotFound404Component, SettingsComponent } from '@app/pages';

export const routes: Routes = [
  { path: 'hive', component: HiveComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: 'hive', pathMatch: 'full' },
  { path: '**', component: NotFound404Component },
];
