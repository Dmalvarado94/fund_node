// os = Operative System
const os = require('os');

// Te indica el sistema operativo que se esta usando
console.log(os.type());  // Windows_NT

// Te indica la ubicación del codigo
console.log(os.homedir()); // PS C:\Users\Dani\Documents\cursoNode>

// Te indica la cantidad de segundos desde que se inicio el OS.
console.log(os.uptime()); // 610537.359