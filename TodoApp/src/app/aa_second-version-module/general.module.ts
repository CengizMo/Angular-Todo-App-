import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LayoutComponent } from "./components/layout/layout.component";
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { GeneralRoutingModule } from "./general-routing.module";
import { ButtonComponent } from "./components/button/button.component";
import { TodoPageComponent } from "./pages/todo-page/todo.page.component";
import { ListComponent } from "./components/list/list.component";
import { ListItemComponent } from "./components/list-item/list-item.component";

@NgModule({
    declarations: [
        // Components
        LayoutComponent,
        TopBarComponent,
        ButtonComponent,
        ListComponent,
        ListItemComponent,

        // Pages
        TodoPageComponent
    ],
    imports: [
        BrowserModule,
        GeneralRoutingModule,
        HttpClientModule,
    ],
    exports: [],
    providers: [],
    bootstrap: [LayoutComponent],
})
export class GeneralModule {}