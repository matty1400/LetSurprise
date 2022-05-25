<?php
include "./conn.php";
$userID = $_GET["userID"];
$eventName = $_GET["eventName"];


$infoUser = getQuery("DELETE from event where userId = $userID AND event_name = '$eventName';");

echo json_encode($infoUser);
