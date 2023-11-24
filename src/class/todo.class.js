export class Todo {

    constructor (tarea = 'alguna cosa') {

        this.tarea = tarea;

        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();

    }
}