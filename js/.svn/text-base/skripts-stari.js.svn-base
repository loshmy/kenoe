var korisnik = {

    "ime": "Nikola",
    "prezime": "Bekcic",
    "mail": "NekiTamo"


}

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

var crtaj_boja = true;
var start_i = 0;


//--------------CANVAS MID MESSAGE

function start() {
    niz_mid[0] = k25;
    niz_mid[1] = k29;
    niz_mid[2] = k80;

    if (niz_mid[start_i] != "") {           
        
        a = niz_mid[start_i].offsetTop;
        b = niz_mid[start_i].offsetLeft;

        start_i++;
        prikaz();
        start_ponovi();
    }
}

function start_ponovi() {
    if (start_i == 10)
        return;
    else {
        setTimeout(function () {
            start();
            
        }, 3000);
    }
}



function prikaz() {
    $("kankan").css("visibility", "");
    can_mess = document.getElementById("kankan");
    con_mess = can_mess.getContext("2d");
    
   
   pos_a = 0;
   pos_b = 0;
    crtaj_rect();


}

function crtaj_rect() {
    
    con_mess.beginPath();
    con_mess.rect(can_mess.width / 2 - mess_x / 2, can_mess.height / 2 - mess_y / 2, mess_x, mess_y);
    con_mess.fillStyle = '#129313';
    con_mess.fill();

    con_mess.font = mess_x/2+"pt Calibri";
    con_mess.textAlign = "center";
    con_mess.textBaseline = "middle";
    con_mess.fillStyle = "white";
    con_mess.fillText("23", can_mess.width / 2, can_mess.height / 2); 
    mess_x += 5;
    mess_y += 5;

    if (mess_x < 130) {
        ponovi_rect();

    }
    else {
        setTimeout(function () {
            smanjuj_rect();
        }, 1000);
        return;
    }
    
}


function ponovi_rect() {

    setTimeout(function () {
        con_mess.clearRect(0,0,can_mess.width,can_mess.height);
        crtaj_rect();

    }, 20);
    
}

function ponovi_rect_s() {

    setTimeout(function () {
        con_mess.clearRect(0,0,can_mess.width,can_mess.height);
        smanjuj_rect();

    }, 1);

}

function smanjuj_rect() {

    con_mess.beginPath();

    if (a >= pos_a) {
        pos_a += 5;
    }


    if (b >= pos_b) {
        pos_b += 5;
    }

    con_mess.rect(pos_b, pos_a, mess_x, mess_y);
    con_mess.fillStyle = '#129313';
    con_mess.fill();
    con_mess.font = mess_x / 2 + "pt Calibri";
    con_mess.textAlign = "center";
    con_mess.textBaseline = "middle";
    con_mess.fillStyle = "white";
    con_mess.fillText("23", pos_b + 20, pos_a + 20);

    if (mess_x >= 40) {
        ponovi_rect_s();
        mess_x -= 3;
        mess_y -= 3;
    }
    else if (a < pos_a && b < pos_b) {
        pos_a = a;
        pos_b = b;
        return;
    }
    else {
        ponovi_rect_s();
    }
}





//---------------------HITS PAYOUT-------------------
/*function crtaj_left() {
    can_left = document.getElementById("left_tab");
    con_left = can_left.getContext("2d");

    con_left.beginPath();
    con_left.moveTo(can_left.width / 2, 20);
    con_left.lineTo(can_left.width / 2, can_left.height - 20);
    con_left.stroke();
    con_right.beginPath();
    con_right.moveTo(20, 60);
    con_right.lineTo(can_right.width - 20, 60);
    con_right.stroke();
    

}
function crtaj_right() {
    can_right = document.getElementById("right_tab");
    con_right = can_right.getContext("2d");

    con_right.beginPath();
    con_right.moveTo(can_right.width / 2, 20);
    con_right.lineTo(can_right.width / 2, can_right.height - 20);
    con_right.stroke();
    
   
        
    

}

*/



//-------------------------TABELA SREDINA----------------------------------------------------------------------------------------------------------------------------
var can;
var con = [];
var niz_mid = ["", "", "", "", "", "", "", "", "", "" ];
var mid_x = [];
var mid_y = [];

var img2 = new Image();
img2.src = "g3.png";

function crtaj_mid() {    
        for (i = 0; i < 8; i++) {
            for (j = 1; j < 11; j++) {
                document.write("<canvas class=\"mid_broj\" width=\"35\" height=\"35\" id=\"k" + (j + (i * 10)) + "\"  ></canvas>");
                var brr = "k" + (j + (i * 10));
                can = document.getElementById("k" + (j + (i * 10)));
                con[(j + (i * 10))] = can.getContext("2d");
                con[(j + (i * 10))].font = "11pt Calibri";
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
                var id = $(this).attr('id');
                
                var string = this.id.substring(1, 3);
                con[this.id.substring(1, 3)].clearRect(0, 0, can.width, can.height)
                con[this.id.substring(1, 3)].font = "11pt Calibri";
                con[this.id.substring(1, 3)].textAlign = "center";
                con[this.id.substring(1, 3)].textBaseline = "middle";
                con[this.id.substring(1, 3)].fillText(this.id.substring(1, 3), can.width / 2, can.height / 2);

                return;
            }
        }
        for (i = 0; i < 10; i++) {
            if (niz_mid[i] == "") {
                niz_mid[i] = $(this).attr('id');
                $(this).css("border-style", "inset");
                $(this).css("background-color", "#E0E0E0");

                draw_coin_timeout(this.id.substring(1, 3), 0);

                return;
            }
        }

    });
}

function draw_coin(KOJI, koliko) {
    if (koliko == 40) {
        con[KOJI].clearRect(0, 0, can.width, can.height)
        con[KOJI].font = "11pt Calibri";
        con[KOJI].textAlign = "center";
        con[KOJI].textBaseline = "middle";
        con[KOJI].fillText(KOJI, can.width / 2, can.height / 2);
        con[KOJI].drawImage(img2, 0, 20 );
        con[KOJI].drawImage(img2, 0, 25 );
        con[KOJI].drawImage(img2, 0, 30 );
        return
    }
    else {
        koliko += 2;
        con[KOJI].clearRect(0, 0, can.width, can.height)
        con[KOJI].font = "11pt Calibri";
        con[KOJI].textAlign = "center";
        con[KOJI].textBaseline = "middle";
        con[KOJI].fillText(KOJI, can.width / 2, can.height / 2);
        con[KOJI].drawImage(img2, 0, -10 + koliko);
        con[KOJI].drawImage(img2, 0, -20 + koliko);
        con[KOJI].drawImage(img2, 0, -30 + koliko);


        draw_coin_timeout(KOJI, koliko);
    }


}

function draw_coin_timeout(KOJI,koliko) {
    setTimeout(function () {
        draw_coin(KOJI,koliko);

    },15);

}

function mid_popuni_selektovana() {
    for (i = 0; i < 8; i++) {
        for (j = 1; j < 11; j++) {           
            var brr = "k" + (j + (i * 10));
            can = document.getElementById("k" + (j + (i * 10)));
            con[(j + (i * 10))] = can.getContext("2d");
            con[(j + (i * 10))].font = "11pt Calibri";
            con[(j + (i * 10))].textAlign = "center";
            con[(j + (i * 10))].textBaseline = "middle";
            con[(j + (i * 10))].fillText((j + (i * 10)), can.width / 2, can.height / 2);

            var pom = document.getElementById("k"+(j + (i * 10)));
            $(pom).css("border-style", "outset");
            $(pom).css("background-color", "");
        }
    }
    
}



function ispisi() {
    for (i=0; i < 10; i++) {
        console.log(niz_mid[i]);
        
    }
}


//-------------------------------------------------------------------------------------------------------------------------------------------


//---------------------------------- PRECRTAVANJE NETACNOG------------------------------------------------------------------------------
var canvas_ne;
var context_ne;
var xnet;
var ynet;
var brojacnet1;
var brojacnet2;
var condition, condition2;


//netacno("ID"); - TREBA POZVATI KADA SE OMASI POLJE



function netacno(k) {
    canvas_ne = document.getElementById(k);
    context_ne = canvas_ne.getContext("2d");
    
    brojacnet1 = 0;
    xnet = 0;
    ynet = 0;
    brojacnet2 = 0;
    condition = true;
    setTimeout(function () { if (condition === true) { netacno1(); } }, 200)
}
function netacno1() {
    brojacnet1++;
    for (x = -3; x < 7; x++) {
        context_ne.beginPath();
        context_ne.moveTo(xnet + x, ynet);
        x1 = xnet + x + 7;
        y1 = ynet + 7;
        context_ne.lineTo(x1, y1);
        context_ne.strokeStyle = "rgba(255, 0, 0, 0.6)";
        context_ne.stroke();
    }
    xnet += 7;
    ynet += 7;

    setTimeout(function () { if (brojacnet1 < 4 && condition == true) { netacno1(); } else if (brojacnet1 == 4) { dodaj1(); } }, 50);
    setTimeout(function () { }, 0);

}
function dodaj1() {
    condition = false;
    brojacnet1 = 0;
    xnet = 0;
    ynet = canvas_ne.height;
    setTimeout(function () { if (brojacnet2 == 0) { netacno2(); } }, 50);
}
function netacno2() {
    brojacnet2++;
    for (x = -6; x < 5; x++) {
        
        context_ne.beginPath();
        context_ne.moveTo(xnet + x, ynet);
        x1 = xnet + x + 7;
        y1 = ynet - 7;
        context_ne.lineTo(x1, y1);
        context_ne.strokeStyle = "rgba(255, 0, 0, 0.6)";
        context_ne.stroke();
    }
    xnet += 7;
    ynet -= 7;
    setTimeout(function () { if (brojacnet2 < 4) { netacno2(); } }, 50);
}

//----------------------------------------------------------------------------------------------------------------------------------------------------

//---------------------------TACNO---------------------------------------------------------------------------------------------------


var canvasTacno; 
var contextTacno; 
var xtac;
var ytac;
var brojactac3;
var brojactac4;
var condition1;
//tacno(); - TREBA POZVATI KADA SE OMASI POLJE
function tacno(k) {

    
    canvasTacno = document.getElementById(k);
    contextTacno = canvasTacno.getContext("2d");
   
    brojactac3 = 0;
    xtac = 0;
    ytac = canvasTacno.height / 2 + 4;
    brojactac4 = 0;
    condition1 = true;
    setTimeout(function () { if (condition1 === true) { tacno1(); } }, 200)
}


function tacno1() {
    brojactac3++;
    for (x = -3; x < 7; x++) {
        contextTacno.beginPath();
        contextTacno.moveTo(xtac + x, ytac);
        x3 = xtac + x + 4;
        y3 = ytac + 4;
        contextTacno.lineTo(x3, y3);
        contextTacno.strokeStyle = "rgba(0,204,255,0.8)";
        contextTacno.stroke();
    }
    xtac += 4;
    ytac += 4;

    setTimeout(function () { if (brojactac3 < 4 && condition1 == true) { tacno1(); } else if (brojactac3 == 4) { tacno2(); } }, 50);
    setTimeout(function () { }, 0);

}

function tacno2() {
    brojactac4++;
    for (x = -6; x < 5; x++) {
        contextTacno.beginPath();
        contextTacno.moveTo(xtac + x, ytac);
        x3 = xtac + x + 3;
        y3 = ytac - 7;
        contextTacno.lineTo(x3, y3);
        contextTacno.strokeStyle = "rgba(0, 204, 255, 0.8)";
        contextTacno.stroke();
    }
    xtac += 3;
    ytac -= 7;
    setTimeout(function () { if (brojactac4 < 5) { tacno2(); } }, 50);
}

//Funkcija za komunikacija sa servisom na startu i u toku igre ..

function zoviComunicationOnStart() {
    if (korisnik.mail != "") setTimeout(function () { ComunicationOnStart(); }, 500);
    else {

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
                console.log(Objekat);
                setTimeout(function () { hideLoading(); }, 5000);
            },


            error: function () {

                console.log("Greska u komunikaciji!");
            }


        });


}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------