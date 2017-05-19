"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TodoComponent = (function () {
    function TodoComponent() {
        this.title = 'todos';
        this.todoBody = '';
        this.todos = [];
        this.todoList = [];
        this.todoComplete = [];
        this.hideTodo = true;
    }
    TodoComponent.prototype.todoSubmitted = function () {
        this.todos.push(this.todoBody);
        localStorage.setItem('Todo', JSON.stringify(this.todos));
        this.todoBody = "";
    };
    TodoComponent.prototype.removeTodo = function (i) {
        //this.todos.pop(this.i);
        this.todos.splice(i, 1);
        localStorage.setItem('Todo', JSON.stringify(this.todos));
    };
    TodoComponent.prototype.removeCompletedTodo = function (i) {
        this.todoComplete.splice(i, 1);
        localStorage.setItem('TodoComplete', JSON.stringify(this.todoComplete));
    };
    TodoComponent.prototype.todoCompleted = function (i) {
        var extracted_array = this.todos.splice(i, 1);
        localStorage.setItem('Todo', JSON.stringify(this.todos));
        this.todoComplete.push(extracted_array[0]);
        localStorage.setItem('TodoComplete', JSON.stringify(this.todoComplete));
    };
    TodoComponent.prototype.ngOnInit = function () {
        console.log(this.initialCheck);
        this.todoList = JSON.parse(localStorage.getItem('Todo'));
        if (localStorage.getItem('Todo') !== null) {
            this.todos = this.todoList;
            this.initialCheck = true;
            this.active = true;
        }
        else {
            this.initialCheck = false;
        }
    };
    return TodoComponent;
}());
TodoComponent = __decorate([
    core_1.Component({
        selector: 'app-todo',
        templateUrl: './app/todo.component.html',
        styleUrls: ['./app/todo.component.css']
    })
], TodoComponent);
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map