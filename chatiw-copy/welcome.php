<?php

$servername = "localhost";
$username = "root";
$password = "open";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
else echo "connection succesfull"; 

$sql =" INSERT INTO chatiw.users(nickname, age, sex, country, city) 
VALUES ('" .$_POST["nickname"]. "', '" .$_POST["age"]. "', 
        '" .$_POST["sex"]. "', '" . $_POST["country"] . "', 
        '" .$_POST["city"] ."');";   

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  
  $conn->close();

echo "nickname= " . $_POST["nickname"] ."<br>";
echo "age= " . $_POST["age"] ."<br>" ;
echo "gender= " . $_POST["sex"] ."<br>" ;
echo "country= " .$_POST["country"] ."<br>"; 
echo "city= " . $_POST["city"] ."<br>";
 

?>