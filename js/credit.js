﻿var credit = 500;

var canvascredit;
var contextcredit;

$('document').ready(function () {
    canvascredit = document.getElementById("credit");
    contextcredit = canvascredit.getContext("2d");

    popunicredit(credit);

});

function popunicredit(credit) {
    contextcredit.beginPath();
    contextcredit.clearRect(0, 0, canvascredit.width, canvascredit.height);
    contextcredit.font = "30pt Andy";
    contextcredit.fillStyle = 'white';
    contextcredit.fillText("$" + credit, 80, 37);
}