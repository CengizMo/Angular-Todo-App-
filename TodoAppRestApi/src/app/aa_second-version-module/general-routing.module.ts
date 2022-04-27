import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoPageComponent } from "./pages/todo-page/todo.page.component";
import { TodoAddComponent } from "./route.component/add-component/todo-add/todo-add.component";
import { TodosComponent } from "./route.component/todos-component/todos/todos.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/api/v1/home'},
    { path: 'api/v1/home', pathMatch: 'full', component: TodoPageComponent},
    { path: 'api/v1/todos', pathMatch: 'full', component: TodosComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class GeneralRoutingModule {}