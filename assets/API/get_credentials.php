
<?php
    include "./conn.php";
    $email = $_GET["email"];
    
    $infoUser= getQuery("select * from person where email = '$email' ;");
    echo json_encode($infoUser);
?>
