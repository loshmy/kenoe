﻿var bet = 10;
var canvasbet;
var contextbet;

$('document').ready(function () {

    canvasbet = document.getElementById("bet");
    contextbet = canvasbet.getContext("2d");

    napravibet();
    popunibet(bet);

});

function clearr() {
    if (blokiranje_button == false) {
        clean_v2();
        resetGame();
        clean_game();
    }
}

function playaa() {
    if (blokiranje_button == false) {
        startGame();
    }
}

function play5a() {
    if (blokiranje_button == false) {
        start5Game();
    }
}

function play10a() {
    if (blokiranje_button == false) {
        start10Game();
    }
}

function povecajUlog() {
    if (blokiranje_button == false) {
        bet = bet + 1;
        if (bet > 99)
            bet = 99;
        popunibet(bet);
        pokreni();
    }
}


function smanjiUlog() {
    if (blokiranje_button == false) {
        bet = bet - 1;
        if (bet < 0)
            bet = 0;
        popunibet(bet);
        pokreni();
    }
}

function napravibet() {
    contextbet.beginPath();
    contextbet.arc(canvasbet.width / 2, canvasbet.height / 2, 45, 0, 2 * Math.PI, false);
    contextbet.lineWidth = 5;
}
function popunibet(bet) {

    contextbet.beginPath();
    contextbet.clearRect(0, 0, canvasbet.width, canvasbet.height);
    contextbet.font = "80pt Andy";
    contextbet.fillStyle = 'white';
    contextbet.fillText("$" + bet,80, canvasbet.height / 2 + 25);
}

