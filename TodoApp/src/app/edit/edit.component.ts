import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { ToDoServiceService } from '../to-do-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  tasklist: Task[] = [];

  constructor(private toDoServiceService: ToDoServiceService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.toDoServiceService.getTasks()
    .subscribe(tasks => this.tasklist = tasks);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.toDoServiceService.addTask({ name } as Task)
      .subscribe(task => {
        this.tasklist.push(task);
      });
  }

  delete(task: Task): void {
    this.tasklist = this.tasklist.filter(t => t !== task);
    this.toDoServiceService.deleteTask(task.name).subscribe();
  }

}
