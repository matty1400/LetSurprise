<?php
    include "./conn.php";

    $userID = $_GET["userID"];

    $procedure = procedure("CALL removeUser($userID);");
    
    echo json_encode($procedure);

    // var_dump(password_verify("hiworld", "$2y$10$DaE11dMN29RjYaz6viS9z.qfch.BRdptZjpT/kWD0xXDrGcQPpoC.[]"));
?>