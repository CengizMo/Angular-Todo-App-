import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

    private taskUrl = 'api/tasks';

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        console.error(error);
    
        return of(result as T);
      };
    }
    getTasks(): Observable<Task[]> {
      return this.http.get<Task[]>(this.taskUrl).pipe(
          catchError(this.handleError<Task[]>('getTask', []))
        );
    }
    
    addTask(Tasks: Task): Observable<Task> {
      return this.http.post<Task>(this.taskUrl, Tasks, this.httpOptions).pipe(
        catchError(this.handleError<Task>('addTask'))
      );
    }
      
    getTask(name: string): Observable<Task> {
      const url = `${this.taskUrl}/${name}`;
      return this.http.get<Task>(url).pipe(
      catchError(this.handleError<Task>(`getTask name=${name}`))
      );
    }
    updateTask(Tasks: Task): Observable<any> {
      return this.http.put(this.taskUrl, Tasks, this.httpOptions).pipe(
        catchError(this.handleError<any>('updateTask'))
      );
    }
    deleteTask(name: string): Observable<Task> {
      const url = `${this.taskUrl}/${name}`;
    
      return this.http.delete<Task>(url, this.httpOptions).pipe(
        catchError(this.handleError<Task>('deleteTask'))
      );
    }
}
