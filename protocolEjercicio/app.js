const http = require('http');
const cursos = require('./cursos');

const servidor = http.createServer((req, res) => {
    // Definimos que ocurre cuando el servidor tiene una solicitud 
    // Desestructuramos method que viene de req.method
    const {method} = req;

    switch(method){
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            console.log(`El metodo usado no puede ser manejado por el servidor:  ${method}`)
    }
});

function manejarSolicitudGET(req, res) {
    // Recuerda que req.url trae el path o camino, la asignamos a const path
    const path = req.url;
    if (path === '/') {
        res.statusCode = 200;  // Podemos configurar los status Code a gusto.
        res.end('Bienvenidos a mi primer servidor y API creado con Node.js')  // end imprime en pantalla
    } else if (path === '/cursos') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos));  // traemos JS de cursos.js
    } else if (path === '/cursos/programacion') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.programacion));  // traemos solo el {objeto} programacion
    }
    // Si no encuentra ningun path condiciono un 404.
    res.statusCode = 404;
    res.end('El recurso solicitado no existe...');
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;  // Extraemos el mismo path del GET

    if (path === '/cursos/programacion') {
        res.statusCode = 200;
        res.end('El servidor recibio una solicitud POST para cursos/programacion')  // Normalmente este tipo de Op. se trabajan con Frameworks como Express, asi que no detallaremos.
    }
}

// Configuramos puerto con listen()
const PUERTO = 8080;
servidor.listen(PUERTO, () => {
    console.log(`El servidor esta conectado al puerto: ${PUERTO}`)
});

// http://localhost:8080/cursos/programacion