import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
 createDb(){
   const tasklist = [
     {
       id: 1,
       name: 'Müll rausbringen'
     },
     {
       id: 2,
       name: 'Wäsche waschen'
     }
   ];

   return {tasklist};
 }
     
 }