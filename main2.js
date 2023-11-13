let Usuario = {
    edad: 25,
};

if( Usuario.edad >= 18){
    console.log('Eres mayor de edad');
} else{
    console.log('Eres menor de edad');
};

let build ='Construir';
let accion = build;

switch (accion) {
    case 'Construir':
        console.log('la accion es construir');
        break;
    default:
        console.log( 'No se comprende la accion');
};
let numero = 2;
let autorizado = numero === 1 ? 'El numero ingresado es impar' : 'El numero ingresado es par';
console.log(autorizado);


