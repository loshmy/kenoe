<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="en-US"
      xmlns:fb="https://www.facebook.com/2008/fbml"> 
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# keno-greenteam: http://ogp.me/ns/fb/keno-greenteam#">
  <meta property="fb:app_id" content="102088773270632" /> 
  <meta property="og:type"   content="keno-greenteam:new_high_score" /> 
  <meta property="og:url"    content="http://apps.facebook.com/keno-greenteam" /> 
  <meta property="og:title"  content="New High Score" /> 
  <meta property="og:image"  content="images/keno_logo_lg.png" /> 
    <meta charset="utf-8" />

    <script src="js/skript.js" type="text/javascript"></script>
    <script src="js/jquery-1.7.1.min.js" type="text/javascript"></script>
    <link href="css/OsnovniStyle.css" rel="stylesheet" type="text/css" />    
    <link href="css/header.css" rel="stylesheet" type="text/css" />
    <script src="js/leviLogo.js" type="text/javascript"></script>
    <script src="js/face.js" type="text/javascript"></script>
    <script src="js/fbhelper.js" type="text/javascript"></script>
    <link href="css/footer.css" rel="stylesheet" type="text/css" />
    <script src="js/dugmici.js" type="text/javascript"></script>
    <script src="js/credit.js" type="text/javascript"></script>
    <script src="js/Loading.js" type="text/javascript"></script>
    <script src="js/hitout.js" type="text/javascript"></script>
    <link href="css/tabele.css" rel="stylesheet" type="text/css" />
    <script src="js/messages.js" type="text/javascript"></script>

    <script type="text/javascript">


        $(window).ready(function () {

            //logToFb(); 
            init_all();


        });   


    
    </script>
    <title>TEst</title>
</head>
<body>

<div id="loading" >
    <img id="logoKeno" src="images/keno_logo_lg.png" />
    <p></p>
    <canvas id="canvasLoading" width="102px" height="102"></canvas>

    <p id="loadingText">Loading...</p>
    <a href="http://www.comtrade.com"><img id="logoComTrade" src="images/comTrade.png" /></a>

</div>

<div id="osnovna">
<header>
    <canvas id="leviLogo" width="207px" height="100" ></canvas>
    <canvas id="credit"  width="250px" height="50"></canvas>
     <canvas id="desniLogo" width="207px" height="100" ></canvas>
</header>

<section id="mid">

    <section id="left" onload="pokreni();">
        <canvas width="170" height="340" id="left_tab"> </canvas>
            <div class="hp" id="LEVO"> 
                <canvas  id="canvas" width="100px"> </canvas>
            </div>
       
    </section>
    <section id="midmid">    
    </section>
    
    <section id="right">
    <canvas width="170" height="340" id="right_tab"> </canvas>
       <div id="DESNO" class="hp"> 
            <canvas id="canvas1" width="100px" height="300px" ></canvas
       ></div>
    </section>
</section>





<footer>
    <img src="images/clear.png" class="dugmici" id="clear" onclick="clearr();" />
    <img src="images/play.png" class="dugmici" id="play" onclick="playaa();" />
    <img src="images/play5.png" class="dugmici" id="play5" onclick="play5a();" />
    <img src="images/play10.png"  class="dugmici" id="play10" onclick="play10a();"/>
    <img src="images/strelicaDole.png" id="strelicaLeva" class="strelice" onclick="smanjiUlog()" />    
    <canvas id="bet"></canvas>
    <img src="images/strelicaGore.png" id="strelicaDesna" class="strelice" onclick="povecajUlog()"/>
</footer>

<section id="tabla">
    <script>
        crtaj_mid();
    </script>
</section>

<canvas  id="kankan"  width="415px" height="320px" ></canvas>

<canvas id="pause" width="760px" height="560px" ></canvas>



<div id="fb-root"> </div>
     <div id="FacebookCallToActions">
		<a class="button" href="#" id="InviteCallToAction">INVITE YOUR FRIENDS</a>
		<!--<a href="#" id="InviteCallToAction"><img src="images/post-on-wall-btn.png" width="63" height="15" /></a>
	-->
    <a href="#" class="button" onclick='postToFeed(); return false;'  id="PostOnWallCallToAction">POST ON YOUR WALL</a>
    <p id='msg'></p>

    <script>
        //FB.init({ appId: "231236036985466", status: true, cookie: true });

        
    
    </script>
    </div>
    <a href="#" onclick='iscrtajget();'>Action!</a>



</div>


        
    





</body>
</html>
