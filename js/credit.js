var credit;

var canvascredit;
var contextcredit;


function popunicredit(credit) {
    contextcredit.beginPath();
    contextcredit.clearRect(0, 0, canvascredit.width, canvascredit.height);
    contextcredit.font = "30pt Andy";
    contextcredit.fillStyle = 'white';
    contextcredit.fillText("$" + credit, 80, 37);
}