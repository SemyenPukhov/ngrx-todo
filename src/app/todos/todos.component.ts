import { Component, OnInit } from "@angular/core";
import { TodosListComponent } from "./todos-list/todos-list.component";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
