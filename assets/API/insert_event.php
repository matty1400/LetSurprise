<?php
include "./conn.php";
$date = $_GET["date"];
$title = $_GET["title"];
$userID = $_GET["userID"];


$addEvent = procedure("call addEvent('$date', '$title',$userID);");
echo json_encode($addEvent);
?>