import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'ioDecorator';
  todoListArray : Array <string> = []
  
  addTodo(todo : HTMLInputElement){
    let val = todo.value;
    this.todoListArray.push(val);
    todo.value = '';
  }
  getTodoItem(val :string){
    this.todoListArray.push(val);
  }

  
}
