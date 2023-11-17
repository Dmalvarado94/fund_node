// Importación de módulo/s. (Van en una constante. = require)
const saludos = require("./saludos.js");

// accedemos a la variable saludo, esta incluye un objeto donde esta la funcion saludar,
// Recuerda que viene de { saludar: [Function: saludar] }
console.log(saludos.saludar("Dani"));

// Esto viene de la segunda función, reutilizamos el saludo que contiene las dos funciones del primer modulo
console.log(saludos.holaMundo());