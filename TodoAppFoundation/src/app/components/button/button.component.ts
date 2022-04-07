import { Component, Input, OnInit, Output, EventEmitter, NgModule } from '@angular/core';



@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {

  @Input()
  public text: string = 'I am a button!';

  @Input()
  public link: string = '';

  @Output()
  public onClick: EventEmitter<Event> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  reactOnClick(event: Event) {
    if(this.link === '') { 
      this.onClick.emit(event);
    } else {
        console.warn('You can not bind a link & click listener at the same time!');
    }
  }

}
