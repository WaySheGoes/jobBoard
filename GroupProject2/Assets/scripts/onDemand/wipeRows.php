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

  $studentId = $_GET["studentId"];
  $jobId = $_GET["jobId"];

  $wipe = "DELETE FROM student WHERE ID IS NOT NULL";

  if($link->query($wipe)){
    echo "Cleared";
  } else {
    echo "Failed";
  }

  mysqli_close($link);
?>