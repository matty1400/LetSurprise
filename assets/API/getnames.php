<?php

    include "./conn.php";

    $infoUser = getQuery("SELECT firstName, lastName FROM person;");
    echo json_encode($infoUser);

?>