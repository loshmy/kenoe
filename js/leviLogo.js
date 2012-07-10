var canvas;
var context;
var imageData;
var Bcanvas;
var Bcontext;

var canvasD;
var contextD;
var imageDataD;
var BcanvasD;
var BcontextD;

var canvasLoading;
var contextLoading;
var imageDataLoading;
var BcanvasLoading;
var BcontextLoading;


function zapamtiSliku() {


    Bcanvas = document.createElement("canvas");
    Bcontext = Bcanvas.getContext("2d");
    Bcanvas.width = 1654;
    Bcanvas.height = 100;


    var ship = new Image();

    ship.onload = function () {
        Bcontext.drawImage(ship, 0, 0);
        imageData = Bcontext.getImageData(0, 0, Bcanvas.width, Bcanvas.height);
        console.log(imageData);

        animacija(0);

    };
    ship.src = "../new/images/slika1.png";

}

function animacija(i) {

    if (i > 8)
        i = 0;
    context.putImageData(imageData, -207 * i, 0);
    i++;

    setTimeout(function () {
        animacija(i);
    }, 100);
}


function animacijaD(i) {

    if (i > 8)
        i = 0;
    contextD.putImageData(imageDataD, -207 * i, 0);
    i++;

    setTimeout(function () {
        animacijaD(i);
    }, 100);
}





function zapamtiSlikuD() {


    BcanvasD = document.createElement("canvas");
    BcontextD = BcanvasD.getContext("2d");
    BcanvasD.width = 1654;
    BcanvasD.height = 100;


    var ship = new Image();

    ship.onload = function () {
        BcontextD.drawImage(ship, 0, 0);
        imageDataD = BcontextD.getImageData(0, 0, BcanvasD.width, BcanvasD.height);
        console.log(imageData);

        animacijaD(0);

    };
    ship.src = "../new/images/slika2.png";

}