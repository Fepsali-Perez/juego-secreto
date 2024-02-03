function calcularIMC(altura, peso) {
    return peso / (altura * altura);
}

let imc = calcularIMC(105, 1.80);
console.log(imc);

function calcularFactorial(numero) {
    let factorial = 1;
    for (numero; numero > 0; numero--) {
        factorial *= numero;
    }
    return factorial;
}

let resultFactorial = calcularFactorial(5);
console.log(resultFactorial);

function convertirADolar(valor) {
    return valor * 4.80;
}

let dolar = convertirADolar(5);
console.log(dolar);

function areaRectangulo(alto, ancho) {
    console.log(ancho * alto);
}

areaRectangulo(2, 4);

function areaYPerimetroDeCirculo(radio) {
    console.log('area: ' + (3.14 * (radio * radio)) + 'perimetro: ' + (3.14 * (radio * 2)));
}

areaYPerimetroDeCirculo(5);

function tablaDeMultiplicar(numero) {
    let tabla;
    for (let num = 0; num <= 10; num++) {
        tabla += numero * num + '\n';
    }
    return tabla;
}

let tablaDeMultiplicacion = tablaDeMultiplicar(5);
console.log(tablaDeMultiplicacion);