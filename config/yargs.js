const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('borrar', 'Elimina un elemento por hacer de la lista', { descripcion })
    .command('actualizar', 'Actualizar el estado de un elemento por hacer', { descripcion, completado })
    .command('listar', 'Muestra un listado de todas las tareas', { completado })
    .help()
    .argv;

module.exports = {
    argv
}