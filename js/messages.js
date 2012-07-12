


var kor_cx;
var kor_cy;
var lose = 0;
var i = 0;

function init_var() {
    kor_cx = can_mess.width / 2;
    kor_cy = can_mess.height / 2;
}

function resetuj() {
    i = 0;
    won = 0;
    lose = 0;
}

function gameOver() {
    lose++;
    con_mess.clearRect(0, 0, can_mess.width, can_mess.height);
    $(kankan).css("visibility", "visible");

    con_mess.beginPath();
    con_mess.font = "20pt Andy";
    con_mess.textAlign = 'center';
    con_mess.fillStyle = 'white';
    con_mess.font = "50px Impact";
    con_mess.fillText("YOU LOSE!", can_mess.width / 2, can_mess.height / 2);
    con_mess.lineWidth = 2;
    con_mess.strokeText("YOU LOSE!", can_mess.width / 2, can_mess.height / 2);
    con_mess.lineWidth = 1;

    setTimeout(function () {

        if (lose < 4) {
            con_mess.clearRect(0, 0, can_mess.width, can_mess.height);
        }
    }, 200);

    setTimeout(function () {
        if (lose < 4) {
            gameOver();
        }
        else {
            resetuj();
        }
    }, 500);

    setTimeout(function () {
        $(kankan).css("visibility", "");
    }, 2300);
}


function PlaceYourBet(strpor) {
    i++;
    con_mess.clearRect(0, 0, can_mess.width, can_mess.height);
    $(kankan).css("visibility", "visible");

    con_mess.beginPath();

    con_mess.font = "15pt Andy";
    con_mess.textAlign = 'center';
    con_mess.textBaseline = "middle";
    con_mess.fillStyle = 'white';
    con_mess.font = i + "px Impact";
    con_mess.fillText(strpor, kor_cx, kor_cy);
    con_mess.lineWidth = 2;
    con_mess.strokeText(strpor, kor_cx, kor_cy);
    con_mess.lineWidth = 1;
    setTimeout(function () {
        if (i < 35) {
            con_mess.clearRect(0, 0, can_mess.width, can_mess.height);
        }
    }, 1);

    setTimeout(function () {
        if (i < 35) {
            PlaceYourBet(strpor);
        }
        else {
            resetuj();
        }
    }, 2);

    setTimeout(function () {
        $(kankan).css("visibility", "");
     }, 2300);

}