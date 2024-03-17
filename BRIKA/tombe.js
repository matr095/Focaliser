// JavaScript Document
function tombe () {
  for (var i = 0; i < nbFlocons; i++) {
    if (flocons[i]["top"] > hauteurF) {
      flocons[i]["top"] = 0;
      flocons[i]["left"] = Math.floor(Math.random()*largeurF);
    } else 
      flocons[i]["top"] += 10;
    document.getElementById('f'+i).style.top = flocons[i]["top"]+'px';
    document.getElementById('f'+i).style.left = flocons[i]["left"]+'px';
  }
}

function tombeSur (id) {
  //spécifier le nombre d'objets ici
  nbFlocons = 20;
  //la dimension de l'objet
  objectWidth = 36;
  objectHeight = 40;
  //dimension de la zone
  largeurF = parseInt(document.getElementById(id).style.width.substr(0, document.getElementById(id).style.width.length-2));
  hauteurF = parseInt(document.getElementById(id).style.height.substr(0, document.getElementById(id).style.height.length-2));
  largeurF -= objectWidth;
  hauteurF -= objectHeight;
  flocons = new Array();
  for (var i=0; i < nbFlocons; i++) {
    flocons[i] = new Array();
    flocons[i]["left"] = Math.floor(Math.random()*largeurF);
    flocons[i]["top"] = Math.floor(Math.random()*hauteurF);
 
    document.write ('<span id="f'+i+'" style="position: absolute; left: '+flocons[i]["left"]+'px; top: '+flocons[i]["top"]+'px; color: white">');
    // placer ici l'objet qui tombe !
    document.write ('<img src="flocon.gif">');
    document.write ('</span>');
  }
  
  intervalF = window.setInterval ("tombe()", 50);
}
