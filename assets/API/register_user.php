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
</head>
<body>

<h1 class="Title">
    USER CREATED
</h1>
<a href="/Log_in.html" >
            Log In
</a>

    
</body>
</html>

 

