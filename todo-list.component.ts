import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList2 = [
    {
      description: "Refaire pour angular",
      addedDate: new Date(),
      enddDate: new Date()
    },
    {
      description: "Refaire pour angular 2",
      addedDate: new Date(),
      enddDate: new Date()
    }

  ];


  todoList = [
    {
      description: "Refaire pour angular",
      addedDate: new Date()
    },
    {
      description: "Refaire pour angular 2",
      addedDate: new Date()
    },
    {
      description: "Refaire pour angular 3",
      addedDate: new Date()
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  deleteTodo(index: number) {
    this.todoList.splice(index, 1);
  }


  deleteTodo2(index: number) {
    this.todoList2.splice(index, 1);
  }

  addTodo2(index: number, todo) {
    this.todoList.splice(index, 1);
    todo.enddDate = new Date();

    this.todoList2.push(todo);


  }

}
