function holaMundo() {
    console.log('Hola, mudno!');
}

function holaPersona(nombre) {
    console.log(`Hola ${nombre}!`);
}

function dobleDelNumero(numero) {
    return numero * 2;
}

function promedioDeNumeros(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}

function numeroMayor(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}

function mutiplocarseAsiMismo(numero) {
    return numero * numero;
}


holaMundo();
holaPersona('Fepsa');
let resultadoDoble = dobleDelNumero(5);
console.log(resultadoDoble);

let promedio = promedioDeNumeros(10, 10, 10);
console.log(promedio);

let numMayor = numeroMayor(5, 10);
console.log(numMayor);

let resultado = mutiplocarseAsiMismo(5);
console.log(resultado);
