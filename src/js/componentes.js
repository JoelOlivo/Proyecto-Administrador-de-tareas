import { Todo } from "../class";
import { todoList } from "../index";


// Referencias del HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

export const crearTodoHtml = (todo) => {

    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li> 
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild); // 'firstElementChild' permite añadir el primer elemento que le sigue al elemento creado

    return div.firstElementChild;
}

// Eventos
txtInput.addEventListener('keyup', (evento) => { // 'keyup' permite escuchar la tecla que ha sido presionada
    // console.log(evento);
    if (evento.keyCode === 13 && txtInput.value.length > 0) {
        const nuevoTodo = new Todo (txtInput.value);
        // const todoList = new TodoList();
        todoList.nuevoTodo(nuevoTodo);
        // console.log(nuevoTodo);
        console.log(todoList);
        crearTodoHtml(nuevoTodo);
    }

});

