import { NgModule } from "@angular/core";
import { MaterialModule } from "../../../libs/material/src/lib/material/material.module";
import { TodosRoutingModule } from "./todos-routing.module";
import { TodosListComponent } from "./todos-list/todos-list.component";
import { TodosComponent } from "./todos.component";
@NgModule({
  imports: [MaterialModule, TodosRoutingModule],
  declarations: [TodosListComponent, TodosComponent]
})
export class TodosModule {}
