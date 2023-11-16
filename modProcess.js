// console.log(process);

// Entrega un objeto como USERNAME, dominio del usuario, direc de WIN, etc.
//console.log(process.env);

// [node, app.js, 6, 7]
//    0    1      2  3 
console.log(process.argv);
// en consola pon: node app.js  6,7
console.log("[1] es la dirección:", process.argv[1]);


// Analisis de memoria del codigo. 
console.log(process.memoryUsage());
 