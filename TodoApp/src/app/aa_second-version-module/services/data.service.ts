import { Injectable } from "@angular/core";
import { TodoItem } from "../model/todo.item";
import { todoItems } from "../model/todo.item.list";
import { BehaviorSubject, Observable, of } from "rxjs";
import { HttpClientModule } from "@angular/common/http";
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({providedIn: "root"})

export class DataService{

  constructor() { }

  public todoItems$: BehaviorSubject<TodoItem[]> = new BehaviorSubject(todoItems);

  public getTodoItems(): TodoItem[] {
    return todoItems;
  }

}

