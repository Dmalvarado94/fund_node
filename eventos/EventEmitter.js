const EventEmitter = require('events');
// Por convencion las clases parten con mayusculas Ej: "EventEmitter"

// console.log(EventEmitter);  // Revisa en consola todo lo que incluye

// Pasos: 
// 1) Instanciamos el nuevo evento
const emisorProductos = new EventEmitter();
// 2) cuando esté .on y se active una 'compra' desencadena una fx, el valor (total) es opcional, puede ir vacio
emisorProductos.on('compra', (total) => {
    console.log(`Se realizo una compra por ${total}`)
 });
// 3) Se emite el evento ('Compra')
 emisorProductos.emit('compra', 1000);