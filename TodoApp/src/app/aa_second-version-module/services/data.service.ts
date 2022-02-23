import { Injectable } from "@angular/core";
import { TodoItem } from "../model/todo.item";
import { todoItems } from "../model/todo.item.list";
import { BehaviorSubject, Observable, of } from "rxjs";
import { HttpClientModule } from "@angular/common/http";
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({providedIn: "root"})

export class DataService{

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor() { }

  public todoItems$: BehaviorSubject<TodoItem[]> = new BehaviorSubject(todoItems);

  public getTodoItems(): TodoItem[] {
    return todoItems;
  }

  // private taskUrl = 'api/todo';

  // getTodoItems(): Observable<TodoItem[]> {
  //   return this.http.get<TodoItem[]>(this.taskUrl)
  // }
  
  // addTodoItem(todoItems: TodoItem): Observable<TodoItem> {
  //   return this.http.post<TodoItem>(this.taskUrl, todoItems, this.httpOptions)
  // }
    
  // getTodoItem(index: number): Observable<TodoItem> {
  //   const url = `${this.taskUrl}/${index}`;
  //   return this.http.get<TodoItem>(url)
  // }
  // updateTodoItem(todoItems: TodoItem): Observable<any> {
  //   return this.http.put(this.taskUrl, todoItems, this.httpOptions)
  // }
  // deleteTodoItem(index: number): Observable<TodoItem> {
  //   const url = `${this.taskUrl}/${index}`;
  //   return this.http.delete<TodoItem>(url, this.httpOptions)
  // }
}

