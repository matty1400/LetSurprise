<?php
    include "./conn.php";
    $userID = $_GET["userID"];

   


    
    $infoUser= getQuery("select user_tokens from tokens where player = $userID;");
    
    echo json_encode($infoUser);

   
?>