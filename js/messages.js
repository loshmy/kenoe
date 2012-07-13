


var kor_cx;
var kor_cy;
var lose = 0;
var ibr = 0;

function init_var() {
    kor_cx = can_poruka.width / 2;
    kor_cy = can_poruka.height / 2;
}

function resetuj() {
    ibr = 0;
    won = 0;
    lose = 0;
}

function gameOver(stra) {
    lose++;
    con_poruka.clearRect(0, 0, can_poruka.width, can_poruka.height);
    $(pause).css("background-image", "none");
    $(pause).css("display", "block");

    con_poruka.beginPath();
    con_poruka.font = "90px Impact";
    con_poruka.textAlign = 'center';
    con_poruka.fillStyle = 'white';
    con_poruka.font = "90px Impact";
    con_poruka.fillText(stra, kor_cx,kor_cy);
    con_poruka.lineWidth = 2;
    con_poruka.strokeText(stra, kor_cx, kor_cy);
    con_poruka.lineWidth = 1;

    setTimeout(function () {
        if (lose < 4) {
            con_poruka.clearRect(0, 0, kor_cx, kor_cy);
        }
    }, 200);

    setTimeout(function () {
        if (lose < 4) {
            gameOver(stra);
        }
        else {
            resetuj();
            setTimeout(function () {
                $(pause).css("display", "none");
                $(pause).css("background-image", "url('images/pauza.png')");
                con_poruka.clearRect(0, 0, can_poruka.width, can_poruka.height);
            }, 2000);
        }
    }, 500);

    
}


function PlaceYourBet(strpor) {
    ibr+=3;
    con_poruka.clearRect(0, 0, can_poruka.width, can_poruka.height);
    $(pause).css("background-image", "none");
    $(pause).css("display", "block");

    con_poruka.beginPath();
    con_poruka.font = "15pt Impact";
    con_poruka.textAlign = 'center';
    con_poruka.textBaseline = "middle";
    con_poruka.fillStyle = 'white';
    con_poruka.font = ibr + "px Impact";
    con_poruka.fillText(strpor, kor_cx, kor_cy);
    con_poruka.lineWidth = 2;
    con_poruka.strokeText(strpor, kor_cx, kor_cy);
    con_poruka.lineWidth = 1;
    setTimeout(function () {
        if (ibr < 110) {
            con_poruka.clearRect(0, 0, can_poruka.width, can_poruka.height);
        }
    }, 1);

    setTimeout(function () {
        if (ibr < 110) {
            PlaceYourBet(strpor);
        }
        else {
            resetuj();
            setTimeout(function () {
                if (flag == false) {
                    $(pause).css("display", "block");
                }
                else {
                    $(pause).css("display", "none");
                }
                $(pause).css("background-image", "url('images/pauza.png')");
                con_poruka.clearRect(0, 0, can_poruka.width, can_poruka.height);
            }, 2000);
        }
    }, 2);


}



