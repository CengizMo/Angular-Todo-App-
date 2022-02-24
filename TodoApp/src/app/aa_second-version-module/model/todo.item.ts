import { ListItemModel } from "./list.item.model";

export class TodoItem implements ListItemModel {

    public text: string = '';

    public index: number = -1;

    public checked: boolean = false;

}