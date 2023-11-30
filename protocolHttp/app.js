const http = require('http');
// Metodo que crea un servidor capaz de recibir funciones
// req = Contiene la solicitud http del servidor
// res = representa la respuesta http que se envia al cliente (Navegador)
const servidor = http.createServer((req, res) => {
// Cada vez que refresh la pag este metodo se repetira. 
// end() = finaliza-muestra en pant una respuesta al cliente (Navegador)
    console.log('Refrescaste la pagina')
    res.end('Hola, mundo');
});
// Conexion puerto con .listen()
// Ejecuta el codigo y En el navegador pon: localhost:8080
const puerto = 8080;
servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando...${puerto}`)
});
