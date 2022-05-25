<?php
    include "./conn.php";
    $wish = $_GET["wish"];

    $pullSugg = getQuery("SELECT * FROM scrapedItems WHERE searchName = '$wish';");
    echo json_encode($pullSugg);
?>