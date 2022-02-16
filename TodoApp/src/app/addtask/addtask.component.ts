import { Component, OnInit } from '@angular/core';
import { ToDoServiceService } from '../to-do-service.service';
import { Task } from '../task';
import { Tasks } from '../checklist';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  Tasks$!: Observable<Task[]>;

  Tasks: Task[] = [];

  constructor(private ToDoServiceService: ToDoServiceService) { }

  ngOnInit(): void {
  }

  getHeroes(): void {
    this.ToDoServiceService.getTasks()
    .subscribe(heroes => this.Tasks = heroes);
  }

  add(name: string): void {
    if (!name) { return; }
    this.ToDoServiceService.addTask({ name } as Task)
      .subscribe(Tasks => {
        this.Tasks.push(Tasks);
      });
  }
  delete(Tasks: Task): void {
    this.Tasks = this.Tasks.filter(t => t !== Tasks);
    this.ToDoServiceService.deleteTask(Tasks.name).subscribe();
  }
}
