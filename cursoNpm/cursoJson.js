const curso = require('./curso.json');
// JavaScript Object Notation (JSON)
// Es un formato de texto ideal para transportar o almacenar info.

// Ya podemos obtener lo que trae el curso.json
//console.log(curso);
// console.log(typeof curso);
// console.log(curso.titulo);
// console.log(curso.temas);



// json.parse // Transforma caracteres de objeto JS a JSON
// Transformaremos el siguiente Objeto JS a JSON:
let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 45,
    "temas": [
        "Javascript",
        "Node.js"
    ], 
    "esPublico": true
                };

// console.log(typeof infoCurso);   // R: Object

// Con el comando JSON.stringify() pasamos a JSON
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

// -----------------------------------------------
// Ahora para hacer lo contrario
// Desde una cadena de caracteres a -> Objeto
// JSON.parse();

let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);


// Fijate en la diferencia en Consola.s
// Solo podemos obtener el tipo de dato de un Objeto EJ:
console.log(infoCursoObjeto.titulo);  // Aprende Node.js