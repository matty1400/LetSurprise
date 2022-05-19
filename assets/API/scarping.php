<?php
include "./conn.php";
$productimageURL = $_GET["productimageURL"];
$productNameTxt = $_GET["productNameTxt"];
$pijstje = $_GET["pijstje"];

$addwishing = procedure("call possible($productimageURL, $productNameTxt, $pijstje);");
echo json_encode($addwishing);
