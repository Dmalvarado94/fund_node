// Export de modulos

function saludar (nombre) {
    return `Hola ${nombre}`
}
// Lo mismo version flecha
// const saludar = (nombre) => `Hola ${nombre}`
// saludar("Daniel");

// ¿Y si queremos exportar una segunda función?
function holaMundo() {
return `Hola Mundo`;
}
//console.log(holaMundo());

// Palabra reservada que exporta un objeto con el código respectivo {}
// primer saludar = nombre variable modificable,  segundo saludar = funcion que quieres exportar

// module.exports.saludar = saludar;
// console.log(module.exports);  // { saludar: [Function: saludar] }

// // Aqui exportariamos la segunda función, fijate como cambia el objeto si modificas algo

// module.exports.holaMundo = holaMundo;
// console.log(module.exports);


// Existe una tercera forma de exportar varias funciones, quedará comentada y tu puedes elegir cual te parezca mas comoda.
module.exports = { 
    saludar : saludar,
    holaMundo : holaMundo
};