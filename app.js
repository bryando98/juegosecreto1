let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10

function asignarTextoElemento(elemento, texto) {
    let elementoHTLM = document.querySelector(elemento);
    elementoHTLM.innerHTML = texto; 
    return;
    
}

function verificarIntento(params) {
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ("p",`acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"} me debes una chupada`); 
        document.getElementById("reiniciar").removeAttribute("disabled");   } else { 
        if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento("p" , "el numero secreto es menor");
            } else {
                // el usuario no acerto//
                asignarTextoElemento("p" , "el numero secreto es mayor");
            }
            }
            intentos++;
            limpiarCaja();
return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    // si ya sorteamos todos esos numeros //
    if (listaNumerosSorteados.length == numeroMaximo)  {
        asignarTextoElemento("p","ya se sortearon todos los numeros posibles");
    } else {
    // si el numero generado esta incluido en la lista //
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}
function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";

}

function condicionesIniciales() {
    asignarTextoElemento("h1","juego del numero secreto");
    asignarTextoElemento("p",`indica un numero del 1 al ${numeroMaximo}`); 
    intentos = 1;  
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego() {
    //limpiar caja//
    limpiarCaja();
    //indicar mensaje de intervalo de numeros//
    //generar numero aleatori//
    // inicializar el número de intentos//
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego//
    
    document.querySelector("#reiniciar").setAttribute("disabled" , "true");
}
condicionesIniciales();
