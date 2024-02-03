//El metodo querySelector permite acceder a cada uno de los elementos
//let titulo = document.querySelector('h1');
//con el metodo innerHTML en este ejemplo se puede agregar un titulo
//titulo.innerHTML = 'Juego del numero secreto';

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un numero del 1 al 10';
//Ctrl F para buscar una palabra en el codigo

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 3;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//typeof devuelve el tipo de dato de un valor
//Una funcion es un bloque de codigo que esta realizando algo
function verificarIntento() {
    //Se usa getElementById() y despues el .value para obtener el valor de un elemento a traves de su id
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //el triple igual === sirve para validar que la comparacion sea en valor y en tipo de dato
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'} `);
        //permite remover cualquier atributo de ese boton especificamente
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('#intentar').setAttribute('disabled', true);
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    //Se puede usar querySelector para obtener un valor por su id usando #
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon los numeros posibles');
    } else {
        //Si el numero generado esta incluido en la lista
        //includes hace que se recorra el arreglo para verificar si ya existe el valor que se pone 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    document.getElementById('intentar').removeAttribute('disabled');
}

condicionesIniciales();

// .push permite agregar un valor al arreglo
// .pop permite eliminar un valor al arreglo

