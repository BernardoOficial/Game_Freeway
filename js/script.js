// canvas
let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

// sons do jogo
let colidiu = document.querySelector('#audio1');
let pontos = document.querySelector('#audio2');
let trilha = document.querySelector('#audio3');

function atualizaTela() {
    trilha.play();
    preload();
    cenarioDoJogo();
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    voltaPosicaoInicialDoCarro();
    verificaColisao();
    verificarChegada();
    mostraPlacar();
}


setInterval(atualizaTela, 20);