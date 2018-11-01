<?php
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);

	// error_reporting(1);
	$host = "localhost";
	$user = "wight14";
	$password = "pecos";
	$port = 3306;

	if(!($link = mysqli_connect("$host:$port","$user","$password", "wight14"))) {
		print("couldn't connect: " . '&nbsp;');
		exit;
	}
	
	$select = "SELECT * FROM student";

	$result = $link->query($select);
	
	if($result->num_rows > 0){
		while($row = $result->fetch_assoc()){
			echo $row["ID"] . "," . $row["studentName"] ."," . $row["studentEmail"] .",";
		}
	}else{
		echo "rekt";
	}		
  	mysqli_close($link);
?>