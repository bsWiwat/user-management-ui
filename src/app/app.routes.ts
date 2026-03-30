import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DocumentsComponent } from './pages/documents/documents.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'documents', component: DocumentsComponent },
];
