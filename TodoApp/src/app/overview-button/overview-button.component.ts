import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overview-button',
  templateUrl: './overview-button.component.html',
  styleUrls: ['./overview-button.component.css']
})
export class OverviewButtonComponent implements OnInit {

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
    }
  }

}
