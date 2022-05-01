
const fs = require('fs');
const colors = require('colors');

// funcion async que por defecto devuelve una promesa
const crearArchivo = async( base = 5, listar, hasta = 10)=>{
  try {
    console.log("-------------------".green);
    console.log(`Tabla del ${base} hasta ${hasta}`);
    console.log("-------------------".green);
    let salida, consola = '';
  
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base*i}\n`;
      consola += `${base} ${'x'.red} ${i} ${'='.red} ${base*i}\n`;
    }
    if(listar){ console.log(consola)};
    
    // si se isa el import va el nombre de la funcion sin el fs
    // con el writeFileSync si surge un error hay que atraparlo con el try catch
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
    return `tabla-${base}.txt`;
    
  } catch (err) {
    throw err; // va al catch en la llamada de la promesa
  }
}

module.exports = {
 crearArchivo,
}

// funcion que devuelve una promesa
/*
const crearArchivo = ( base = 5 )=>{

  return new Promise((resolve, reject)=>{
    console.log("-------------------");
    console.log(`Tabla del ${base}`);
    console.log("-------------------");
    let salida = '';
  
    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base*i}\n`;
    }
    console.log(salida);
  
    // si se isa el import va el nombre de la funcion sin el fs
    // con el writeFileSync si surge un error hay que atraparlo con el try catch
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    
    resolve(`tabla-${base}.txt`);
  })
}
*/