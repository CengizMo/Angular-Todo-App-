import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LayoutComponent } from "./components/layout/layout.component";
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { GeneralRoutingModule } from "./general-routing.module";
import { ButtonComponent } from "./components/button/button.component";
import { TodoPageComponent } from "./pages/todo-page/todo.page.component";
import { ListComponent } from "./components/list/list.component";
import { ListItemComponent } from "./components/list-item/list-item.component";
import { TooltipModule } from "ngx-foundation";
import { DataService } from "./services/data.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TodoAddComponent } from "./route.component/add-component/todo-add/todo-add.component";
import { TodosComponent } from "./route.component/todos-component/todos/todos.component";

@NgModule({
    declarations: [
        LayoutComponent,
        TopBarComponent,
        ButtonComponent,
        ListComponent,
        ListItemComponent,
        TodoAddComponent,
        TodosComponent,


        TodoPageComponent
    ],
    imports: [
        BrowserModule,
        GeneralRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        TooltipModule.forRoot()
    ],
    exports: [],
    providers: [DataService],
    bootstrap: [LayoutComponent],
})
export class GeneralModule {}