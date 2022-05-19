<?php
    include "./conn.php";
    $oldCredential = $_GET["oldCredential"];
    $newCredential = $_GET["newCredential"];
    
    $infoUser= insertQuery("UPDATE person
    SET password = '$newCredential'
    WHERE password = '$oldCredential';");
  
    echo json_encode($infoUser);
?>