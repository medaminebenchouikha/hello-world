import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {

  


  formaupdatetodo:FormGroup;


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {


    this.formaupdatetodo=this.formBuilder.group({

      description:new FormControl(null,[Validators.required,Validators.minLength(5)])


    })



  }


  get description(){return this.formaupdatetodo.get('description')}
  


  updateTodo(){

    console.log(this.formaupdatetodo.value);



  }


}
