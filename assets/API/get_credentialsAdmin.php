<?php
    include "./conn.php";
    $email = $_GET["email"];
    $passwordText = $_GET["password"];

    $infoAdmin = getQuery("select * from adminlogin where adminEmail = '$email' AND adminPass = '$passwordText';");
    
    echo json_encode($infoAdmin);

    // var_dump(password_verify("hiworld", "$2y$10$DaE11dMN29RjYaz6viS9z.qfch.BRdptZjpT/kWD0xXDrGcQPpoC.[]"));
?>