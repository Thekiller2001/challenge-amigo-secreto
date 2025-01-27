// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let longitudLista = 0;

console.log(listaAmigos);

function limparCaja(){
    //let valorCaja = document.querySelector("#valorUsuario");
    //valorCaja.value = "";

    valorCaja = document.querySelector("#amigo").value = "";
};

function sortearAmigo(){
    let amigoRandom = Math.floor(Math.random()*listaAmigos.length);
    if (amigoRandom == -1){
        return amigoSecreto;
    } else{
        console.log(amigoRandom)
        console.log(listaAmigos[amigoRandom]);
        let muestraamigoSecreto = document.querySelector("#resultado");
        muestraamigoSecreto.innerHTML = listaAmigos[amigoRandom];
        }
};


function mostrarAmigos(){
    let muestraLista = document.querySelector("#listaAmigos");
    muestraLista.innerHTML = listaAmigos.join("<br>");
}

function agregarAmigo(){
    let amigoAgregado = document.getElementById("amigo").value;
    listaAmigos.push(amigoAgregado);
    longitudLista = listaAmigos.length;
    console.log(longitudLista);
    console.log(amigoAgregado);
    console.log(listaAmigos);
    limparCaja();
    mostrarAmigos();
};


