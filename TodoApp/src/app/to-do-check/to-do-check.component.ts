import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { ToDoServiceService } from '../to-do-service.service';
import { Observable } from 'rxjs';
import { style } from '@angular/animations';

@Component({
  selector: 'app-to-do-check',
  templateUrl: './to-do-check.component.html',
  styleUrls: ['./to-do-check.component.css']
})
export class ToDoCheckComponent implements OnInit {

  tasklist: Task[] = [];

  constructor(private toDoServiceService : ToDoServiceService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.toDoServiceService.getTasks()
    .subscribe(tasks => this.tasklist = tasks);
  }

  checkTask(task: Task): void{

  }

}

function toogleTick(){
    const tick = document.getElementById('tick-mark');
    const btn = document.getElementById('btnn');
    
    btn!.onclick = function() {
      if (tick!.style.visibility !== "visible") {
        tick!.style.visibility = "hidden";
      } else {
        tick!.style.display = "visible";
      }
    }
}