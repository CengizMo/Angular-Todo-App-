import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Task } from './task';
import { InMemoryDataService } from './in-memory-data.service';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

    private taskUrl = 'api/tasklist';

    getTasks(): Observable<Task[]> {
      return this.http.get<Task[]>(this.taskUrl)
    }
    
    addTask(tasks: Task): Observable<Task> {
      return this.http.post<Task>(this.taskUrl, tasks, this.httpOptions)
    }
      
    getTask(name: string): Observable<Task> {
      const url = `${this.taskUrl}/${name}`;
      return this.http.get<Task>(url)
    }
    updateTask(Tasks: Task): Observable<any> {
      return this.http.put(this.taskUrl, Tasks, this.httpOptions)
    }
    deleteTask(name: string): Observable<Task> {
      const url = `${this.taskUrl}/${name}`;
    
      return this.http.delete<Task>(url, this.httpOptions)
    }
}
