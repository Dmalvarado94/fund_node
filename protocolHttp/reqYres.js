const http = require('http');

const servidor = http.createServer((req, res) => {
    //console.log('===> req (solicitud)');
//  console.log(req);  // El req trae un JSON grande de info, buscaremos solo las mas utiles.
    // console.log(req.url); // Nos trae el path (elCaminoPath): http://localhost:8080/elCaminoPath
    // console.log(req.method); // GET 
    // console.log(req.headers); // Trae los headers
    console.log('===> res (respuesta)');
//  console.log(res);  // El res trae un JSON grande de info, buscaremos solo las mas utiles.
    console.log(res.statusCode); // 200
    res.statusCode = 404;  // Podemos sobreescribir el status code
    console.log(res.statusCode); // 404
    // Podemos configurar elementos de la cabezera (Headers) tambien
    res.setHeader('content-type', 'application/json');  // Agregamos 2 headers
    console.log(res.getHeaders());  // Visualizamos los nuevos Headers

    res.end('Hello world');
});

const puerto = 8080;
servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto: ${puerto}`)
});