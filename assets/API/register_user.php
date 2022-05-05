<?php
 include "./conn.php";
 
 $firstname = $_POST["firstname"];
 $lastname= $_POST["lastname"];
 $email = $_POST["Email"];
 $password = $_POST["Password"];
 
 
 
 procedure("call addPerson('$password','$email','$firstname','$lastname');");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="/assets/css/returning.css" rel="stylesheet" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet">    
</head>
<body>
    <img src="/assets/images/Logo_LetSurprise2.png" id="logo" alt="Logo">
    <h1 id="title">
        USER CREATED
    </h1>
    <h3 id="confirmed">
        Returning to the log-in page
    </h3>
    <script>
        setTimeout("location.href = '../../Log_in.html';", 3000);
    </script>
</body>
</html>

 

