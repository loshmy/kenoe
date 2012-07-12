
var Objekat;
var can_left;
var con_left;
var con_right;
var can_right;
var can_mess;
var con_mess;
var mess_x=0;
var mess_y=0;
var a;
var b;
var pos_a;
var pos_b;
var brojac=0;
var flag;
var Dolazak;//informacije o korisniku
var crtaj_boja = true; // 
var start_i = -1; // RESETOVATI NA nULU KAD SE IDE NOVI KRUG .... PLAY5.....
var niz_mid = ["", "", "", "", "", "", "", "", "", ""]; //NIZ POLJA KOJE JE KORISNIK IZABRAO
var crtaj_color;
var niz_br = new Array();
var runda = 0;//odigrane runde
var hits;//broj pogodaka u toku jedne runde
var blokiranje_button = false;

var koliko_igram;


//------------------NIZ ZA IZVUCENE BROJEVE
var brbr;
var array = new Array(20);

for (brbr = 0; brbr < 20; brbr++) {
    array[brbr] = {
        "broj": "",
        "boja": "red"
    };
}

    var korisnik = {

        "ime": "",
        "prezime": "",
        "mail": "",
        "ID": "",
        publish_actions: undefined
    }

//----------//----------//----------//----------//----------//----------//----------//----------


    function init_all() {
        zoviComunicationOnStart();


        canvasLoading = document.getElementById("canvasLoading");
        if (canvasLoading != null) {
            contextLoading = canvasLoading.getContext("2d");
            zapamtiSlikuLoading();
        }

        canvas = document.getElementById("leviLogo");
        context = canvas.getContext("2d");
        zapamtiSliku();


        canvasD = document.getElementById("desniLogo");
        contextD = canvasD.getContext("2d");
        zapamtiSlikuD();


        can_mess = document.getElementById("kankan");
        con_mess = can_mess.getContext("2d");

        canvasL = document.getElementById("canvas");
        contextL = canvasL.getContext("2d");

        canvas_D_tab = document.getElementById("canvas1");
        context_D_tab = canvas_D_tab.getContext("2d");


        popuni_desno_tab();
        popuni();

        Pauziraj();
        init_var();

        canvascredit = document.getElementById("credit");
        contextcredit = canvascredit.getContext("2d");
        popunicredit(credit);

    }

    //Funkcija za komunikacija sa servisom na startu i u toku igre ..

    function zoviComunicationOnStart() {
        if (korisnik.mail != "") setTimeout(function () { ComunicationOnStart(); }, 500);
        else {
            korisnik.mail = "lol@lol.com";
            setTimeout(function () { ComunicationOnStart(); }, 500);

        }
    }


    function ComunicationOnStart() {

        $.ajax(
        {
            type: "GET",
            contentType: "application/json; charset=utf-8",
            url: "http://edit12.comtrade.com/KenoService/KenoService.svc/getStart?i&p=&e=" + korisnik.mail,
            data: "",
            dataType: "jsonp",
            success: function (data) {
                Objekat = data.GetStartResult;
                popunicredit(Objekat.Credit);	
				credit=Objekat.Credit;
				korisnik.ID=Objekat.User_Id;
                setTimeout(function () { hideLoading(); }, 1000);
            },
            error: function () {

                console.log("Greska u komunikaciji!");
            }


        });

	
    }
    function clean_game() {
        

        for (var hmm = 0; hmm < 80;hmm++ )
            if ( $(document.getElementById("k" + hmm )).css("border-style") == "inset"  )
                $(document.getElementById("k" + hmm)).css("background-color", "#87b9c2");
            else
                $(document.getElementById("k" + hmm )).css("background-color", "" );

            start_i = -1;

            for (var GRAR = 0; GRAR < 20; GRAR++) {
                array[GRAR].boja = "red";
            }

    }
    
    function resetGame() {
        console.log("Usao u reset igre");
        brojac = 0;
        console.log("resetovana igra");
    }

    function startGame() {
        blokiranje_button = true;
        clean_game();

        hits = 0;
        var k = 0;

        for (i = 0; i < niz_mid.length; i++) {
            if (niz_mid[i] != "") { niz_br[k] = (niz_mid[i][1] + niz_mid[i][2]); niz_br[k] = parseInt(niz_br[k]); k++; }
        }

        if (k > 2 && bet != 0 && bet <= credit) {
            runda++;
            pokreni(); // pokretanje leve tabele
            popuni_desno_tab(); // pokretanje desne tabele
            $.ajax(
        {
            type: "GET",
            contentType: "application/json; charset=utf-8",
            url: "http://edit12.comtrade.com/KenoService/KenoService.svc/Igra?id=" + korisnik.ID + "&e=" + korisnik.mail + "&u=" + bet + "&o=" + niz_br,
            data: "",
            dataType: "jsonp",
            success: function (data) {
                Dolazak = data.OdigrajIgruResult;
                proveriDobitke();
            },
            error: function () {
                console.log("Communication Error!");
            }
        });
        }
        else {
            blokiranje_button = false;
            $(kankan).css("visibility", "hidden");
        }
    }

/*function start5Game() {
    brojac++;
    setTimeout(function () {
        if (brojac < 6) {
            clean_game();
            startGame();
            setTimeout(function () { start5Game(); }, 20700);
        }
        else {
            resetGame();
        }
    }, 500);
}
function start10Game() {
    brojac++;
    setTimeout(function () {
        if (brojac < 11) {
            clean_game();
            startGame();
            setTimeout(function () { start10Game(); }, 20700);
        }
        else {
            resetGame();
        }
    }, 500);
}*/


function proveriDobitke() {
    var niz_dob = new Array();
    var s, l = 0;
    niz_dob = Dolazak.Izvuceni.split(";", 20);
     for (s = 0; s < 20; s++) {
    array[s].broj = parseInt(niz_dob[s]); 
    }
  
    odradiProveru(l);
    
}
function odradiProveru(br) {

    for (v = 0; v < niz_br.length; v++) {
        if (niz_br[v] === array[br].broj) { array[br].boja = "#129313"; hits++; break; }
    }

    setTimeout(function () {
        if (br < array.length - 1) {
            br++;
            odradiProveru(br);
        }
        else {
            for (var znak = 0; znak < 20; znak++) {
                console.log(array[znak].boja + " " + array[znak].broj);
            }
            start();

            // if (brojac === 0) { gameStarted = false; }
            setTimeout(function () { clean_mid_can(); }, 15000);
        }
    }, 0);
}



function clean_v2() {
    for (i = 0; i < 8; i++) {
        for (j = 1; j < 11; j++) {
            var brr = "k" + (j + (i * 10));
            can = document.getElementById("k" + (j + (i * 10)));
            con[(j + (i * 10))] = can.getContext("2d");
            con[(j + (i * 10))].clearRect(0, 0, can.width, can.height);
            con[(j + (i * 10))].font = "13pt Calibri bold";
            con[(j + (i * 10))].textAlign = "center";
            con[(j + (i * 10))].textBaseline = "middle";
            con[(j + (i * 10))].fillText((j + (i * 10)), can.width / 2, can.height / 2);

            $(can).css("border-style", "outset");
            $(can).css("background-color", "");
            $(can).css("border-left", "");
            $(can).css("border-right", "");
            $(can).css("border-top", "");
            $(can).css("border-bottom", "");
            for (var brbrbr = 0; brbrbr < 10; brbrbr++)
                niz_mid[brbrbr] = "";

            
                
        }
    }
    pokreni();
}
function clean_mid_can() {
    con_mess.clearRect(0, 0, can_mess.width, can_mess.height);
}

//--------------CANVAS MID MESSAGE

function provera_count() {
    if (koliko_igram == 5 && brojac < 6 && brojac != 0) {
        brojac++;
        clean_game();
        startGame();
    }
    else if (koliko_igram == 10 && brojac < 11 && brojac != 0) {
        brojac++;
        clean_game();
        startGame();
    }
    else if ((koliko_igram == 5 && brojac == 6) || (koliko_igram == 10 && brojac == 11)) {
        resetGame();
    } 
}


function start() {
    if (flag === false) {
        pauz();
        return;
    }
    
    $(kankan).css("visibility", "visible");
    start_i++;
    a = document.getElementById("k" + array[start_i].broj).offsetTop;
    b = document.getElementById("k" + array[start_i].broj).offsetLeft;

    prikaz();

    start_ponovi();

}

function start_ponovi() {
    /*if (flag === false) {
        start_i--;
        prikaz();
        pauz();
}    
else */if (start_i == 19) { return; }
        
    else {
        setTimeout(function () {
            start();            
        }, 1000);
    }
}

function prikaz() {
       
   pos_a = 0;
   pos_b = 0;
   crtaj_rect();
}

function crtaj_rect() {
    
    con_mess.beginPath();
    con_mess.rect(can_mess.width / 2 - mess_x / 2, can_mess.height / 2 - mess_y / 2, mess_x, mess_y);
    con_mess.fillStyle = array[start_i].boja;
    con_mess.fill();

    con_mess.font = mess_x/2+"pt Calibri";
    con_mess.textAlign = "center";
    con_mess.textBaseline = "middle";
    con_mess.fillStyle = "white";
    con_mess.fillText(array[start_i].broj, can_mess.width / 2, can_mess.height / 2); 
    mess_x += 7;
    mess_y += 7;

    if (mess_x < 130) {
        ponovi_rect();

    }
    else {
        setTimeout(function () {
            smanjuj_rect();
        }, 300);
        
        return;
    }
    
}


function ponovi_rect() {

    setTimeout(function () {
        con_mess.clearRect(0,0,can_mess.width,can_mess.height);
        crtaj_rect();

    }, 1);
    
}

function ponovi_rect_s() {

    setTimeout(function () {
        
            con_mess.clearRect(0, 0, can_mess.width, can_mess.height);
            smanjuj_rect();
        
    }, 0);

}

function smanjuj_rect() {

    con_mess.beginPath();

    if (a >= pos_a) {
        pos_a += 14;
    }


    if (b >= pos_b) {
        pos_b += 14;
    }

    con_mess.rect(pos_b, pos_a, mess_x-3, mess_y-3);
    con_mess.fillStyle = array[start_i].boja;
    con_mess.fill();
    con_mess.font = mess_x / 2 + "pt Calibri";
    con_mess.textAlign = "center";
    con_mess.textBaseline = "middle";
    con_mess.fillStyle = "white";
    con_mess.fillText(array[start_i].broj, pos_b + 20, pos_a + 20);

    if (mess_x >= 40) {
        ponovi_rect_s();
        mess_x -= 5;
        mess_y -= 5;
    }
    else if (a < pos_a && b < pos_b) {
        pos_a = a;
        pos_b = b;
        con_mess.clearRect(0, 0, can_mess.width, can_mess.height);
        con_mess.rect(pos_b, pos_a, mess_x - 3, mess_y - 3);
        con_mess.fillStyle = array[start_i].boja;
        con_mess.fill();

        con_mess.font = mess_x / 2 + "pt Calibri";
        con_mess.textAlign = "center";
        con_mess.textBaseline = "middle";
        con_mess.fillStyle = "white";
        con_mess.fillText(array[start_i].broj, pos_b + 20, pos_a + 20);
        if (array[start_i].boja == "#129313")
            $(document.getElementById("k" + array[start_i].broj)).css("background-color", "#129313");
        else
            $(document.getElementById("k" + array[start_i].broj)).css("background-color", "red");
        con_mess.clearRect(0, 0, can_mess.width, can_mess.height);
        if (start_i == 19)
            setTimeout(function () {
                popunicredit(Dolazak.Credit);
                credit = Dolazak.Credit;
                var brSelektovanih = 0;
                for (i = 0; i < niz_mid.length; i++) {
                    if (niz_mid[i] != "") { niz_br[brSelektovanih] = (niz_mid[i][1] + niz_mid[i][2]); niz_br[brSelektovanih] = parseInt(niz_br[brSelektovanih]); brSelektovanih++; }
                }
                if ((hits == 3 && brSelektovanih == 3) || (hits == 4 && brSelektovanih == 4) || (hits >= 4 && brSelektovanih == 5) || (hits >= 5)) {
                    //iscrtajget();
                    PlaceYourBet("YOU WON!!");
                }
                upisi2(runda, hits);
                clean_game();
                $(kankan).css("visibility", "hidden");
                blokiranje_button = false;
                provera_count();
            }, 150);
        return;
    }
    else {
        /*if(array[start_i].broj%10==0){

            pos_a = a;
            pos_b = b;
            con_mess.clearRect(0, 0, can_mess.width, can_mess.height);
            con_mess.rect(pos_b, pos_a, mess_x - 3, mess_y - 3);
            con_mess.fillStyle = array[start_i].boja;
            con_mess.fill();

            con_mess.font = mess_x / 2 + "pt Calibri";
            con_mess.textAlign = "center";
            con_mess.textBaseline = "middle";
            con_mess.fillStyle = "white";
            con_mess.fillText(array[start_i].broj, pos_b + 20, pos_a + 20);
            if (array[start_i].boja == "#129313")
                $(document.getElementById("k" + array[start_i].broj)).css("background-color", "#129313");
            else
                $(document.getElementById("k" + array[start_i].broj)).css("background-color", "red");

            con_mess.clearRect(0, 0, can_mess.width, can_mess.height);
            return;
        }
        else{*/
        ponovi_rect_s();
        
    }
}

function pauz() {
   /* do {  }
    while (flag == false);
    start();
    */

    setTimeout(function () {
        if (flag == false) {
            pauz();
        }
        else {
            start();

        }
    }, 0);
}


//-------------------------TABELA SREDINA----------------------------------------------------------------------------------------------------------------------------
var can;
var con = [];

var mid_x = [];
var mid_y = [];

var img2 = new Image();
img2.src = "images/g3.png";

function crtaj_mid() {    
        for (i = 0; i < 8; i++) {
            for (j = 1; j < 11; j++) {
                document.write("<canvas class=\"mid_broj\" width=\"35\" height=\"35\" id=\"k" + (j + (i * 10)) + "\"  ></canvas>");
                var brr = "k" + (j + (i * 10));
                can = document.getElementById("k" + (j + (i * 10)));
                con[(j + (i * 10))] = can.getContext("2d");
                con[(j + (i * 10))].font = "13pt Calibri bold";
                con[(j + (i * 10))].fillStyle = "white";
                con[(j + (i * 10))].textAlign = "center";
                con[(j + (i * 10))].textBaseline = "middle";
                con[(j + (i * 10))].fillText((j + (i * 10)), can.width / 2, can.height / 2);
            }
        }
        mid_events();
        
}



function mid_events() {

    $(".mid_broj").mouseover(function () {
        $(this).css("border-color", "Gold");
    });
    $(".mid_broj").mouseleave(function () {
        $(this).css("border-color", "");
    });
    $(".mid_broj").mousedown(function () {
        for (i = 0; i < 10; i++) {
            if (niz_mid[i] == $(this).attr('id')) {
                niz_mid[i] = "";
                $(this).css("border-style", "outset");
                $(this).css("background-color", "");
                $(this).css("border-left", "");
                $(this).css("border-right", "");
                $(this).css("border-top", "");
                $(this).css("border-bottom", "");

                var id = $(this).attr('id');

                var string = this.id.substring(1, 3);
                con[this.id.substring(1, 3)].clearRect(0, 0, can.width, can.height)
                con[this.id.substring(1, 3)].font = "13pt Calibri bold";
                con[this.id.substring(1, 3)].fillStyle = "white";
                con[this.id.substring(1, 3)].textAlign = "center";
                con[this.id.substring(1, 3)].textBaseline = "middle";
                con[this.id.substring(1, 3)].fillText(this.id.substring(1, 3), can.width / 2, can.height / 2);

                pokreni();
                return;
            }
        }
        for (i = 0; i < 10; i++) {
            if (niz_mid[i] == "") {
                niz_mid[i] = $(this).attr('id');
                $(this).css("border-style", "inset");
                $(this).css("background-color", "#87b9c2");
                pokreni();
                                
                draw_coin_timeout(this.id.substring(1, 3), 0);

                return;
            }
        }

    });
}

function draw_coin(KOJI, koliko) {
    if ( $(document.getElementById("k" + KOJI)).css("border-style") == "inset")
        if (koliko == 40) {
            con[KOJI].clearRect(0, 0, can.width, can.height)
            con[KOJI].font = "13pt Calibri bold";
            con[KOJI].fillStyle = "white";
            con[KOJI].textAlign = "center";
            con[KOJI].textBaseline = "middle";
            con[KOJI].fillText(KOJI, can.width / 2, can.height / 2);
            con[KOJI].drawImage(img2, 0, 20);
            con[KOJI].drawImage(img2, 0, 25);
            con[KOJI].drawImage(img2, 0, 30);
            return
        }
        else {
            koliko += 2;
            con[KOJI].clearRect(0, 0, can.width, can.height)
            con[KOJI].font = "13pt Calibri bold";
            con[KOJI].fillStyle = "white";
            con[KOJI].textAlign = "center";
            con[KOJI].textBaseline = "middle";
            con[KOJI].fillText(KOJI, can.width / 2, can.height / 2);
            con[KOJI].drawImage(img2, 0, -10 + koliko);
            con[KOJI].drawImage(img2, 0, -20 + koliko);
            con[KOJI].drawImage(img2, 0, -30 + koliko);

            draw_coin_timeout(KOJI, koliko);
        }
    else
        return;
}

function draw_coin_timeout(KOJI,koliko) {
    setTimeout(function () {
        draw_coin(KOJI,koliko);
    },15);

}

//function mid_popuni_selektovana() {
//    for (i = 0; i < 8; i++) {
//        for (j = 1; j < 11; j++) {           
//            var brr = "k" + (j + (i * 10));
//            can = document.getElementById("k" + (j + (i * 10)));
//            con[(j + (i * 10))] = can.getContext("2d");
//            con[(j + (i * 10))].font = "11pt Calibri";
//            con[(j + (i * 10))].textAlign = "center";
//            con[(j + (i * 10))].textBaseline = "middle";
//            con[(j + (i * 10))].fillText((j + (i * 10)), can.width / 2, can.height / 2);

//            var pom = document.getElementById("k"+(j + (i * 10)));
//            $(pom).css("border-style", "outset");
//            $(pom).css("background-color", "");
//        }
//    }
//    
//}



function ispisi() {
    for (i=0; i < 10; i++) {
        console.log(niz_mid[i]);        
    }
}

function Pauziraj() {
    $(window).blur(function () {
        $("#pause").css("display", "block");
        flag = false;
    });
    $("#pause").click(function () {
        $("#pause").css("display", "none");
        flag = true;
    });
};
