<?php
    include "./conn.php";
    $userFirstName = $_GET["firstName"];
    $userLastName = $_GET["lastName"];


    $pullID = getQuery("SELECT personId FROM person WHERE firstName = '$userFirstName' AND lastName = '$userLastName';");
    echo json_encode($pullID);
?>