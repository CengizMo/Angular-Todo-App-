import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { todoItems } from 'src/app/aa_second-version-module/model/todo.item.list';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = todoItems;

  constructor(private http: HttpClient) 
  {
  }

  ngOnInit(){
  }

}
