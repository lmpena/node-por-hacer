//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');


//console.log(argv);


let comando = argv._[0];

switch (comando) {
    case 'crear':
        //console.log('crear tarea por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        //console.log('listar todas las tareas pordefault: hacer');
        let listado = porHacer.getListado();
        break;
    case 'actualizar':
        //console.log('actualizar tarea por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        //console.log('actualizar tarea por hacer');
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('comando no reconocido');
}