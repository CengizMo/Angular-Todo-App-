import { Component, Input, OnInit } from "@angular/core";
import { TodoItem } from "../../model/todo.item";
import { DataService } from "../../services/data.service";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent {

    // ngOnInit(){
    //     this.getTodo();
    // }

    constructor(private DataService: DataService){}

    // getTodo(): void{
    //     this.DataService.getTodoItems()
    //     .subscribe(todoItem => this.todoItem = todoItem)
    // }
}