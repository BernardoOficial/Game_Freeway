// imagens do jogo
let fundoEstrada;
let imgDoAtor;

let urlImagemCarro = [
    "./imagens/carro-1.png",
    "./imagens/carro-2.png",
    "./imagens/carro-3.png",
    "./imagens/carro-1.png",
    "./imagens/carro-3.png",
    "./imagens/carro-2.png"
];

let imagensDosCarros = [];

function preload() {

    for (let i = 0; i < urlImagemCarro.length; i++) {

        imagensDosCarros[i] = new Image();
        imagensDosCarros[i].src = urlImagemCarro[i];
    }
}

function cenarioDoJogo() {

    fundoEstrada = new Image();
    fundoEstrada.src = "./imagens/estrada.png";
    fundoEstrada.onload = function () {
        pincel.drawImage(fundoEstrada, 0, 0, 800, 600);
    }
}


