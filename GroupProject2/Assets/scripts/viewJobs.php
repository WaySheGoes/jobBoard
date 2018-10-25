<!DOCTYPE html>
<html>
<head>
	<title>Job Board</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="script.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="..\styles\styles.css">
</head>
<body>
	<nav class="navbar navbar-default">  
        <a class="navbar-brand" href="#"><b>Job Board<b/></a>   
        <ul class="nav navbar-nav">
            <li><a href="http://pi.cs.oswego.edu/~awalts2/Fall2018/ISCCapstone/Assignments/GroupProject2/index.html">Submit a Job</a></li>
            <li class="active"><a href="http://pi.cs.oswego.edu/~awalts2/Fall2018/ISCCapstone/Assignments/GroupProject2/Assets/scripts/viewJobs.php">View Jobs</a></li>
            <li><a href="">View Applications</a></li>
        </ul>
	</nav>
	<div class="container">
		<div id="headerContainer" class="page-header">
			<h1>Job List</h1>
			<h6><b>USE THIS - http://jsfiddle.net/whytheday/2Dj7Y/11/<b></h6>
		</div>
		<div class="row">
			<div class="col-sm-10 col-sm-offset-1 postCard">
				<div class="col-sm-10 col-sm-offset-1"> 
				<table class="table table-striped table-hover">
					<thead>
						<tr>
							<th>ID</th>
							<th>Company Name</th>
							<th>Job Title</th>
							<th>Contact Name</th>
							<th>Contact Email</th>
							<th>Job Description</th>
						</tr>
					</thead>
					<tbody>
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
							
							$select = "SELECT * FROM job";

							$result = $link->query($select);
							
							if($result->num_rows > 0){
								while($row = $result->fetch_assoc()){
									echo "<tr>" . "<th>" . "<b>" .  $row["ID"] . "</b>" . "</th>" . "<td>" . $row["companyName"] ."</td>" . "<td>" . $row["jobTitle"] ."</td>" . "<td>" . $row["contactName"] ."</td>" . "<td>" . $row["contactEmail"] ."</td>" . "<td>" . $row["jobDescription"] ."</td>";
								}
							}else{
								echo "rekt";
							}		
						  	mysqli_close($link);
						?>
					</tbody>
				</table>	
				</div>
			</div>
		</div>
	</div>
</body>
</html>

