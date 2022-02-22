import { Injectable } from "@angular/core";
import { TodoItem } from "../model/todo.item";
import { TodoItems } from "../model/todo.item.list";

@Injectable({providedIn: "root"})

export class DataService{
    constructor() {}

    getTodoItems(): TodoItem[] {
        return TodoItems;
      }
}