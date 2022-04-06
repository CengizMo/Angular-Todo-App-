import { ConstantPool } from "@angular/compiler";
import { Component, Input, ViewChild, AfterViewInit} from "@angular/core";
import { filter, map } from "rxjs/operators";
import { ListItemComponent } from "../../components/list-item/list-item.component";
import { ListItemModel } from "../../model/list.item.model";
import { TodoItem } from "../../model/todo.item";
import { todoItems } from "../../model/todo.item.list";
import { DataService } from "../../services/data.service";

@Component({
    selector: 'app-todo-page',
    templateUrl: './todo.page.component.html',
    styleUrls: ['todo.page.component.css']
})
export class TodoPageComponent implements AfterViewInit{

    @ViewChild(ListItemComponent) number:any;

    public checkedTodos = this.data.getTodoItems().filter(todo => todo.checked);
    public openTodos = this.data.getTodoItems().filter(todo => !todo.checked);
    public check = 0;
    public delIndex = 0;
    public page = "MainPage";

    public completedTodoItems$ = this.data.todoItems$.pipe(
        map(todos => todos.filter(todo => todo.checked)),
        map(todos => todos.sort((a, b) => {return a.index < b.index ? -1 : 1})
        ));

    public uncompletedTodoItems$ = this.data.todoItems$.pipe(
        map(todos => todos.filter(todo => !todo.checked)),
        map(todos => todos.sort((a, b) => {return a.index < b.index ? -1 : 1})
        ));

    constructor(public data: DataService){}

    ngAfterViewInit(): void {
        this.check = this.number.checkNumber;
        this.delIndex = this.number.item;
    }

    public change(todo: ListItemModel): void {
        const todos = this.data.todoItems$.getValue();
        let index = todos.findIndex(item => item.index === todo.index);

        if(todoItems.length < this.check)
        {
            this.check = todoItems.length;
            this.data.todoItems$.next(todos);
        }
        else if(index !== -1) {
            todos.splice(index, 1);
            todos.push(todo);
            this.data.todoItems$.next(todos);
        } 
        else
        {
            todo.index = todos.length;
            todos.push(todo);
            this.data.todoItems$.next(todos);
        }
        }

        ChangeToMainPage(){
            this.page = "MainPage";
        }

        ChangeToOverviewPage(){
            this.page = "OverviewPage";
        }

}