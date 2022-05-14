<?php
include "./conn.php";
$date = $_GET["date"];
$title = $_GET["title"];


$addEvent = procedure("call addEvent($date, $title);");
echo json_encode($addEvent);
