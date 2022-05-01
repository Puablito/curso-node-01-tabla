const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors');

// import { writeFile } from 'fs';
console.clear();

// ver los argumentos enviados por consola
// forma correcta
console.log(argv);
// console.log(argv.base);

crearArchivo( argv.base, argv.listar, argv.hasta )
  .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
  .catch(err => console.log(err));