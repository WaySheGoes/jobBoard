$(document).ready(function(){
	$(".btn").click(function(){
		var url = "http://pi.cs.oswego.edu/~awalts2/Fall2018/ISCCapstone/Assignments/GroupProject2/Assets/scripts/insertJob.php?companyName=";
		var companyName = $("#companyName").val();
		var jobTitle = $("#jobTitle").val();
		var contactName = $("#contactName").val();
		var contactEmail = $("#contactEmail").val();
		var jobDescription = $("#jobDescription").val();
		alert(jobDescription);
		var appendedUrl = url + companyName + "&jobTitle=" + jobTitle + "&contactName=" + contactName 
						  + "&contactEmail=" + contactEmail + "&jobDescription=" + jobDescription;
		window.location = appendedUrl;
	});

	$(input).blur(alert(this.val()));
});