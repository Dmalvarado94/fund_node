// resolve = Exitosa  // reject = Rechazada

const promesaCumplida = true;
const miPromesa = new Promise((resolve, reject) => { 
    setTimeout(() => { 
        if(promesaCumplida) { 
            resolve('¡Promesa Cumplida!');
        } else {
            reject('Promesa rechazada :(')
        }
    }, 3000);
});
// Aqui otorgamos el resolve dentro de 'valor' y además la imprimimos.
miPromesa.then((valor) => { 
    console.log(valor);
})

