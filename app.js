const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');



let comando = argv._[0]

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', colors.red(`${archivo}`))).catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}

//let base = 'aaa';

//console.log(process.argv);

//let argv2 = process.argv;

//console.log(argv.base);
//console.log('Limite', argv.limite);
//console.log(argv2);

//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]


//crearArchivo(base)
//  .then(archivo => console.log(`Archivo creado: ${ archivo}`)).catch(e => console.log(e));