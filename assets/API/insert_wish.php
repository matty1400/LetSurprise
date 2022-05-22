<?php
include "./conn.php";
$wish = $_GET["wish"];
$userID = $_GET["userID"];

$addWish = procedure("call addWish('$wish', $userID);");
echo json_encode($addWish);
?>