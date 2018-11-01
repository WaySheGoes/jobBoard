$(document).ready(function(){
	var result = null;
	var scriptUrl = "http://pi.cs.oswego.edu/~awalts2/Fall2018/ISCCapstone/Assignments/GroupProject2/Assets/scripts/viewStudents.php";

	getResult();
	processResult();

	$("#jobBtn").click(function(){
		var url = "http://pi.cs.oswego.edu/~awalts2/Fall2018/ISCCapstone/Assignments/GroupProject2/Assets/scripts/insertJob.php?companyName=";
		var companyName = $("#companyName").val();
		var jobTitle = $("#jobTitle").val();
		var contactName = $("#contactName").val();
		var contactEmail = $("#contactEmail").val();
		var jobDescription = $("#jobDescription").val();

		var appendedUrl = url + companyName + "&jobTitle=" + jobTitle + "&contactName=" + contactName 
						  + "&contactEmail=" + contactEmail + "&jobDescription=" + jobDescription;
		window.location = appendedUrl;
	});

	$("#studentBtn").click(function(){
		var url = "http://pi.cs.oswego.edu/~awalts2/Fall2018/ISCCapstone/Assignments/GroupProject2/Assets/scripts/insertStudent.php?studentName=";
		var studentName = $("#studentName").val();
		var studentEmail = $("#studentEmail").val();
		var appendedUrl = url + studentName + "&studentEmail=" + studentEmail;

		window.location = appendedUrl;
	});

	$("table").on("click", ".jobRow", function(){
		if($(".selectRow").length < 1){
			$(this).after("<tr class='selectRow'><td></td><td><select id='selectStudent'><option>Select a Student</option></select></td><td><button type='button' class='btn-xs btn-primary'>Submit</button></td><td></td><td></td><td></td></tr>");
			for(var i = 0; i < result.length; i = i + 3){
				$("select").append("<option value='" + result[i] + "'>" + result[i + 1] + "</option>");
			}
		}else{
			$(".selectRow").remove();
			//$(this).after("<tr class='selectRow'><td></td><td><select id='selectStudent'><option>Select a Student</option></select></td><td><button type='button' class='btn-xs btn-primary'>Submit</button></td><td></td><td></td><td></td></tr>");
		}
	});

	$("table").on("click", ".btn-xs", function(){
		var url = "http://pi.cs.oswego.edu/~awalts2/Fall2018/ISCCapstone/Assignments/GroupProject2/Assets/scripts/insertApplication.php?studentId=";
		var studentId = $("option:selected").val();
		var jobId = $(".selectRow").prev().find("th").text();
		var appendedUrl = url + studentId + "&jobId=" + jobId;

		debugger;
		
		window.location = appendedUrl;
	});

	function getResult(){
		$.ajax({
			url: scriptUrl,
			type: 'get',
			dataType: 'html',
			async: false,
			success: function(data){
				result = data;
			}
		});
	}

	function processResult(){
		result = result.slice(0, -1);
		result = result.split(",");
	}
});