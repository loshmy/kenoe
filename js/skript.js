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

var Dolazak;//informacije o korisniku
var crtaj_boja = true; // 
var start_i = -1; // RESETOVATI NA nULU KAD SE IDE NOVI KRUG .... PLAY5.....
var niz_mid = ["", "", "", "", "", "", "", "", "", ""]; //NIZ POLJA KOJE JE KORISNIK IZABRAO
var crtaj_color;
var niz_br = new Array();
var runda = 0;//odigrane runde
var hits;//broj pogodaka u toku jedne runde


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
        "mail": "NekiTamo",
        "ID": "34"
    }

//----------//----------//----------//----------//----------//----------//----------//----------

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
                $(document.getElementById("k" + hmm )).css("background-color", "#E0E0E0");
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
        clean_game();
        
    runda++;
    hits = 0;
    var k = 0;
    
    for (i = 0; i < niz_mid.length; i++) {
        if (niz_mid[i] != "") { niz_br[k] = (niz_mid[i][1] + niz_mid[i][2]); niz_br[k] = parseInt(niz_br[k]); k++; }
    }

    if (k > 2 && bet != 0) {
        pokreni();// pokretanje leve tabele
        popuni_desno_tab();// pokretanje desne tabele
        $.ajax(
        {
            type: "GET",
            contentType: "application/json; charset=utf-8",
            url: "http://edit12.comtrade.com/KenoService/KenoService.svc/Igra?id=" + korisnik.ID + "&e=" + korisnik.mail + "&u=" + bet + "&o=" + niz_br,
            data: "",
            dataType: "jsonp",
            success: function (data) {
                Dolazak = data.OdigrajIgruResult;
                popunicredit(Dolazak.Credit);
                proveriDobitke();
            },
            error: function () {
                console.log("Communication Error!");
            }
        });
    }
}

function start5Game() {
    brojac++;

    console.log("startovano "+brojac+" igre");
    setTimeout(function () {
        if (brojac < 6) {
            startGame();
            setTimeout(function () { start5Game(); }, 20000);
        }
        else {
            resetGame();
        }
    }, 1000);
}
function start10Game() {
    brojac++;

    console.log("startovano 5 igre");
    setTimeout(function () {
        if (brojac < 11) {
            startGame();
            setTimeout(function () { start10Game(); }, 20000);
        }
        else {
            resetGame();
        }
    }, 1000);
}
function proveriDobitke() {
    console.log("ddd");
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
            // document.write("<canvas class=\"mid_broj\" width=\"35\" height=\"35\" id=\"k" + (j + (i * 10)) + "\"  ></canvas>");
            var brr = "k" + (j + (i * 10));

            can = document.getElementById("k" + (j + (i * 10)));

            con[(j + (i * 10))] = can.getContext("2d");
            con[(j + (i * 10))].clearRect(0, 0, can.width, can.height);
            con[(j + (i * 10))].font = "11pt Calibri";
            con[(j + (i * 10))].textAlign = "center";
            con[(j + (i * 10))].textBaseline = "middle";
            con[(j + (i * 10))].fillText((j + (i * 10)), can.width / 2, can.height / 2);

            //con[(j + (i * 10))].style.backgroundColor="#ffffff";
        }
    }
}



function clean_mid_can() {
    con_mess.clearRect(0, 0, can_mess.width, can_mess.height);
}










//--------------CANVAS MID MESSAGE


function start() {
    $(kankan).css("visibility", "visible");



    start_i++;
    //console.log("start, broj: " + array[start_i].broj);
        a = document.getElementById("k"+array[start_i].broj).offsetTop;
        b = document.getElementById("k"+array[start_i].broj).offsetLeft;
        
        
        
        prikaz();
        
        start_ponovi();
    
}

function start_ponovi() {
    if (start_i == 19) { upisi2(runda, hits); return; }
        
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
    mess_x += 5;
    mess_y += 5;

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
        mess_x -= 3;
        mess_y -= 3;
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
        return;
    }
    else {
        if(array[start_i].broj%10==0){

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
        else{
        ponovi_rect_s();
        }
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
                var id = $(this).attr('id');

                var string = this.id.substring(1, 3);
                con[this.id.substring(1, 3)].clearRect(0, 0, can.width, can.height)
                con[this.id.substring(1, 3)].font = "15pt Calibri bold";
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
                $(this).css("background-color", "#E0E0E0");
                pokreni();
                draw_coin_timeout(this.id.substring(1, 3), 0);

                return;
            }
        }

    });
}

function draw_coin(KOJI, koliko) {
    if (koliko == 40) {
        con[KOJI].clearRect(0, 0, can.width, can.height)
        con[KOJI].font = "15pt Calibri bold";
        con[KOJI].fillStyle = "white";
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
        con[KOJI].font = "15pt Calibri bold";
        con[KOJI].fillStyle = "white";
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

//------------------------------------------------------------------------------------------------------------------------------------------------------------------