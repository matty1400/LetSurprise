<?php
include "./conn.php";
$userID = $_GET["userID"];


$infoUser = getQuery("select * from event where userId = $userID");

echo json_encode($infoUser);
