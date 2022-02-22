import { Component,Input, ViewChild } from "@angular/core";

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
    
    @Input()
    public text: string = 'Lorem Ipsum Dolar Sit Amet Dolar Amet Sit Lorem';

    @Input()
    public index: number = -1;

    @Input()
    public checked: boolean = false;

    @Input()
    public editMode: boolean = false;

    constructor(){}

    public checkItem(): void {
        this.checked = !this.checked;
    }

    public enableEditMode(): void {
        this.editMode = true;
        setTimeout(() => {
            document.getElementById('editTodo')?.focus();
        }, 100);
    }

    public leaveEditMode(): void {
        this.editMode = false;
    }

    public saveText(value: string): void {
        this.text = value;
    }
}