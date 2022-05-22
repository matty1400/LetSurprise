<?php
    include "./conn.php";
    $oldCredential = $_GET["oldCredential"];
    $newCredential = $_GET["newCredential"];
    
    $oldCredentialHash = hash("sha256", $oldCredential);
    $newCredentialHash = hash("sha256", $newCredential);

    $infoUser = insertQuery("UPDATE person
    SET password = '$newCredentialHash'
    WHERE password = '$oldCredentialHash';");
  
    echo json_encode($infoUser);
?>