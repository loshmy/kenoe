var bet = 10;
var canvasbet;
var contextbet;

$('document').ready(function () {

    canvasbet = document.getElementById("bet");
    contextbet = canvasbet.getContext("2d");

    napravibet();
    popunibet(bet);

});

function clearr() {
    resetGame();
    clean_game();
}

function playaa() {
    startGame();    
}

function play5() {
    start5Game();
}

function play10() {
    start10Game();
}

function povecajUlog() {
    bet = bet + 1;
    if (bet > 99)
        bet = 99;

 
    popunibet(bet);
}


function smanjiUlog() {
    bet = bet - 1;
    if (bet < 0)
        bet = 0;
    popunibet(bet);
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

