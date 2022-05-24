<?php
    include "./conn.php";
    $email = $_GET["email"];
    $passwordText = $_GET["password"];
    $password =  hash("sha256", $passwordText);

   


    
    $infoUser= getQuery("select * from person where email = '$email'AND password = '$password' ;");
    
    echo json_encode($infoUser);

    // var_dump(password_verify("hiworld", "$2y$10$DaE11dMN29RjYaz6viS9z.qfch.BRdptZjpT/kWD0xXDrGcQPpoC.[]"));
?>
