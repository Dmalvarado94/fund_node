// Importaremos solo una propiedad de saludos.js
// Viene dentro de las llaves { } ya que estamos trabajando un objeto  { saludar: [Function: saludar] }
const {saludar, holaMundo} = require('./saludos.js')


console.log(holaMundo());
console.log(saludar("desestructuracion"));

