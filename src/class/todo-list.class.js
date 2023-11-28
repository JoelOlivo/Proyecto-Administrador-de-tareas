export class TodoList {

    constructor () {

        this.todos = [];

    }

    nuevoTodo (todo) {
        this.todos.push(todo);
    }

    eliminarTodo (id) {

        this.todos = this.todos.filter((todo) => todo.id != id);  // 'filter' regresa un nuevo arreglo dependiendo la condición

    }

    marcarCompletado (id) {

        for (const todo of this.todos) {

            // console.log(id, todo.id);

            if (todo.id == id) {

                todo.completado = !todo.completado;
                break;
            }
        }
    }

    eliminarCompletados () {

        this.todos = this.todos.filter((todo) => todo.completado === false); 
        
    }

    guardarLocalStorage () {

    }

    cargarLocal
}