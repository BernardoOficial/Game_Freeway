// variáveis carro.
let xCarros = [850, 850, 850, 850, 850, 850];
let yCarros = [60, 150, 230, 320, 400, 480];
let velocidadeCarros = [8, 7, 10, 6, 7, 9];
let comprimentoCarro = 60;
let alturaCarro = 50;

function mostraCarro() {

    preload();
    for (let i = 0; i < imagensDosCarros.length; i++) {

        imagensDosCarros[i].onload = function () {
            pincel.drawImage(imagensDosCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
        }
    }
}

function movimentaCarro() {

    for (let i = 0; i < velocidadeCarros.length; i++) {

        xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicialDoCarro() {

    for (let i = 0; i < xCarros.length; i++) {

        if (passouTodaAtela(xCarros[i])) {
            xCarros[i] = 1000;
        }
    }
}

function passouTodaAtela(xCarro) {
    return xCarro <= -50;
}