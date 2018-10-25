<html>
<head>
<title>Test connectivity results</title>
</head>
<body>

<div align="left">
<?php
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);

  // error_reporting(1);
  $host = "localhost";
  $user = "wight14";
  $password = "pecos";
  $port = 3306;

  if (!($link = mysqli_connect("$host:$port","$user","$password", "wight14"))) {
    print("couldn't connect: " . '&nbsp;');
    exit;
  }
  echo 'successful connection';

  $create = "CREATE TABLE job (ID int NOT NULL AUTO_INCREMENT, companyName VARCHAR(100) NOT NULL, jobTitle VARCHAR(100) NOT NULL, contactName VARCHAR(100) NOT NULL, contactEmail VARCHAR(100) NOT NULL, jobDescription TEXT NOT NULL, PRIMARY KEY (ID))";

  if($link->query($create)){
    echo "Created";
  } else {
    echo "Naht";
  }

  mysqli_close($link);

?>

</body>
</html>