import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
 createDb(){
   const tasks = [
     {
       id: 11,
       name: 'Müll rausbringen'
     },
     {
       id: 12,
       name: 'Wäsche waschen'
     }
   ];

   return {tasks};
 }
     
 }