<?php
    function makeDbConnection() {
        // Credentials om te connecteren met een database
            $hostname = "localhost"; //ID362590_IMS1.db.webhosting.be -- OP COMBELL
            $user = "root"; //ID362590_IMS1 -- OP COMBELL
            $password = "root"; //combellpassword
            $database = "letsurprise"; //ID362590_IMS1
            
        // Make the connection
        $conn = mysqli_connect($hostname, $user, $password, $database);
        

        // Check if the connection is working
        if ($conn == false) {
            // Stop met de php code
            die("Geen database connectie");
        }

        return $conn;
    };

    

    function closeConnection($conn) {
        // Connection mySql server
        $conn->close();
    }

   

    function getQuery($sqlQuery) {
        // Make connection
        $conn = makeDbConnection();

        // Prepare the sql statement
        $result = mysqli_query($conn, $sqlQuery);

        // Close the connection
        closeConnection($conn);

        // Return associated array of the results
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    function insertQuery($sqlQuery) {
        // Add product
        $conn = makeDbConnection();

        // Prepare the sql statement
        $result = mysqli_query($conn, $sqlQuery);

        // Connection close
        closeConnection($conn);

        return $result;
    }

    function procedure($sqlQuery) {
          // Add product
          $conn = makeDbConnection();

          // Prepare the sql statement
          $result = mysqli_query($conn, $sqlQuery);
  
          // Connection close
          closeConnection($conn);
  
          return $result;
    }


  