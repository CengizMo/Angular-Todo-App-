import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayFinishedListComponent } from './today-finished-list/today-finished-list.component';
import { OverviewComponent } from './overview/overview.component';
import { ToDoCheckComponent } from './to-do-check/to-do-check.component';
import { TopbarComponent } from './topbar/topbar.component';
import { EditComponent } from './edit/edit.component';
import { OverviewButtonComponent } from './overview-button/overview-button.component';
import { BackOverviewComponent } from './back-overview/back-overview.component';
import { ToDoCheckButtonComponent } from './to-do-check-button/to-do-check-button.component';
import { BackToDoCheckComponent } from './back-to-do-check/back-to-do-check.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TodayFinishedListComponent,
    OverviewComponent,
    ToDoCheckComponent,
    TopbarComponent,
    EditComponent,
    OverviewButtonComponent,
    BackOverviewComponent,
    ToDoCheckButtonComponent,
    BackToDoCheckComponent,
    AddtaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
