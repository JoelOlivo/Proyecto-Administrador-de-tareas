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
        txtInput.value = '';
    }

});

divTodoList.addEventListener('click', (evento)=>{

    // console.log('click');
    const nombreElemento = evento.target.localName;  // 'target' permite conocer que elemento es clickeado y 'localName' indica el nombre del elemento
    const todoElemento = evento.target.parentElement.parentElement; // 'parentElement' permite conocer que seccion es clickeada
    const idElemento = todoElemento.getAttribute('data-id'); // 'getAttribute' permite recuperar un atributo de html

    console.log(todoElemento);
    console.log(idElemento);

    if (nombreElemento.includes('input')) {
        
        todoList.marcarCompletado(idElemento);
        // console.warn(todoElemento.classList);
        todoElemento.classList.toggle('completed');
    }

    console.log(todoList);
    
});

