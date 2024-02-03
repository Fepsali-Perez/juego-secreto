let listaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotin', 'Python'];
let listaNumeros = [8, 7, 8, 10, 9];
let numeros = [15, 8, 25, 5, 12];

lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');


function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);
    }
}

mostrarLenguagesSeparadamente();

function lenguajes() {
    console.log(lenguajesDeProgramacion);
}

lenguajes();

function ordenInversoLenguajes() {
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguajesDeProgramacion[i]);
    }
}

ordenInversoLenguajes();

function promedio() {
    let suma = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        suma += listaNumeros[i];
    }
    return suma / listaNumeros.length;
}

let media = promedio();
console.log(media);

function numeroMayorYMenor(numeros) {
    let numMayor = numeros[0];
    let numMenor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numMayor) {
            numMayor = numeros[i];
        }
        if (numeros[i] < numMenor) {
            numMenor = numeros[i];
        }
    }
    console.log('Mayor:', numMayor);
    console.log('Menor:', numMenor);
}

numeroMayorYMenor(numeros);

function sumaDeElementos(listaNumeros) {
    let suma = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        suma += listaNumeros[i];
    }
    return suma;
}

let suma = sumaDeElementos(listaNumeros);
console.log('Suma:', suma);

function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i; // Retorna el índice del elemento encontrado
        }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

