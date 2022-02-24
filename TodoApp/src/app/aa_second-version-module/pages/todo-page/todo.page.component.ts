import { Component, Input } from "@angular/core";
import { filter, map } from "rxjs/operators";
import { ListItemModel } from "../../model/list.item.model";
import { TodoItem } from "../../model/todo.item";
import { DataService } from "../../services/data.service";

@Component({
    selector: 'app-todo-page',
    templateUrl: './todo.page.component.html',
    styleUrls: ['todo.page.component.css']
})
export class TodoPageComponent {

    public checkedTodos = this.data.getTodoItems().filter(todo => todo.checked);
    public openTodos = this.data.getTodoItems().filter(todo => !todo.checked);

    public completedTodoItems$ = this.data.todoItems$.pipe(
        map(todos => todos.filter(todo => todo.checked)),
        map(todos => todos.sort((a, b) => {return a.index < b.index ? -1 : 1})
        ));

    public uncompletedTodoItems$ = this.data.todoItems$.pipe(
        map(todos => todos.filter(todo => !todo.checked)),
        map(todos => todos.sort((a, b) => {return a.index < b.index ? -1 : 1})
        ));

    constructor(public data: DataService) {}

    public change(todo: ListItemModel): void {
        const todos = this.data.todoItems$.getValue();
        const index = todos.findIndex(item => item.index === todo.index);
        if(index !== -1) {
            todos.splice(index, 1);
        }

        todos.push(todo);
        console.log(todo)
        this.data.todoItems$.next(todos);
    }
}