import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from 'src/app/aa_second-version-module/services/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { TodoItem } from 'src/app/aa_second-version-module/model/todo.item';
import { todoItems } from 'src/app/aa_second-version-module/model/todo.item.list';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  todoForm!: FormGroup;
  TodoArr: any = [];
  ngOnInit() {
  }
  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public dataService: DataService
  ) {}

  public TodoItems$ = this.dataService.todoItems$.pipe(
    map(todos => todos.sort((a, b) => {return a.index < b.index ? -1 : 1})
    ));


}
