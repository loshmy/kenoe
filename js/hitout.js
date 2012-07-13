//leva

var canvasL;
var contextL;

var canvasD;
var contextD;



var y1;
function popuni() {
    contextL.font = "12pt Calibri";
    contextL.beginPath();
    contextL.moveTo(0, 30);
    contextL.lineTo(canvasL.width, 30);
    contextL.lineWidth = 2;
    contextL.strokeStyle = "white";
    contextL.stroke();

    contextL.beginPath();
    contextL.strokeStyle = "white";
    contextL.fillStyle = "white";
    contextL.fillText("HITS", 3, 28);


    contextL.beginPath();
    contextL.strokeStyle = "white";
    contextL.fillStyle = "white";
    contextL.fillText("PAYOUT", canvasL.width - 57, 28);

}
function upisi(h, p) {
    contextL.beginPath();
    contextL.lineWidth = 1;
    contextL.strokeStyle = "white";

    contextL.strokeText(h, 10, y1);

    contextL.beginPath()
    contextL.strokeStyle = "white";
    contextL.strokeText(p*bet, canvasL.width - 49, y1);
    y1 += 18;
}
function pokreni() {
    

    contextL.clearRect(0, 0, canvasL.width, canvasL.height);
    y1 = 48;
    var k = 0;
    for (i = 0; i < niz_mid.length; i++) { if (niz_mid[i] != "") { k++; } }

   popuni();
    $(Objekat.Payments).each(function () {
        var sn = this.SelectedNumber;

        if (sn == k) {
            var h = this.Hits;
            var p = this.Payout;
            upisi(h, p);

        }
    });
}
//desna

var y2 = 48;

function popuni_desno_tab() {

    context_D_tab.font = "12pt calibri";
    context_D_tab.beginPath();
    context_D_tab.moveTo(0, 30);
    context_D_tab.lineTo(canvas_D_tab.width, 30);
    context_D_tab.lineWidth = 2;
    context_D_tab.strokeStyle = "white";
    context_D_tab.stroke();

    context_D_tab.beginPath();
    context_D_tab.strokeStyle = "white";
    context_D_tab.fillStyle = "white";
    context_D_tab.fillText("ROUNDS", 3, 28);


    context_D_tab.beginPath();
    context_D_tab.strokeStyle = "white";
    context_D_tab.fillStyle = "white";
    context_D_tab.fillText("HITS", canvas_D_tab.width - 32, 28);
}

function upisi2(h, p) {

    if (h == 14 || h==28 || h == 42 || h==56 || h==70) {
        context_D_tab.clearRect(0, 0, canvas_D_tab.width, canvas_D_tab.height);
        popuni_desno_tab();
        y2 = 48;
    }


    context_D_tab.beginPath();
    context_D_tab.lineWidth = 1;
    context_D_tab.strokeStyle = "white";

    context_D_tab.strokeText(h, 25, y2);

    context_D_tab.beginPath()
    context_D_tab.strokeStyle = "white";

    context_D_tab.strokeText(p, canvas_D_tab.width - 25, y2);
    y2 += 18;
}
