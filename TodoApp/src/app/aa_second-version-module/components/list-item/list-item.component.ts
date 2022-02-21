import { Component,Input } from "@angular/core";

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
    
    @Input()
    public text: string = 'Ich bin ein sehr sehr sehr langer Text!';

    @Input()
    public index: number = 0;



    constructor(){}

    
}