import './styles.css';
// import { Todo } from './class/todo.class.js';
// import { TodoList } from './class/todo-list.class.js';
import { Todo, TodoList } from "./class";

const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScript');
const tarea2 = new Todo('Aprender Java');


todoList.nuevoTodo( tarea );

todoList.nuevoTodo( tarea2 );
console.log(todoList);