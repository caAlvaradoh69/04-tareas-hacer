const { v4: uuiv4 } = require('uuid');

 class Tarea { 

    id = '';
    desc = '';
    completadoEn = null;

    constructor( desc ) {

        this.id = uuiv4();
        this.desc = desc;

    }



}

module.exports = Tarea;