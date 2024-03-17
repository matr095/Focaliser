<?php


$AUT = htmlentities($AUT);
$POS = htmlentities($POS);

// Connexion à la base de données
try
{
	$bdd = new PDO('mysql:host=sql2.cluster1.easy-hebergement.net;dbname=focaliser', 'focaliser', 'jEzTWGDp');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getPOS());
}

// Insertion du message à l'aide d'une requête préparée
$req = $bdd->prepare('INSERT INTO chat_msg (AUT, POS) VALUES(?, ?)');
$req->execute(array(htmlentities($_POST['AUT']), htmlentities($_POST['POS'])));

// Redirection du visiteur vers la page du minichat
header('Location: index.php');
?>
