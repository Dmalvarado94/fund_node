// setInmediate() // Aqui no especificamos tiempo, si no que la fila de eventos sincronos
// incluye (funcion, argumento1, argumento2)
function mostrarInmediate(string){
    console.log(`Estoy aprendiendo ${string}`)
}
console.log('Antes del setImmediate()');
setImmediate(mostrarInmediate,'Inmediate');
console.log('Despues del setImmediate()');

// setTimeOut() Ejecuta el codigo luego de milisegundos especificos.
// incluye (función, retraso, argumento/s)
function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`)
}
setTimeout(mostrarTema, 2000, 'Node');

function sumar(a, b){
    console.log(a + b);
}
// Si hay mas de un argumento como en este caso se separan con ,
setTimeout(sumar, 2500, 5, 10)



// setInterval (funcion, intervalos, arg1, arg2...)
// Sirve para hacer un loop en consola, no deja de imprimir.
setInterval(sumar, 1000, 5, 10)
// Sal con ctrl + c