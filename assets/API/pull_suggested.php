<?php
    include "./conn.php";
    $wish = $_GET["wish"];

    $pullSugg = getQuery("SELECT * FROM scrapeditems WHERE searchName = '$wish';");
    echo json_encode($pullSugg);
?>