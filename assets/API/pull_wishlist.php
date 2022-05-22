<?php
    include "./conn.php";
    $userID = $_GET["userID"];

    $pullWish = getQuery("SELECT * FROM products WHERE person = $userID;");
    echo json_encode($pullWish);
?>