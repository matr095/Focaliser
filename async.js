//YEAH ON PEUT JOUER EN LIGNE AVEC SA !!!!! HiHi !!!!
//REGARD' C SUPEEEEEEEEEEEEER !!!!!!!! xD :Hap:

var pseudo = prompt("Choisir un pseudo:")
var data1;
var sessionId = Math.random() * (99 - 1) + 1 * Date.now();


function activeOnlline() {
    var request = new XMLHttpRequest();
    var vies = "100";
    var position = "['"+Perso.position.x+"','"+Perso.position.y+"','"+Perso.position.z+"']";
    var rotation = Perso.rotation.y
    var level = "1"
    var datas = "";
    var debog;

    request.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                datas = this.responseText;
                //console.log(datas)
                datas = JSON.parse(datas)
                for (var item in datas) {
                    //console.log(datas[item])
                    var player = datas[item];
                    position = player["position"]

                    debog = position.replace("[", "").replace("]", "").replace(/'/g, '').replace(/"/g, '').split(",");
                    var newPseudo = player["pseudo"];
                    var newPosition = debog
                    var newRotation = player["rotation"];
                    var level = player["level"];
                    var exists = player["exists"];
                    if(sessionId != level) {
                        newPerso(exists, level, newPseudo, newPosition, newRotation);
                        console.log(112)
                        listPlayers(exists, level);
                    }
                }
            } else {
                //console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
            }
        }
    };

    request.open('GET', 'online.php?pseudo='+pseudo+'&vies='+vies+'&position='
    +position+'&rotation='+rotation+"&level="+sessionId, true);
    request.send(null);
}

function isKill(level){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                datas = this.responseText;
                console.log('killed at' + datas + " and type " + typeof(datas))
                if(sessionId == datas) {
                    alert("T'as perdu !")
                    window.location.reload();
                }
            }
        }
    }
    request.open('GET', 'delete.php?action=kill&level='+level, true);
    request.send(null);
}

function alive(level){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                datas = this.responseText;
                if(datas == 'dead') {
                    alert("T'as perdu !")
                    window.location.reload();
                }
            }
        }
    }
    request.open('GET', 'delete.php?action=check&level='+level, true);
    request.send(null);
}

activeOnlline();