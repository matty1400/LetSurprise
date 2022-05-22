<?php
    include "./conn.php";
    $userID = $_GET["userID"];

   


    
    $infoUser= insertQuery("update tokens set user_tokens = user_tokens -1 where player = $userID;");
    
    echo json_encode($infoUser);

   
?>