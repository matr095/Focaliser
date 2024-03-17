<?php
$base = mysqli_connect ('sql2.cluster1.easy-hebergement.net', 'focaliser', 'jEzTWGDp');
mysqli_select_db ($base, 'focaliser') ;


?>


<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
       <link rel="stylesheet" href="style.css" />
       <script type="text/javascript" src="tombe.js"></script>
       



           <title>BRIKA - Les grands espaces du t'chateur</title>
   </head>

   <body>
   

 <div id="bandeau">
 
 
 </div>
   
 
    <div id="chatbox">
    
    <div id="zone" align="center" style="position: relative; width: 570px; height: 400px;">

<script type="text/javascript">
<!--
tombeSur('zone');
//-->
</script>
    
    <center>

<?php




// lancement de la requête (on impose aucune condition puisque l'on désire obtenir la liste complète des propriétaires
$sql = 'SELECT AUT, POS FROM chat_msg ORDER BY ID DESC LIMIT 0, 20';

// on lance la requête (mysqli_query) et on impose un message d'erreur si la requête ne se passe pas bien (or die)
$req = mysqli_query($base, $sql) or die('Erreur SQL !<br />'.$sql.'<br />'.mysqli_error($base));

// on va scanner tous les tuples un par un
while ($data = mysqli_fetch_array($base, $req)) {
	// on affiche les résultats
	echo ' '.$data['AUT'].' - ';
	echo ''.$data['POS'].'<br />';
}
mysqli_free_result ($req);
mysqli_close ();
?></center>
 </div>

</div>

    <div id="envoi"> <center>
    
         <form action="minichat.php" method="post">
        <p>
        <label for="AUT">Pseudo</label> : <input type="text" name="AUT" id="AUT" /><br />
        <label for="POS">Message</label> :  <input type="text" name="POS" id="POS" /><br />

        <input type="submit" value="Envoyer" />
	</p>
    </form>

    
   
    
    
     



    </center>
    </div>
    

        </body>
</html>