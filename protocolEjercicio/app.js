const http = require('http');
const cursos = require('./cursos');  // tambien podriamos desesctrurar const {cursos}, eso haria que no sea necesario usar . para llegar Ej: cursos.infoCursos.programacion

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
            console.log(`El metodo usado no puede ser manejado por el servidor:  ${method}`);
    } 
});

function manejarSolicitudGET(req, res) {
    // Recuerda que req.url trae el path o camino, la asignamos a const path
    const path = req.url;
    if (path === '/') {
        res.statusCode = 200;  // Podemos configurar los status Code a gusto. aunque sera 200 x defecto
        res.end('Bienvenidos a mi primer servidor y API creado con Node.js')  // end imprime en pantalla
    } else if (path === '/cursos') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos));  // traemos JS de cursos.js
    } else if (path === '/cursos/programacion') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.programacion));  // traemos solo el {objeto} programacion
    } else if (path === '/cursos/matematicas') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.matematicas));
    } return; // Importante para evitar que continúe el flujo y responda nuevamente fuera del evento 'end'
   
    // Si no encuentra ningun path condiciono un 404.
    res.statusCode = 404;
    res.end('El recurso solicitado no existe...');
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;  // Extraemos el mismo path del GET

    if (path === '/cursos/programacion') {
     
        let cuerpo = '';
        // Met.on (El evento data es default, trae info o contenido, luego iremos metiendo esa info dentro de Cuerpo.)
        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });

        req.on('end', () => {
            console.log(cuerpo);  
            console.log(typeof cuerpo);  // String // Corrobora que llegue el dato
            cuerpo = JSON.parse(cuerpo);
            console.log(typeof cuerpo); 
            console.log(cuerpo.titulo);  // titulo viene del JSON de index.http POST
            res.end('El servidor recibio una solicitud POST para cursos/programacion');
        }); return; // Importante para evitar que continúe el flujo y responda nuevamente fuera del evento 'end'
    }
        // Si no se cumplió la condición, se envía una respuesta de error
        res.statusCode = 404;
        res.end('La ruta solicitada no existe...');
}


// Configuramos puerto con listen()
const PUERTO = 8080;
servidor.listen(PUERTO, () => {
    console.log(`El servidor esta conectado al puerto: ${PUERTO}`)
});

// http://localhost:8080/cursos/programacion