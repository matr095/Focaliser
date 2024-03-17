<?php

//$bdd = new PDO('mysql:host=localhost;dbname=players;charset=utf8', 'root', 'root');
$bdd = new PDO('mysql:host=sql2.cluster1.easy-hebergement.net;dbname=focaliser;charset=utf8', 'focaliser', 'jEzTWGDp');

$action = $_GET['action'];

if($action == "kill") {
    if($_GET['level']) {
        $sessionKilled = $_GET['level'];
        $check = $bdd->exec('DELETE FROM joueurs WHERE niveau='.$sessionKilled.'');
        echo $sessionKilled;
    }
}

if($action == "check") {
    if($_GET['level']) {
        //check if exists
        $niveau = $_GET['level'];
        $check = $bdd->query('SELECT niveau FROM joueurs WHERE niveau='.$niveau.'');
        //inserting into
        $iduser = $check->fetch();
        if($iduser>0) {
            echo 'exists';
        } else {
            echo 'dead';
        }
    }
}