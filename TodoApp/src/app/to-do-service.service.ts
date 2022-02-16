import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Tasks } from './checklist';
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

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
    getTasks(): Observable<Task[]> {
      return this.http.get<Task[]>(this.taskUrl).pipe(
          catchError(this.handleError<Task[]>('getTask', []))
        );
    }
    
    /** POST: add a new hero to the server */
    addTask(Tasks: Task): Observable<Task> {
      return this.http.post<Task>(this.taskUrl, Tasks, this.httpOptions).pipe(
        catchError(this.handleError<Task>('addTask'))
      );
    }
    
    /** Log a HeroService message with the MessageService */
    private taskUrl = '/app-edit';  // URL to web api
      /** GET hero by id. Will 404 if id not found */
      
    getTask(name: string): Observable<Task> {
      const url = `${this.taskUrl}/${name}`;
      return this.http.get<Task>(url).pipe(
      catchError(this.handleError<Task>(`getTask name=${name}`))
      );
    }
    /** PUT: update the hero on the server */
    updateTask(Tasks: Task): Observable<any> {
      return this.http.put(this.taskUrl, Tasks, this.httpOptions).pipe(
        catchError(this.handleError<any>('updateTask'))
      );
    }
    /** DELETE: delete the hero from the server */
    deleteTask(name: string): Observable<Task> {
      const url = `${this.taskUrl}/${name}`;
    
      return this.http.delete<Task>(url, this.httpOptions).pipe(
        catchError(this.handleError<Task>('deleteTask'))
      );
    }
}
