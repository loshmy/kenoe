﻿


function zapamtiSlikuLoading() {
    BcanvasLoading = document.createElement("canvas");
    BcontextLoading = BcanvasLoading.getContext("2d");
    BcanvasLoading.id="loadingCanvas";
    BcanvasLoading.width = 816;
    BcanvasLoading.height = 102;

    var shipLoading = new Image();

    shipLoading.onload = function () {
        BcontextLoading.drawImage(shipLoading, 0, 0);
        imageDataLoading = BcontextLoading.getImageData(0, 0, BcanvasLoading.width, BcanvasLoading.height);
    
        animacijaLoading(0);
    };
    shipLoading.src = "images/LoadingCircleOld.png";
}

function animacijaLoading(i) {

    if (i > 8)
        i = 0;
    contextLoading.putImageData(imageDataLoading, -102 * i, 0);
    i++;

    setTimeout(function () {
        
        animacijaLoading(i);
    }, 50);
}


function hideLoading() {

    var e = document.getElementById("loading");
    //e.innerHTML = null;

    $(e).fadeOut("slow");
    setTimeout(function () {
        $(document.getElementById("osnovna")).fadeIn("slow");

    }, 800);


    
    setTimeout(function () {

        $(document.getElementById("tabla")).fadeIn(2000);

        setTimeout(function () {
            $(document.getElementById("LEVO")).slideDown("slow");
            $(document.getElementById("DESNO")).slideDown("slow");
            $(document.getElementById("fb-root")).slideDown("slow");
            $(document.getElementById("credit")).fadeIn(2000);
            $(document.getElementsByTagName("footer")).fadeIn(2000);
        }, 200);
    }, 2000);


    document.getElementById("canvasLoading").style.visibility = "hidden";
    document.getElementById("loading").style.height = "0px";
        

}