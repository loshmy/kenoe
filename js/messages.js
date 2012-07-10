var m_ctx;
var m_can;
var m_won = 0;
var m_lose = 0;
var m_cx;
var m_cy;
var m_i = 0;

$(document).ready(function () {

m_can = document.getElementById("cancan");
m_ctx = canvas.getContext("2d");
m_cx=m_can.width/2;
m_cy = m_can.height / 2;
$("#cancan").hide();


});

function PlaceYouBet() {
    m_i += 1;
    m_ctx = clearRect(0, 0, m_can.width, m_can.height);
    $("#cancan").show();
    // console.log("u funkciji sam")
    m_ctx.beginpath();

    m_ctx.font = "15pt Andy";
    m_ctx.textAlign = "center";
    m_ctx.textBaseline = "middle";
    m_ctx.fillStyle = "white";
    m_ctx.font = m_i + "px Impact";
    m_ctx.fillText("PLEASE, PLACE YOUR BETS!", m_cx, m_cy);
    setTimeout(function () { if (i < 33) { m_ctx.clearRect(0, 0, m_can.width, m_can.height); } }, 13);
    setTimeout(function () { if (i < 33) { PlaceYouBet(); } else { resetuj() } }, 14);
    setTimeout(function () { $("cancan").hide(); }, 3000);


}