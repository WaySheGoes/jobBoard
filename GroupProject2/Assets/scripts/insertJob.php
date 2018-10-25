<html>
<head>
  <title>Create Job</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="script.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="..\styles\styles.css">
</head>
<body>
<div>
  <nav class="navbar navbar-default">  
        <a class="navbar-brand" href="#"><b>Job Board<b/></a>   
        <ul class="nav navbar-nav">
            <li><a href="http://pi.cs.oswego.edu/~awalts2/Fall2018/ISCCapstone/Assignments/GroupProject2/index.html">Submit a Job</a></li>
            <li><a href="http://pi.cs.oswego.edu/~awalts2/Fall2018/ISCCapstone/Assignments/GroupProject2/Assets/scripts/viewJobs.php">View Jobs</a></li>
            <li><a href="http://pi.cs.oswego.edu/~awalts2/Fall2018/ISCCapstone/Assignments/GroupProject2/Assets/scripts/viewApplications.php">View Applications</a></li>
        </ul>
  </nav>
  <div class="container">
    <div id="headerContainer" class="page-header">
      <h1>
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

        $companyName = $_GET["companyName"];
        $jobTitle = $_GET["jobTitle"];
        $contactName = $_GET["contactName"];
        $contactEmail = $_GET["contactEmail"];
        $jobDescription = $_GET["jobDescription"];

        echo $companyName;

        $insert = "INSERT INTO job (companyName, jobTitle, contactName, contactEmail, jobDescription) VALUES ('" . $companyName . "', '" . $jobTitle . "', '" . $contactName . "', '" . $contactEmail ."', '" . $jobDescription . "')";

        if($link->query($insert)){
          echo "Record Created";
        } else {
          echo "Naht";
        }

        mysqli_close($link);
      ?>
      </h1>
    </div>
  </div>
</body>
</html>