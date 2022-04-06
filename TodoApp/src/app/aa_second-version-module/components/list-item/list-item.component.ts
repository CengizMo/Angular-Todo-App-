import { noUndefined } from "@angular/compiler/src/util";
import { Component,EventEmitter,Input, IterableDiffers, OnInit, Output, ViewChild } from "@angular/core";
import { ListItemModel } from "../../model/list.item.model";
import { TodoItem } from "../../model/todo.item";
import { todoItems } from "../../model/todo.item.list";
import { DataService } from "../../services/data.service";
@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {

    @Input()
    public item: ListItemModel = new TodoItem();

    public checkNumber = todoItems.length;

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
            console.log(todoItems);
        }
    }

    public deleteItem (delIndex: number): void{
        this.item.index = delIndex;
        if(this.item.index != -1)
        {
            console.log(this.item.index);
            todoItems.splice(this.item.index, 1);
            this.changing.emit(this.item);
            console.log(todoItems.length);
            for(var x = 0; x < todoItems.length; x++)
            {
                if(x >= this.item.index)
                {
                    
                    todoItems[x].index = todoItems[x].index - 1;
                }
                
            }
        }


    }

    private focusInputFiled(): void {
        setTimeout(() => {
            document.getElementById('editTodo')?.focus();
        }, 100);
    }
}