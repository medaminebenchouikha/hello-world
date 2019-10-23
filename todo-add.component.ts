import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {


  formaddtodo:FormGroup;


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {


    this.formaddtodo=this.formBuilder.group({

      description:new FormControl(null,[Validators.required,Validators.minLength(5)])


    })



  }


  get description(){return this.formaddtodo.get('description')}


  addTodo(){

    console.log(this.formaddtodo.value);



  }

}
