// resolve = Exitosa  // reject = Rechazada
// Factor detonante
const promesaCumplida = false;
// Creamos el objeto con la promesa y dentro una Asincronía
const miPromesa = new Promise((resolve, reject) => { 
    setTimeout(() => { 
        if(promesaCumplida) { 
            resolve('¡Promesa Cumplida!');
        } else {
            reject('Promesa rechazada :(')
        }
    }, 3000);
});
// Ahora manejamos la promesa Cumplida & Rechazada en constantes independientes.
const manejarPromesaCumplida = (valor) => { 
    console.log(valor);
};
const manejarPromesaRechazada = (razonRechazo) => { 
    console.log(razonRechazo);
};
// Finalmente en la promesa principal.then()  encapsulamos el resolve y reject
miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);

