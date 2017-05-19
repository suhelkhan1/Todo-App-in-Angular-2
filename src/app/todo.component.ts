import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

import { ITodo } from './todo';

@Component ({
    selector: 'app-todo',
    templateUrl: './app/todo.component.html',
    styleUrls:['./app/todo.component.css']
})
export class TodoComponent implements OnInit {
    title: string = 'todos';
    todoBody: string = '';
    todos: any = [];
    todoList: any = [];
    todoComplete: any =[];
    initialCheck: boolean ;
    active: boolean;
    hideTodo: boolean = true;
    todoLength: number;
    i: number;
    sigleTodoCheck: boolean ;

    todoSubmitted(): void {
        this.todos.push(this.todoBody);
        localStorage.setItem('Todo', JSON.stringify(this.todos));
        this.todoBody = "";
    }
    
    removeTodo(i: number): void {
        //this.todos.pop(this.i);
        this.todos.splice(i,1);
        localStorage.setItem('Todo', JSON.stringify(this.todos));
    }
    removeCompletedTodo(i: number): void {
        this.todoComplete.splice(i,1);
        localStorage.setItem('TodoComplete', JSON.stringify(this.todoComplete));
    }

    todoCompleted(i:number):void {
        let extracted_array = this.todos.splice(i,1);
        localStorage.setItem('Todo', JSON.stringify(this.todos));
        this.todoComplete.push(extracted_array[0]);
        localStorage.setItem('TodoComplete', JSON.stringify(this.todoComplete));
    }

    ngOnInit(): void {
        console.log(this.initialCheck);
        this.todoList = JSON.parse(localStorage.getItem('Todo'));

        if(localStorage.getItem('Todo') !== null){
            this.todos = this.todoList;
            this.initialCheck = true;
            this.active=true;
        } else {
            this.initialCheck = false;
        }
    }
}