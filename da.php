<?php

//var_dump($_FILES);
$image = $_FILES["fichier"]["tmp_name"];
move_uploaded_file($image, "FILES/".date("YmdHis"));