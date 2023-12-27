import { Todo } from "./todo.class";

export class TodoList {

    constructor () {

        this.todos = [];
        this.cargarLocalStorage();

    }

    nuevoTodo (todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo (id) {

        this.todos = this.todos.filter((todo) => todo.id != id);  // 'filter' regresa un nuevo arreglo dependiendo la condición
        this.guardarLocalStorage();

    }

    marcarCompletado (id) {

        for (const todo of this.todos) {

            // console.log(id, todo.id);

            if (todo.id == id) {

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados () {

        this.todos = this.todos.filter((todo) => todo.completado === false); 
        this.guardarLocalStorage();
        
    }

    guardarLocalStorage () {

        localStorage.setItem('todo', JSON.stringify(this.todos)); // transformar a json un objeto 
    }

    cargarLocalStorage () {

        if (localStorage.getItem('todo')) {
            
            this.todos = JSON.parse(localStorage.getItem('todo'));
            // this.todos = 
            console.log(this.todos);

        } else {
            
            this.todos = [];
            
        }

        this.todos = this.todos.map(obj => Todo.fromJson(obj));
        // console.warn(this.todos);
    }
}