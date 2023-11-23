import './styles.css';

import { Todo, TodoList } from "./class";
import { crearTodoHtml } from './js/componentes';

const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScript');
todoList.nuevoTodo( tarea );

console.log(todoList);
crearTodoHtml(tarea);