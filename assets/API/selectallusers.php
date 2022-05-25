<?php
    include "./conn.php";

    $infoUsers = getQuery("SELECT personId, firstName, lastName, email FROM person;");
    
    echo json_encode($infoUsers);

    // var_dump(password_verify("hiworld", "$2y$10$DaE11dMN29RjYaz6viS9z.qfch.BRdptZjpT/kWD0xXDrGcQPpoC.[]"));
?>