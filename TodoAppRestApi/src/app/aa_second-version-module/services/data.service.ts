import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListItemModel } from '../model/list.item.model';
import { TodoItem } from '../model/todo.item';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { todoItems } from '../model/todo.item.list';
@Injectable({
  providedIn: 'root',
})

export class DataService {

  public todoItems$: BehaviorSubject<TodoItem[]> = new BehaviorSubject(todoItems);

  public getTodoItemss(): Observable<any> {
    return this.todoItems$;
  }

  public getTodoItems(): TodoItem[] {
    return todoItems;
  }

  constructor(private httpClient: HttpClient) {}

}

