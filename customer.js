//*****************************************************************************
//  (c) Copyright by Markus Mueller, Solution for All, www.s4.ch, Switzerland
//
//  All source codes, data, texts, pictures and graphs and their arrangements 
//  are subject to copyright and are the intellectual property of 
//  Solution for All Markus Müller. They may neither be copied for forwarding 
//  nor used in an amended form or non other websites nor servers nor any kind 
//  of electronic device.
//
//  (c) This Source-Code might NOT be used without any permission from M. Mueller
//
//*****************************************************************************
//
//  Custom Shop Definitions & Black List
//  activate URL CHECK!!
//
//
//  Revisions:
//  22.04.14        Aero-Model
//  29.01.14  6.06  Vorbereitung auf Subscription: Custom Components, 
//                  Generate Link & full list of components nun steurbar
//  19.02.13  6.00  Erstellt
//*****************************************************************************

// Illegale Nutzung: verhindert externe Nutzung in einem Frame
if (top!=self) location.replace("./illegalcopy.htm");

//Sprachwahl
var theLanguage ="";
if (getParameterByName("lang") == "de" || isSysLanguage("de")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_de.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "cn" || isSysLanguage("zh")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_cn.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "cz" || isSysLanguage("cs")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_cz.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "es" || isSysLanguage("es")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_es.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "fr" || isSysLanguage("fr")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_fr.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "it" || isSysLanguage("it")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_it.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "jp" || isSysLanguage("ja")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_jp.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "kr" || isSysLanguage("ko")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_kr.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "nl" || isSysLanguage("nl")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_nl.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "pl" || isSysLanguage("pl")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_pl.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "pt" || isSysLanguage("pt")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_pt.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "ps" || isSysLanguage("ar")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_ps.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "ru" || isSysLanguage("ru")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_ru.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "se" || isSysLanguage("se")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_se.js"+cVersion +"'><\/script>";
} else {
   theLanguage ="<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_en.js"+cVersion +"'><\/script>"; //Default sprache Enlish
}


var theCSS		= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc.css"+cVersion +"' />";

var theCells	= "<script language='javascript' type='text/javascript' src='./calcinclude/data/cell.js"+cVersion +"'><\/script>";

var theESC	 	= "<script language='javascript' type='text/javascript' src='./calcinclude/data/esc.js"+cVersion +"'><\/script>";

// value muss ein eindeutiger schlüssel sein, sonst funzt search mit dictionary nicht
var theMotors   = "<OPTION value=39>actro <OPTION value=52>Aeolian <OPTION value=119>airtek <OPTION value=122>ALZRC <OPTION value=41>ARC <OPTION value=114>Astro Flight <OPTION value=80>Aveox <OPTION value=73>Avroto <OPTION value=106>Avionic <OPTION value=1>AXI <OPTION value=71>BlackMagic <OPTION value=104>Black Widow (ZTW) <OPTION value=12>Castle <OPTION value=74>Cheetah <OPTION value=23>Cobra <OPTION value=25>Cyclon <OPTION value=93>Detrum <OPTION value=110>DinoPower <OPTION value=22>DJI <OPTION value=65>D-Power <OPTION value=38>Dualsky <OPTION value=27>Dymond <OPTION value=78>DYS <OPTION value=30>E-flite <OPTION value=47>ElectriFly <OPTION value=31>EMAX <OPTION value=79>EMP <OPTION value=62>Engel MT <OPTION value=10>ePower X <OPTION value=50>EP Product <OPTION value=69>Exceed RC <OPTION value=118>Extreme Flight <OPTION value=32>Faigao <OPTION value=113>FHEM <OPTION value=84>Flyduino <OPTION value=33>Flyware <OPTION value=85>FMS <OPTION value=117>Foxy <OPTION value=90>FSD-Motor <OPTION value=123>Futaba <OPTION value=87>Gartt <OPTION value=100>Gaui <OPTION value=19>Gens ace <OPTION value=18>Graupner <OPTION value=89>GS Models <OPTION value=2>Hacker <OPTION value=26>HengLi (HLY) <OPTION value=21>HET (Typhoon) <OPTION value=36>Himax <OPTION value=107>HiTec <OPTION value=125>HobbyStar <OPTION value=124>HobbyWing <OPTION value=3>Hyperion <OPTION value=28>Infinite <OPTION value=66>iPower <OPTION value=115>Jamara <OPTION value=64>Jeti <OPTION value=77>Joby Motors <OPTION value=61>KDEDirect <OPTION value=37>KEDA <OPTION value=6>Kontronik <OPTION value=111>LDPower <OPTION value=20>Lehner <OPTION value=11>Leomotion <OPTION value=59>Leopard <OPTION value=98>Liomax <OPTION value=56>LiPolice <OPTION value=101>Lumenier <OPTION value=121>MAD Components<OPTION value=102>Maytech <OPTION value=4>Mini AC <OPTION value=9>Mega Motor <OPTION value=86>mfly <OPTION value=76>MicroDAN <OPTION value=94>Mikrokopter <OPTION value=96>MotrolFly <OPTION value=105>MP Jet <OPTION value=126>MultiStar  <OPTION value=99>MVVS <OPTION value=5>NeuMotors <OPTION value=57>O.S.Motor <OPTION value=17>Peggy Pepper <OPTION value=29>Pichler <OPTION value=60>Planet-Hobby <OPTION value=40>Plettenberg <OPTION value=109>Poly-Tec <OPTION value=53>PowerHD <OPTION value=48>ProTronik <OPTION value=51>Pulso <OPTION value=72>Quantum <OPTION value=97>Quanum <OPTION value=112>RCinPower <OPTION value=54>RCTimer <OPTION value=103>RCX <OPTION value=43>RedRock <OPTION value=44>ROXXY <OPTION value=42>Roton <OPTION value=81>Savox <OPTION value=8>Scorpion <OPTION value=116>SMC Power <OPTION value=55>Simprop <OPTION value=120>SkyRC <OPTION value=108>Storm <OPTION value=63>SunnySky <OPTION value=88>Suppo <OPTION value=46>T-Motor <OPTION value=68>Tacon <OPTION value=70>Tarot <OPTION value=82>Team Hunter RC <OPTION value=58>Tenshock <OPTION value=45>Thunder Tiger <OPTION value=92>Tomcat <OPTION value=16>Torcman <OPTION value=34>Torcster <OPTION value=83>Tp Power<OPTION value=35>Turnigy <OPTION value=95>Warhead <OPTION value=7>Waypoint <OPTION value=49>Xera <OPTION value=91>Xnova <OPTION value=75>XPower <OPTION value=67>X-Team"; // <OPTION value=0>Alle </OPTION>";

var thePropeller= "<script language='javascript' type='text/javascript' src='./calcinclude/data/propeller.js"+cVersion +"'><\/script>";

// Counter and Link-Ranking
var theCounter	= "<img src='https://www.easycounter.com/counter.php?s4a,eCalc' border='0' alt='Website Hit Counter'>"  //esayCounter wird nur noch als Totalizer genutzt
                  + "<br><a href='https://www.rcflug.ch/topsites/liste.php?list=12' target='_blank' ><img src='https://www.rcflug.ch/topsites/image.php?pass=nwnnKpmn&list=1' border=0 width='42' height='30' alt='#1 RC-Topsites'></a>";
                  //+ "&nbsp;<a href='http://www.modellflugtipps.de/toplinks/toplinks.php?id=2016' target='_blank'>"
                  //+ "<img src='http://www.modellflugtipps.de/toplinks/image.php?id=2016' border=0 vspace=0 hspace=0 height='30' width='50'></a>"
                  //+ "<br><a href='http://www.rcflug.ch/topsites/liste.php?list=12' target='_blank'><img src='http://www.rcflug.ch/topsites/image.php?pass=nwnnKpmn&list=12' border=0 width='42' height='30' alt='RC-Topsites'></a>";

var theShopLogo = "<a href='http://www.s4a.ch' target='_blank'><img border='0' src='./calcinclude/logo/p_s4alogo.gif' width='81' height='45'></a>"; 

var theDonationForm =""; //wird erst im lang_xx.js gesetzt

var theEDriveLink= "";


//Bei Distributoren (e.g. Castle, eflight & co) werden kein SearchButton und exportForm angezeigt --> ="";
var searchButton = "<input class='input' type='button' id='BtnSearch' name='BtnSearch' value='   search...   ' disabled onClick='javascript:openSearch();'/>";
var wizardButton = "<input class='input' type='button' id='BtnPropKvWizard' name='BtnWizard' value=' Prop-KV-Wizard... ' disabled onClick='javascript:openWizard();'/>";


var exportForm =	"<tr><td colspan='6' align='left'>"
					+"<input type='button' value='share' id='shareCalc' onClick='javascript:location.replace(createLink());'/></td>"
					//+"<input type='button' value='share' id='shareCalc' onClick='javascript:location.replace(createLink());'/>&nbsp;<input class='shareLink' name='shareLink' id='shareLink' size='60' onFocus='javascript:this.select();' value='https://' />"
					//+"&nbsp <a href='' id='shareLinkHref' onClick='javascript:createLink();'>https://www.eCalc.ch...</a></td>"
					+"<td colspan='5' align='right'><form id='csvForm' method='post' action='./calcinclude/export.php'><textarea cols='1' name='exportData' rows='1' id='exportData' hidden/></textarea>"
					+"<input type='button' value='Add to &gt;&gt;' id='AddCSV' onClick='javascript:addDataForExport();' disabled/>&nbsp;"
					+"<input type='button' id='DownloadCSV' value='Download .csv (0)' onClick='javascript:exportDataCSV();' disabled/>&nbsp;"
					+"<input type='button' id='ClearCSV' value='&lt;&lt; Clear' onClick='javascript:clearExport()' disabled/></form></td></tr>";



userStatementAccepted = false;


function getParameterByName(name)
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function isSysLanguage(aLang){
  var name = "lang";
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null){ // kein property &lang=
    // System Sprache ermitteln und prüfen, b identisch mit aLang
    var sysLang = navigator.language || navigator.userLanguage || navigator.browserLanguage;
    //alert(sysLang);
    if (sysLang.indexOf(aLang) == 0){
       return true;
    }else{
       return false;
    }
  } else return false; 
}


// Links von fremden Seiten werden nicht akzeptiert!!
function isCallAllowed(theShopName, theShopURL){  
   var tmpStr = top.location.search.split("&");       // 1. Parameter in URL = "?Shopname"
   if(theShopName=="castle")return true;
   // this.opener prüft, ob es wirklich ein bookmark/tipping ist, oder das fenster mit "window.open(this.href);return false;" erzeugt wurde
   if ((tmpStr[0] == "?"+theShopName) && ((top.document.referrer.search(theShopURL) >= 0) || (top.document.referrer.search("s4a.ch") >=0) || (top.document.referrer.search("ecalc.ch") >=0) || ((top.document.referrer == "") && !(this.opener)))){  
      return true;
   }else {
      return false;
   }
}

//Meldungen beim Eintreten und Verlassen

function acceptUserStatement() {
   var msg = "";

   
   if (!isServicePayed) msg = msgUserStatement1;
   msg = msg + msgUserStatement2;
   if (confirm(msg)){
      userStatementAccepted = true;
   } else {
     alert(msgUserStatementNotAccepted);
     location.replace("./index.htm?statementnotaccepted");
   }
}

function showLeaveMsg(){
  var msg="";

  if(!isServicePayed){

     msg= msgLeave;
        
     //alert(history.next.search("s4a.ch"));
     //if (history.next.search("s4a.ch") == -1){
     alert(msg);
     //document.paypal.submit();   
     //}
  }
}


// Black List: hier könnten fremde Nutzer geblockt werden --> auch bei edrive.htm einfügen!

if (top.document.referrer.indexOf("modellbau-ramseyer.ch") >= 0) location.replace("./accessdenied.htm?modellbau-ramseyer.ch");
if (top.document.referrer.indexOf("flightcorner.ch") >= 0) location.replace("./accessdenied.htm?flightcorner.ch");
if (top.document.referrer.indexOf("injetdesigns.com") >= 0) location.replace("./accessdenied.htm?injetdesigns.com");
if (top.document.referrer.indexOf("rcshop.kz") >= 0) location.replace("./accessdenied.htm?rcshop.kz");
if (top.document.referrer.indexOf("zenn.hu") >= 0) location.replace("./accessdenied.htm&zenn.hu");
if (top.document.referrer.indexOf("2dogrc.com") >= 0) location.replace("./accessdenied.htm?2dogrc.com");
if (top.document.referrer.indexOf("thommys.com") >= 0) location.replace("./accessdenied.htm?thommys.com");
if (top.document.referrer.indexOf("rc-terminal.de") >= 0) location.replace("./accessdenied.htm?rc-terminal.de");





// Kunden Whitelabeling Default Settings
var isServicePayed = true;        //true: payed customized eCalc version
var withCustom = false;           //true: eCalc does allow Custom Components
var isFullVersion = true;         //true: eCalc does display search & Download button
var isFullList = true;            //true: eCalc does display the full set of components
var withRpmTable = true;          //true: eCalc does write the RPM Table
var withPreselect = true;         //true: eCalc does preselect the components from the query string
var allPreselectable=false;       //true: eCalc does select a component even not on the list or custom component
var withMobileNavBar = true;       //true: eCalc Mobile zeigt header menue an, false: anzeige ohne menue (e.g. Dualsky App)

var rangeEstimator  = "<div id='placeholderRange' style='width:100%;height:350px'></div>"; //Range Esimator wird angezeigt bei White Labeling (auch ohne Login / Login zeigt immer grapfik)

if (isCallAllowed("s4a","s4a.ch") || isCallAllowed("s4a","ecalc.ch") ) {
   isServicePayed = false;
   withCustom = false;
   isFullVersion = false;
   isFullList = false;
   withRpmTable = false;
   withPreselect = false;
   rangeEstimator  =	 "<img class='img-responsive' id='pictureRangeEstimator' alt='Range Estimator Specimen' src='calcinclude/logo/p_range_estimator.jpg' />";  // nur Bsp. Bild anzeigen

}

else if (isCallAllowed("ecalc","ecalc.ch") || isCallAllowed("ecalc","s4a.ch") ) {
   isServicePayed = false;
   withCustom = false;
   isFullVersion = false;
   isFullList = false;
   withRpmTable = false;
   withPreselect = false;
   rangeEstimator  =	 "<img class='img-responsive' id='pictureRangeEstimator' alt='Range Estimator Specimen' src='calcinclude/logo/p_range_estimator.jpg' />";   // nur Bsp. Bild anzeigen 
 
}

//else if (isCallAllowed("ecalc","rcgroups.com")) {
//   isServicePayed = false;
//   withCustom = false;
//   isFullVersion = false;
//}


else if (isCallAllowed("castle","castlecreations.com")){ //Customer since 17.6.2010, Hersteller
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_castle.css"+cVersion +"' />";
   theShopLogo = "<a href='http://www.castlecreations.com' target='_top'><img border='0' src='./calcinclude/logo/castlecreations.jpg'></a>";
   theDonationForm = theShopLogo; // Keine spende anzeigen
   theMotors   = "<OPTION value=1>AXI <OPTION value=12 selected>Castle <OPTION value=30>E-flite <OPTION value=2>Hacker <OPTION value=36>Himax <OPTION value=61>KDEDirect <OPTION value=6>Kontronik <OPTION value=11>Leomotion <OPTION value=5>NeuMotors <OPTION value=57>O.S.Motor <OPTION value=40>Plettenberg <OPTION value=47>RimFire <OPTION value=8>Scorpion";
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_castle.js"+cVersion +"'> </script>";
   searchButton = "";
   wizardButton = "";
   exportForm = "";
}

else if (isCallAllowed("dualsky","dualsky.com") || isCallAllowed("dualsky","horejsi.cz")) { //Customer since 15.7.10, Hersteller, inkl. Horejsi.cz email vom 29.10.14
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_dualsky.css"+cVersion +"' />";
   theShopLogo = "<a href='http://www.dualsky.com/' target='_top'><img border='0' src='./calcinclude/logo/dualsky.jpg'></a>";
   theDonationForm = theShopLogo; // Keine spende anzeigen
   theMotors = "<OPTION value=38 selected>Dualsky </OPTION>";
   theCells="<script language='JavaScript' src='./calcinclude/data/cell_dualsky.js"+cVersion +"'> </script>";
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_dualsky.js"+cVersion +"'> </script>";
}

else if (isCallAllowed("dualsky-app","")) { //Customer since 15.7.10, für mobile App
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_dualsky.css"+cVersion +"' />";
   theShopLogo = "<a href='http://www.dualsky.com/' target='_top'><img border='0' src='./calcinclude/logo/dualsky.jpg'></a>";
   theDonationForm = theShopLogo; // Keine spende anzeigen
   theMotors = "<OPTION value=38 selected>Dualsky </OPTION>";
   theCells="<script language='JavaScript' src='./calcinclude/data/cell_dualsky.js"+cVersion +"'> </script>";
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_dualsky.js"+cVersion +"'> </script>";
   withMobileNavBar = false;
}

else if (isCallAllowed("eflight","eflight.ch") || isCallAllowed("eflight","epower.ch") || isCallAllowed("eflight","")){  //since 2006, , Distributor / "" wegen HTTPS liefert kein referer an HTTP-Site!!
      theShopLogo = "<a href='http://www.eflight.ch' target='_top'><img border='0' src='./calcinclude/logo/eflight.gif'></a>";
      theDonationForm = theShopLogo; // Keine spende anzeigen
      theMotors = "<OPTION value=1>AXI <OPTION value=10>ePower <OPTION value=2>Hacker <OPTION value=3>Hyperion <OPTION value=64>Jeti <OPTION value=4>Mini AC <OPTION value=9>Mega Motor <OPTION value=5>NeuMotors <OPTION value=6>Kontronik <OPTION value=8>Scorpion </OPTION>";
      theESC="<script language='JavaScript' src='./calcinclude/data/esc_eflight.js"+cVersion +"'> </script>";
      searchButton = "";
      wizardButton = "";
      exportForm = "";
      //alert(top.document.referrer);


/*
   //alert(top.document.referrer);
   if ((top.document.referrer.search("epower.ch/login") >= 0)|| (top.document.referrer.search("ecalc.ch") >=0)) {
      theShopLogo = "<a href='http://www.eflight.ch' target='_top'><img border='0' src='./calcinclude/logo/eflight.gif'></a>";
      theDonationForm = theShopLogo; // Keine spende anzeigen
      theMotors = "<OPTION value=1>AXI <OPTION value=10>ePower <OPTION value=2>Hacker <OPTION value=3>Hyperion <OPTION value=64>Jeti <OPTION value=4>Mini AC <OPTION value=9>Mega Motor <OPTION value=5>NeuMotors <OPTION value=6>Kontronik <OPTION value=8>Scorpion </OPTION>";
      theESC="<script language='JavaScript' src='./calcinclude/data/esc_eflight.js"+cVersion +"'> </script>";
      searchButton = "";
      wizardButton = "";
      exportForm = "";
   }else{  //alle anderen Aufrufe müssen über Login!
       sec="motorcalc";
       //alert(window.location.pathname);
       if (top.location.pathname=="/motorcalc.php" || top.location.pathname=="/motorcalc.htm"){
         sec="motorcalc";
       }
       else if (top.location.pathname=="/fancalc.php" || top.location.pathname=="/fancalc.htm"){
          sec="fancalc";
       }
       else if (top.location.pathname=="/helicalc.php" || top.location.pathname=="/helicalc.htm"){
          sec="helicalc";
       }
       else if (top.location.pathname=="/xcoptercalc.php" || top.location.pathname=="/xcoptercalc.htm"){
          sec="xcoptercalc";
       };

       top.location.replace("http://epower.ch/login/in.php?sec="+sec);
   } 
*/

}


else if (isCallAllowed("grischa","grischamodellbau.ch") || isCallAllowed("grischa","")) { //Commercial since 1.1.12, Distributor / "" wegen HTTPS liefert kein referer an HTTP-Site!!
   theShopLogo = "<a href='http://www.grischamodellbau.ch' target='_top'><img border='0' src='./calcinclude/logo/grischa.jpg'></a>";
   if (window.location.pathname.indexOf("fancalc")> 0){
      theShopLogo = "<a href='http://www.grischamodellbau.ch' target='_top'><img border='0' src='./calcinclude/logo/grischa_fan.jpg'></a>";
   } else if (window.location.pathname.indexOf("helicalc")> 0){
      theShopLogo = "<a href='http://www.grischamodellbau.ch' target='_top'><img border='0' src='./calcinclude/logo/grischa_heli.jpg'></a>";
   } else if (window.location.pathname.indexOf("xcoptercalc")> 0){
      theShopLogo = "<a href='http://www.grischamodellbau.ch' target='_top'><img border='0' src='./calcinclude/logo/grischa_xcopter.jpg'></a>";
   } else {
      theShopLogo = "<a href='http://www.grischamodellbau.ch' target='_top'><img border='0' src='./calcinclude/logo/grischa_prop.jpg'></a>";
   };

   theDonationForm = theShopLogo; // Keine spende anzeigen
   theMotors    = "<OPTION value=71>BlackMagic <OPTION value=30>E-flite <OPTION value=50>EP Product<OPTION value=36>Himax <OPTION value=57>O.S.Motor <OPTION value=48>ProTronik <OPTION value=44>robbe ROXXY <OPTION value=45>Thunder Tiger </OPTION>";
   searchButton = "";
   wizardButton = "";
   exportForm = "";
}

else if (isCallAllowed("hacker","hacker-motor.com") || isCallAllowed("hacker","hacker-motor-shop.com") || isCallAllowed("hacker","para-rc.de")){ //since 2.2014, Hersteller
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_hacker.css"+cVersion +"' />";
   theShopLogo = "<a href='http://hacker-motor.com' target='_top'><img border='0' src='./calcinclude/logo/hacker.png'></a>";
   theDonationForm = "<a href='http://hacker-motor.com' target='_top'><img border='0' src='./calcinclude/logo/hacker.png'></a>";   
   theMotors = "<OPTION value=2 selected>Hacker </OPTION>";
   theCells="<script language='JavaScript' src='./calcinclude/data/cell_hacker.js"+cVersion +"'> </script>";
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_hacker.js"+cVersion +"'> </script>";
}

else if (isCallAllowed("usahacker","hackermotorusa.com")){ //since 4.2015, Distributor / HTTPS-Call von HTTPS
   theCSS	= "<link rel=stylesheet type='text/css' href='./calcinclude/css/ecalc_hacker.css"+cVersion +"' />";
   theShopLogo = "<a href='http://hackermotorusa.com' target='_top'><img border='0' src='./calcinclude/logo/hackerusa.png'></a>";
   theDonationForm = theShopLogo;  
   theMotors = "<OPTION value=2 selected>Hacker </OPTION>";
   theCells = theCells;
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_hacker.js"+cVersion +"'> </script>";
   //alert(top.document.referrer);
}


else if (isCallAllowed("hk","hobbyking.com")) { // Testing 12. Sept 15
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_hk.css"+cVersion +"' />";
   theShopLogo = "<a href='http://www.hobbyking.com/' target='_top'><img border='0' src='./calcinclude/logo/hobbyking.png'></a>";
   theDonationForm = theShopLogo; // Keine spende anzeigen
   theMotors = "<OPTION value=104>Black Widow <OPTION value=126>MultiStar  <OPTION value=97>Quanum <OPTION value=35 selected>Turnigy </OPTION>";
   //theCells="<script language='JavaScript' src='./calcinclude/data/cell_dualsky.js"+cVersion +"'> </script>";
   //theESC="<script language='JavaScript' src='./calcinclude/data/esc_dualsky.js"+cVersion +"'> </script>";
}


else if (isCallAllowed("hobbystar","hobbystarlabs.com") || isCallAllowed("hobbystar","rcjuice.com")) { // HobbyStar Sept. 17 / HTTPS-Call von HTTPS
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_hobbystar.css"+cVersion +"' />";
   theShopLogo = "<a href='https://www.hobbystarlabs.com/' target='_top'><img border='0' src='./calcinclude/logo/hobbystar.png' height=130></a>";
   theDonationForm = "<a href='https://www.hobbystarlabs.com/' target='_top'><img border='0' src='./calcinclude/logo/hobbystar.png' height=130></a>"; // Keine spende anzeigen
   theMotors = "<OPTION value=125 selected>HobbyStar</OPTION>";
   //theCells="<script language='JavaScript' src='./calcinclude/data/cell_dualsky.js"+cVersion +"'> </script>";
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_generic.js"+cVersion +"'> </script>";
   //alert(top.document.referrer);
   searchButton = "";
   wizardButton = "";
   exportForm = "";
}


else if (isCallAllowed("leomotion","leomotion.com") || isCallAllowed("leomotion","leomotion.ch")) { //10.11, Gratis
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_leomotion.css"+cVersion +"' />";
   theShopLogo = "<a href='http://www.leomotion.com' target='_top'><img border='0' src='./calcinclude/logo/leomotion.jpg'></a>";
   theDonationForm = theShopLogo; // Keine spende anzeigen
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_leo.js"+cVersion +"'> </script>";
   theMotors = "<OPTION value=38>Dualsky <OPTION value=11 selected>Leomotion <OPTION value=5>NeuMotors </OPTION>";
   theEDriveLink= "&nbsp;<span onClick=javascript:addDrive('http://www.s4a.ch/admin_leomotion/add.asp')> > </span>";
}



else if (isCallAllowed("neumotors","neumotors.com")){ //Hersteller since 15.5.2010
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_neumotors.css"+cVersion +"' />";
   theShopLogo = "<a href='http://www.neumotors.com' target='_top'><img border='0' src='./calcinclude/logo/neumotors.jpg'></a>";
   theDonationForm = theShopLogo; // Keine spende anzeigen
   theMotors = "<OPTION value=5 selected>NeuMotors </OPTION>";
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_castle.js"+cVersion +"'> </script>";

}

else if (isCallAllowed("polytec","poly-tec.org")) { // Poly-Tec Test 1.6. bis 31.8.16 / HTTPS-Call von HTTPS
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_polytec.css"+cVersion +"' />";
   theShopLogo = "<a href='http://www.poly-tec.org/' target='_top'><img border='0' src='./calcinclude/logo/polytec.jpg' height=130></a>";
   theDonationForm = "<a href='http://www.poly-tec.org/' target='_top'><img border='0' src='./calcinclude/logo/polytec2.jpg' height=130></a>"; // Keine spende anzeigen
   theMotors = "<OPTION value=109 selected>Poly-Tec</OPTION>";
   //theCells="<script language='JavaScript' src='./calcinclude/data/cell_dualsky.js"+cVersion +"'> </script>";
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_generic.js"+cVersion +"'> </script>";
   //alert(top.document.referrer);
   searchButton = "";
   wizardButton = "";
   exportForm = "";
}

/*  --- no trafic
else if (isCallAllowed("rcpr","rcpartratings.com")){ //Partner since 15.5.2015 sam.thompson@gmail.com
   theShopLogo = "<a href='http://www.rcpartratings.com' target='_top'><img border='0' src='./calcinclude/logo/rcpartrating.png'></a>";
   isServicePayed = false;
   withCustom = false;
   isFullVersion = false;
   isFullList = false;
   withRpmTable = false;
   withPreselect = true;
   allPreselectable=true;

}

else if (isCallAllowed("rotorbuilds","rotorbuilds.com")){ //Partner since Sept. 15 scott@hawkee.com
   theShopLogo = "<a href='http://www.rotorbuilds.com' target='_top'><img border='0' src='./calcinclude/logo/rotorbuilds.png' width=230px></a>";
   isServicePayed = false;
   withCustom = false;
   isFullVersion = false;
   isFullList = false;
   withRpmTable = false;
   withPreselect = true;
   allPreselectable=true;
}
*/



//---- TESTING -------------

else if (isCallAllowed("generic","ecalc.ch")) { //Testing 20.3
   theShopLogo = "<a href='http://www.s4a.ch/' target='_top'><img border='0' src='./calcinclude/logo/generic.gif'></a>";
   theDonationForm = theShopLogo; // Keine spende anzeigen
   theShopForm = "";
   isFullVersion = false;
   isFullList = false;      
}



//end Testing-----


else{
    isServicePayed = false;
    isCommercialUser = false;
    isFullVersion = false;
    isFullList = false;
    withRpmTable = false;
    withPreselect = false;
    rangeEstimator  =	 "<img class='img-responsive' id='pictureRangeEstimator' alt='Range Estimator Specimen' src='calcinclude/logo/p_range_estimator.jpg' />";    // nur Bsp. Bild anzeigen
}


// Werbung Anzeigen, wenn der Service nicht für einen Kunden ist
var displayAds=!isServicePayed;


//*** Bei Systemstörungen die full version Variablen hierher kopieren *****


