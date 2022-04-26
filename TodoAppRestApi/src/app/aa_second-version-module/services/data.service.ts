import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListItemModel } from '../model/list.item.model';
import { TodoItem } from '../model/todo.item';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Base url
  baseurl = 'http://localhost:3000/api/v1/todos';
  constructor(private http: HttpClient) {}
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // POST
  CreateTodo(data: any): Observable<TodoItem> {
    return this.http
      .post<TodoItem>(
        this.baseurl,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // GET
  GetTodo(index: number): Observable<TodoItem> {
    return this.http
      .get<TodoItem>(this.baseurl + '/todo/' + index)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // GET
  GetTodos(): Observable<TodoItem> {
    return this.http
      .get<TodoItem>(this.baseurl)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // PUT
  UpdateTodo(index: number, data: any): Observable<TodoItem> {
    return this.http
      .put<TodoItem>(
        this.baseurl + '/todo/' + index,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // DELETE
  DeleteTodo(index: number) {
    return this.http
      .delete<TodoItem>(this.baseurl + '/todo/' + index, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // Error handling
  errorHandl(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

