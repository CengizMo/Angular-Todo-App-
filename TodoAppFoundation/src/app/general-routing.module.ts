import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoPageComponent } from "./todo-page/todo.page.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/todo'},
    { path: 'todo', pathMatch: 'full', component: TodoPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class GeneralRoutingModule {}