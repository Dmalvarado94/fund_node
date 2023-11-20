// Agregar contenido al final del arch o Appending.
// fs = file system - Manejo de archivos, leer, modificar
// Todos estos codigos se ejecutan despues del codigo síncrono. (Ej los console.log solitos)
// Si tienes un codigo largo y quieres que vayan en orden los mètodos agrega al final Sync ej: fs.appendFileSync

const fs = require('fs');

fs.appendFile('index.html', '<p>Agregando inf</p>',  (err) => { 
    if (err) {
        throw err;  
     } 
     console.log('Parrafo agregado')
});

// IMP*: si no existe el archivo lo crea.

