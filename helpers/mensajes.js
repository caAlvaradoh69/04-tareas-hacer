const { resolve } = require('path');

require ('colors');


const mostrarMenu = () =>{

    return new Promise( resolve => {
        
        console.clear();
        console.log('======================='.rainbow);
        console.log('Seleccione una opcion'.magenta);
        console.log('======================= \n'.rainbow);
    
        console.log(`${'1.'.magenta} Crear tarea`);
        console.log(`${'2.'.magenta} Listar tarea`);
        console.log(`${'3.'.magenta} Listar tareas completadas `);
        console.log(`${'4.'.magenta} Listar tareas pendientes`);
        console.log(`${'5.'.magenta} Completar tarea(s)`);
        console.log(`${'6.'.magenta} Borrar tarea`);
        console.log(`${'0.'.magenta} Salir`);
    
        //recibiendo informacion del usuario
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('seleccione una opcion: ', (opt) =>{
            readline.close();
            resolve(opt);
        }) 

    });
}


    //pausa de la aplicacion(para que no se cierre el codigo)
const pausa = () =>{

    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\nPresione ${'ENTER'.red}\n`, (opt) =>{
            readline.close();
            resolve();
        })

    });
}


module.exports = {
    mostrarMenu, 
    pausa
}