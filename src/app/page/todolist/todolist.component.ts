import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  list:any[]=[];
  isComplete: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  addTask(task:any){
    this.list.push({
      id:Date.now(),
      name:task
    });
    console.warn(this.list);
  }
  completeItem(){
    this.isComplete = !this.isComplete;
  }
  deleteItem(id:number){
    this.list=this.list.filter(task=>task.id !== id);
  }
}
