const fs = require('fs');
const colors = require('../config/color.config');

const crearArchivo = ( base = 5, listar, hasta) => {

    let salida = '';
    let consola = '';

    return new Promise( (resolve, reject) => {

        console.log('=============='.info);
        console.log(`Tabla - ${ base }.txt`.warn);
        console.log('=============='.info);
    
        for(let i = 1; i <= hasta; i++){ 
            salida += `${ base } * ${ i } = ${ base*i }\n`;
            consola += `${ base } ${ '*'.info } ${ i } ${ '='.info } ${ base*i }\n`;
        }

        ( listar ) ? console.log(consola) : false
    
        fs.writeFile(`./salida/tabla-${ base }.txt`, salida, (err) =>{
            (err) ? function(){throw err}() : console.log('Archivo Guardado Exitosamente'.rainbow);
        });
        
        ( salida ) ? resolve(`tabla-${ base }.txt`) : reject(`Ha ocurrido un error`);
    });
}

module.exports = {
    crearArchivo
}