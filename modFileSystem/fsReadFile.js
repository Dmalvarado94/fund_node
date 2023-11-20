// Lectura del archivo en la consola.

const fs = require('fs');

fs.readFile('index.html', 'utf-8', (err, contenido) => { 
    if (err) {
        console.log(err);  // 2 alt) throw err;
     } else { 
        console.log(contenido);
     }
});

//Recuerda hacer un cd a la carpeta actual.
// Ese codigo incluye (nombre archivo, tipo de texto esperado utf-8, funcion que captura error)