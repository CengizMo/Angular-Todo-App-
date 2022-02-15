import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';

import { OverviewComponent } from './overview/overview.component';
import { ToDoCheckComponent } from './to-do-check/to-do-check.component';


const routes: Routes = [
  { path: '', redirectTo: '/app-overview', pathMatch: 'full'},
  { path: 'app-overview', component: OverviewComponent},
  { path: 'app-to-do-check', component: ToDoCheckComponent},
  { path: 'app-edit', component: EditComponent}
  // { path: 'app-overview/gotoCheck()', redirectTo: '/to-do-check', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
