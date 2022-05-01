const argv = require('yargs')
  .options({
    'b':{
      alias:"base",
      type:'number',
      demandOption:true,
      describe:'Es la base de la tabla de multiplicar'
    },
    'l':{
      alias:'listar',
      type:'boolean',
      default:false,
      describe:'Muestra la tabla'
    },
    'h':{
      alias:'hasta',
      type:'number',
      demandOption:true,
      describe:'Numero maximo de la tabla'
    }
  })
  .check((argv)=>{
    // chequea el argumento, con la funcion que realicemos
    if( isNaN(argv.base)){
      throw "la base tiene que ser un numero"
    }
    if( isNaN(argv.hasta)){
      throw "El valor 'hasta' tiene que ser un número"
    }
    return true // si esta ok, tiene que continiar
  })
  .argv;

module.exports = argv;