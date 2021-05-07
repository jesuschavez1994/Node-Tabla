
// const { argv, option } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');



/* 
5 * 1 = 5
5 * 2 = 10
.
.
.
5 * 10 = 50
*/

// console.log( process.argv );
console.log(argv);
// console.log('Base Yargs:', argv.base);

// const [ , , argv3 = 'base=5'] = process.argv;
// const [ , base = 5] = argv3.split("=");
// console.log(argv3, base);

crearArchivo( argv.b, argv.l, argv.h )
            .then( nameFile => {console.log(nameFile, 'creado')} )
            .catch(err =>{
            console.log(err)
});
