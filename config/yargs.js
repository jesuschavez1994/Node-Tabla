const argv = require('yargs')
                            .option('b', {
                                alias: 'base',
                                type: 'number',
                                demandOption: true,
                                describe: 'Es la base de la tabla de multiplicar'

                            })
                            .option('l', {
                                alias: 'listar',
                                type: 'boolean',
                                default: false,
                                describe: 'Muestra la tabla en consola'
                            })
                            .option('h', {
                                alias: 'hasta',
                                type: 'number',
                                demandOption: false,
                                describe: 'Define hasta donde queremos hacer la multiplicación'
                            })
                            .check((argv, option) => {
                                if( isNaN( argv.b ) ){
                                    throw 'La base debe ser un número'
                                }else {
                                    return true 
                                }
                            })
                            .argv;

module.exports = argv;