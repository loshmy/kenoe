var m_ctx;
var m_can;
var m_won = 0;
var m_lose = 0;
var m_cx;
var m_cy;
var m_i = 0;

$(document).ready(function () {

m_can = document.getElementById("kankan");
m_ctx = m_can.getContext("2d");
m_cx=m_can.width/2;
m_cy = m_can.height / 2;
$("#kankan").hide();


});

function PlaceYouBet() {
    m_i += 1;
    m_ctx.clearRect(0, 0, m_can.width, m_can.height);
    $("#kankan").show();

    $(kankan).css("visibility", "visible"); // PRIKAZIVANJE KANVASA

    // console.log("u funkciji sam")
    m_ctx.beginpath();

    m_ctx.font = "15pt Andy";
    m_ctx.textAlign = "center";
    m_ctx.textBaseline = "middle";
    m_ctx.fillStyle = "white";
    m_ctx.font = m_i + "px Impact";
    m_ctx.fillText("PLEASE, PLACE YOUR BETS!", m_cx, m_cy);
    setTimeout(function () { if (m_i < 33) { m_ctx.clearRect(0, 0, m_can.width, m_can.height); } }, 13);
    setTimeout(function () { if (m_i < 33) { PlaceYouBet(); } else { resetuj() } }, 14);
    setTimeout(function () { $("kankan").hide(); }, 3000);

}

function youWin() {

    $(kankan).css("visibility", "visible");
    m_won++;
    m_ctx.clearRect(0, 0, m_can.width, m_can.height);
    $("#kankan").show();

    m_ctx.beginPath();


    m_ctx.textAlign = "center";
    m_ctx.fillStyle = "white";
    m_ctx.font = 30 + "px Impact";

    m_ctx.fillText("YOU WIN!", m_cx.width / 2, m_cy.height / 2);
    setTimeout(function () { if (m_won < 4) { m_ctx.clearRect(0, 0, m_can.width, m_can.height); } }, 200);
    setTimeout(function () { if (m_won < 4) { youWin(); } else { resetuj(); } }, 500);
    setTimeout(function () { $("kankan").hide(); }, 3000);
}

function gameOver() {

    //$(kankan).css("visibility", "visible");
    m_lose++;
    m_ctx.clearRect(0, 0, m_can.width, m_can.height);
    $(kankan).show();

    m_ctx.beginPath();

    m_ctx.textAlign = "center";
    m_ctx.fillStyle = "white";
    m_ctx.font = 30 + "px Impact";

     m_ctx.fillText("YOU LOSE!", m_can.width / 2,m_can.height / 2);
     setTimeout(function () { if (m_lose < 4) { m_ctx.clearRect(0, 0, m_can.width, m_can.height); } }, 200);
     setTimeout(function () { if (m_lose < 4) { gameOver(); } else { resetuj(); } }, 500);
     setTimeout(function () { $("kankan").hide(); }, 3000);
}

function resetuj() {
    m_i = 0;
    m_won = 0;
    m_lose = 0;


}
