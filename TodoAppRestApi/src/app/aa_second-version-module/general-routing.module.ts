import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoPageComponent } from "./pages/todo-page/todo.page.component";
import { TodosComponent } from "./route.component/todos-component/todos/todos.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/todos'},
    { path: 'todos', pathMatch: 'full', component: TodosComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class GeneralRoutingModule {}