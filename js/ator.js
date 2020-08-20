// variáveis ator
let xAtor = 100;
let yAtor = 560;
let pontosAtor = 0;

// variáveis do placar
let placar = document.createElement('p');
placar.classList.add('placar')

// captura tecla do usuário
document.onkeydown = movimentaAtor;

function mostraAtor() {

    imgDoAtor = new Image();
    imgDoAtor.src = "./imagens/ator-1.png";
    imgDoAtor.onload = function () {
        pincel.drawImage(imgDoAtor, xAtor, yAtor, 30, 30);
    }
}

function movimentaAtor(evento) {

    let keycode = evento.keyCode;

    if (keycode == 37) {
        if (xAtor - 5 > 0) xAtor -= 5;
    }
    if (keycode == 38) {
        yAtor -= 5;
    }
    if (keycode == 39) {
        if (xAtor + 5 < 800 - 30) xAtor += 5;
    }
    if (keycode == 40) {
        if (yAtor + 5 < 560) yAtor += 5;
    }
}

function verificaColisao() {

    for (let i = 0; i < imagensDosCarros.length; i++) {

        if (!(yAtor < yCarros[i] - 25 || yAtor > yCarros[i] + 45) && !(xAtor < xCarros[i] - 25 || xAtor > xCarros[i] + 45)) {

            colidiu.play();
            voltaPosicaoInicial();
            perdePontos();
        }
    }
}

function voltaPosicaoInicial() {

    return yAtor = 560;
}

function verificarChegada() {

    if (yAtor + 30 < 60) {

        pontos.play();
        chegou();
    }
}

function chegou() {

    return marcaPontos();
}

function mostraPlacar() {

    let ponto = document.createTextNode("Seus pontos: " + pontosAtor);
    placar.textContent = '';
    placar.appendChild(ponto);

    let body = document.body;
    body.appendChild(placar);
}

function marcaPontos() {

    pontosAtor++;
    yAtor = 560;
}

function perdePontos() {

    pontosAtor--;
    if (pontosAtor <= 0) {
        pontosAtor = 0;
    }
}