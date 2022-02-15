import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayFinishedListComponent } from './today-finished-list/today-finished-list.component';
import { OverviewComponent } from './overview/overview.component';
import { ToDoCheckComponent } from './to-do-check/to-do-check.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ButtonComponent } from './button/button.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayFinishedListComponent,
    OverviewComponent,
    ToDoCheckComponent,
    TopbarComponent,
    ButtonComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
