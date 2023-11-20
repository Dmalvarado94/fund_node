// Renombrar un archivo
const fs = require('fs');
//         nombre antiguo, nombre nuevo, err
fs.rename('index.html', 'main.html', (err)=>{
    if(err){
        throw err;
     }
     console.log('Nombre cambiado exitosamente');
 });

// La mayoría de estos métodos te pide crear la funcion (err)
// por eso la incluye, no te asustes, solo esta capturando el 
// error.