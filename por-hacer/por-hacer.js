const fs = require('fs');
const colors = require('colors');


let listadoPorHacer = [];


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}


const actualizar = (descripcion, completado = true) => {

    cargarDB();

    console.log(descripcion);
    console.log(completado);
    console.log(listadoPorHacer);

    // No funciona findIndex y no sé porqué
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    console.log(index);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}


const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion != descripcion);

    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }


}

const getListado = (completado) => {

    cargarDB();

    for (let tarea of listadoPorHacer) {

        console.log('=============== Por Hacer ==============='.green);
        console.log('Tarea : ', tarea.descripcion);
        console.log('Estado: ', tarea.completado);
        console.log('========================================='.green);
    }


    return listadoPorHacer;
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}