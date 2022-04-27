import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { todoItems } from 'src/app/aa_second-version-module/model/todo.item.list';
import { DataService } from 'src/app/aa_second-version-module/services/data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoItem } from 'src/app/aa_second-version-module/model/todo.item';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!: TodoItem[];

  todo: TodoItem = new TodoItem();


  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(){
    this.dataService.getTodoItemss().subscribe((data) => {
      console.log(data)
      this.todos = data
    });
  }
  todoDetails(id: number){
    this.router.navigate(['todos', id]);
    console.log(id);
  }


}
