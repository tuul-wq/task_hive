import { Routes } from '@angular/router';
import { NotFound404Component } from './components/not-found-404/not-found-404.component';
import { HiveComponent } from './pages/hive/hive.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  { path: 'hive', component: HiveComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: 'hive', pathMatch: 'full' },
  { path: '**', component: NotFound404Component },
];
