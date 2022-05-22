<?php
    include "./conn.php";
    $userID = $_GET["userID"];
    $newCredential = $_GET["newCredential"];
    
    $infoUser = insertQuery("UPDATE person
    SET email = '$newCredential'
    WHERE personId = $userID;");
  
    echo json_encode($infoUser);
?>