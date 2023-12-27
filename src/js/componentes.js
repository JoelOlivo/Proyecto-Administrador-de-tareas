import { Todo } from "../class";
import { todoList } from "../index";


// Referencias del HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnCompletados = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const ulSeleccionado = document.querySelectorAll('.filtro');

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
    console.log(nombreElemento);


    if (nombreElemento.includes('input')) {
        
        todoList.marcarCompletado(idElemento);
        // console.warn(todoElemento.classList);
        todoElemento.classList.toggle('completed');
        // console.log(todoList);

    } else if (nombreElemento.includes('button')) {

        todoList.eliminarTodo(idElemento);
        divTodoList.removeChild(todoElemento);  // 'removeChild' permite eliminar un elemento hijo html
        console.log(todoList);
    
    }

    
});

btnCompletados.addEventListener('click', (evento)=>{

    todoList.eliminarCompletados();

    // console.log(divTodoList.children.length);

    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
        const elemento = divTodoList.children[i];

        if (elemento.classList.contains('completed')) { // 'contains' permite verficar la existencia de una clase
            
            divTodoList.removeChild(elemento);
        }
        console.log(elemento);
        
    }
    console.log(todoList);
});

ulFiltros.addEventListener('click', (evento) => {

    const filtro = evento.target.text;
    
    if (!filtro) {
        return;
    }
    
    ulSeleccionado.forEach(element => element.classList.remove('selected'));
    evento.target.classList.add('selected');

    for (const elemento of divTodoList.children) {
        evento.target.classList.add('selected');

        // console.log(elemento);
        elemento.classList.remove('hidden');
        
        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;

            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;
        }
    }
});

