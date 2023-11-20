// Para Remplazar todo el contenido del archivo:
const fs = require('fs');

fs.writeFile('index.html', 'Nuevo contenido Total',  (err) => { 
    if (err) {
        throw err;  
     } 
     console.log('Contenido del html modif completamente')
});