// Simulacro Math.random (0 o 1) para tener casos aleatoreos con cliente.
const estatusPedido = () => {
    const estatus = Math.random() < 0.8;
    console.log(estatus);
    return estatus;
};
// Instanciamos promesa
const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(estatusPedido()) { 
            resolve('Pedido exitoso')
        } else {
            reject('Ocurrio un error.')}
    }, 3000);
});
// .then() de la promesa principal, resolve y reject mas compacto
// .catch() es similar al then(), solo que este captura el error.
miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .catch((mensajeDeRechazo) => {
     console.log(mensajeDeRechazo);
     });

// Si hubieramos capturado con .then requiere un arg null.
    // .then(null,(mensajeDeRechazo) => {
    //     console.log(mensajeDeRechazo);
    // });

