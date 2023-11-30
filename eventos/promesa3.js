// Async/Await Toda funcion con Async retorna una promesa
function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto} del Menú`);
        setTimeout(() => {
            if (producto === 'taza'){
                resolve('Ordenando una taza del menú');
            } else {
                reject('Este producto no está disponible')
            }
        }, 2000)
    });
 }

 function procesarPedido(respuesta){
    return new Promise((resolve) => {
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(() => {
            resolve('Gracias por tu compra. Pedido finalizado');
        }, 4000);
    })
 }
// Encadenamos promesas (Chaining process)
//  ordenarProducto('taza')
//     .then(respuesta => {
//         console.log('Respuesta recibida');
//         console.log(respuesta);
//         return procesarPedido(respuesta);
//     })
//     .then(respuestaProcesada => {
//         console.log(respuestaProcesada);
//     })
//     .catch(error => {
//         console.log(error);
//     });
// Se recomienda trabajar con async await ya que funciona linea x linea
async function realizarPedido(producto){
    try{
    const respuesta = await ordenarProducto(producto);   
    console.log('Respuesta recibida');
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
    } catch (error) {
        console.log(error);
                    }
}
realizarPedido('taza');
