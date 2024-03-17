<?php
//$bdd = new PDO('mysql:host=localhost;dbname=players;charset=utf8', 'root', 'root');
$bdd = new PDO('mysql:host=sql2.cluster1.easy-hebergement.net;dbname=focaliser;charset=utf8', 'focaliser', 'jEzTWGDp');
function getUserIP()
{
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];
    if(filter_var($client, FILTER_VALIDATE_IP))
    {
        $ip = $client;
    }
    elseif(filter_var($forward, FILTER_VALIDATE_IP))
    {
        $ip = $forward;
    }
    else
    {
        $ip = $remote;
    }
    return $ip;
}

//si y'as des données à foutre, on les fous.

if($_GET['pseudo']) {
   
    $pseudo = $_GET['pseudo'];
    $vies = $_GET['vies'];
    $position = $_GET['position'];
    $rotation = $_GET['rotation'];
    $niveau = $_GET['level'];
    $ip = getUserIP();
    
    
    $getDate = date('j.m.y, h.i.s');

    
    //check if exists
    $check = $bdd->query('SELECT niveau FROM joueurs WHERE niveau='.$niveau.'');
    //inserting into
    $iduser = $check->fetch()[0];

    if($iduser != $niveau) {
       
        $req = $bdd->prepare('INSERT INTO joueurs(pseudo, vies, position, rotation, niveau, ip, today) VALUES(:pseudo, :vies, :position, :rotation, :niveau, :ip, :today)');
        $req->execute(array(
            'pseudo' => $pseudo,
            'vies' => $vies,
            'position' => $position,
            'rotation' => $rotation,
            'niveau' => $niveau,
            'ip' => getUserIP(),
            'today' => $getDate
        ));
        $exists = "na";
        
    } else if ($iduser == $niveau) {
        
        $req = $bdd->prepare('UPDATE joueurs SET pseudo=:pseudo, vies=:vies, position=:position, rotation=:rotation, niveau=:niveau, ip=:ip, today=:today WHERE niveau=:niveau');
        $req->execute(array(
            'pseudo' => $pseudo,
            'vies' => $vies,
            'position' => $position,
            'rotation' => $rotation,
            'niveau' => $niveau,
            'ip' => getUserIP(),
            'today' => $getDate
        ));
        $exists = "ya";

    }
    
}
/*
$nbOfRows = $bdd->query('SELECT COUNT(id) FROM joueurs')->fetch();
$nbOfPlayers = $nbOfRows[0];
*/

$reponse = $bdd->query('SELECT * FROM joueurs ORDER BY id DESC;');
$toArray = array();
while ($donnees = $reponse->fetch())
{
    $pseudo = $donnees['pseudo'];
    $vies = $donnees['vies'];
    $position = $donnees['position'];
    $rotation = $donnees['rotation'];
    $niveau = $donnees['niveau'];
    $arr = array('pseudo' => $pseudo, 'vies' => $vies, 'position' => $position, 'rotation' => $rotation, 'level' => $niveau, 'exists' => $exists);
    array_push($toArray, $arr);
    //$arr = json_encode($arr);
    //echo $arr;
}
$reponse->closeCursor(); 
//print_r($toArray);
//echo "<br>";
$toArray = json_encode($toArray);
echo $toArray;