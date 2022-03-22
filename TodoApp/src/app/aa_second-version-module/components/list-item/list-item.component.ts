import { noUndefined } from "@angular/compiler/src/util";
import { Component,EventEmitter,Input, OnInit, Output, ViewChild } from "@angular/core";
import { ListItemModel } from "../../model/list.item.model";
import { TodoItem } from "../../model/todo.item";
import { todoItems } from "../../model/todo.item.list";

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {

    @Input()
    public item: ListItemModel = new TodoItem();

    @Input()
    public disabled: boolean = false;

    public editMode: boolean = false;

    public checked: boolean = false;

    public text: string = 'Lorem Ipsum';

    public index: number = -1;

    @Output()
    public changing: EventEmitter<ListItemModel> = new EventEmitter<ListItemModel>();

    constructor(){}

    public checkItem(): void {
        if(this.disabled) {
            this.editMode = true;
            this.focusInputFiled();
            return;
        }
        this.item.checked = !this.item?.checked;
        this.changing.emit(this.item);
    }

    public enableEditMode(): void {
        this.editMode = true;
        this.focusInputFiled();
    }

    public leaveEditMode(): void {
        this.editMode = false;
    }

    public saveText(value: string): void {
        this.item.text = value;
        if(this.item.index == -1)
        {
            this.changing.emit(this.item);
            this.item = new TodoItem();
        }
    }

    private focusInputFiled(): void {
        setTimeout(() => {
            document.getElementById('editTodo')?.focus();
        }, 100);
    }
}